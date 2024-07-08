import React from "react";

export default function Button({ children, className }: any) {
  return (
    <button
      className={`px-10 py-4 rounded-xl border border-black text-lg font-normal ${className}`}
    >
      {children}
    </button>
  );
}
