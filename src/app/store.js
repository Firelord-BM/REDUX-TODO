import todoSlice from "@/features/todo/todoSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer:todoSlice
})