"use client";
import { Toaster } from "react-hot-toast";

// Without this, every toast() in the app was silently dropped — including
// every invite/join error, which looked to users like "nothing happens".
export default function ToastHost() {
  return (
    <Toaster
      position="top-center"
      toastOptions={{
        duration: 4000,
        style: { fontFamily: "'Inter',system-ui,sans-serif", fontSize: 14, borderRadius: 12, padding: "10px 14px", maxWidth: 420 },
        success: { iconTheme: { primary: "#0F7A73", secondary: "#fff" } },
        error: { duration: 6000 },
      }}
    />
  );
}
