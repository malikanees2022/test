"use client";

import axios, { AxiosError } from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Provider } from 'react-redux';
import { store } from '../services/store';

import Loader from '../components/loader/Loader'
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import './dashboard.css'
import Sidebar from "../components/sidebar/Sidebar";

interface UserResponse {
  user: string | null;
  error: AxiosError | null;
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const { push } = useRouter();

  useEffect(() => {
    (async () => {
      const { user, error } = await getUser();

      if (error) {
        push("/");
        return;
      }

      // if the error did not happen, if everything is alright
      setIsSuccess(true);
    })();
  }, [push]);

  if (!isSuccess) {
    return <div> <Loader/> </div>;
  }

  return (
    <Provider store={store}>
    <main>
      <Navbar/>
      <Sidebar/>
      <div className="mt-20">{children}</div>
      
      <Footer/>
    </main>
    </Provider>
  );
}

async function getUser(): Promise<UserResponse> {
  try {
    const { data } = await axios.get("/api/auth/me");

    return {
      user: data,
      error: null,
    };
  } catch (e) {
    const error = e as AxiosError;

    return {
      user: null,
      error,
    };
  }
}