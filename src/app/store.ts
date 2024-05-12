import { create } from "zustand";
import { persist } from "zustand/middleware";

type Item = {
    image: string;
    title: string;
};
type CounterStore = {
    count: number;
    isSidebarOpen: boolean;
    items: Item[];
    increment: () => void;
    decrement: () => void;
    openSidebar: () => void;
    closeSidebar: () => void;
    addItem: (item: Item) => void;
    deleteItem: (index: number) => void; 
};

// Define a key for local storage persistence
const localStorageKey = "counterStore";

// Define the initial state
const initialState: CounterStore = {
    count: 0,
    isSidebarOpen: false,
    items: [],
    increment: () => {},
    decrement: () => {},
    openSidebar: () => {},
    closeSidebar: () => {},
    addItem: () => {},
    deleteItem: () => {}
};

// Create a store with persist middleware
export const useCounterStore = create<CounterStore>(
  persist(
    (set) => ({
      ...initialState,
      // Implement your state update functions here
      increment: () => set((state) => ({ count: state.count + 1 })),
      decrement: () => set((state) => ({ count: state.count - 1 })),
      openSidebar: () => set(() => ({ isSidebarOpen: true })),
      closeSidebar: () => set(() => ({ isSidebarOpen: false })),
      addItem: (item) => set((state) => ({ items: [...state.items, item] })),
      deleteItem: (index) =>
        set((state) => ({
          items: state.items.filter((_, i) => i !== index),
        })),
    }),
    {
      name: localStorageKey, // Storage key
      getStorage: () => localStorage, // Storage mechanism
    }
  )
);
