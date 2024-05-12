// components/LogoutButton.tsx
'use client'
import { FaUser } from "react-icons/fa";
// import axios from 'axios';
// import { useRouter } from 'next/navigation';
// import { useEffect, useState } from 'react';

const LogoutButton = () => {
//   const router = useRouter();
//   const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    await fetch('/api/auth/logout',{
        method:"post",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify({}),
    })
    // setIsLoggingOut(true);

    // try {
    //   await axios.post('/api/auth/delete');
    //   console.log("trueee")
    //   router.push('/');
    // } catch (error) {
    //   console.error('Failed to log out:', error);
    //   setIsLoggingOut(false);
    //   console.log("falseee")
    // }
  };

  return (
    <button onClick={handleLogout} >
    {/* //   {isLoggingOut ? 'Logging out...' : 'Logout'} */}
    <div className="flex flex-col items-center justify-center relative h-full group">
        <span className="px-4 rounded-full py-4 bg-white group-hover:hidden "><FaUser /></span>
        <h1 className="bg-white group-hover:block  hidden px-1 py-2 mt-2 rounded-lg font-bold text-xs">LogOut</h1>
    </div>
    </button>
  );
};

export default LogoutButton;
