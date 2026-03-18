"use client";

import { BrowserRouter } from "react-router";

export default function ClientRouter({ children }: { children: React.ReactNode }) {
  return <BrowserRouter>{children}</BrowserRouter>;
}