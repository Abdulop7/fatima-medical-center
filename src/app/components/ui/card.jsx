import React from "react";

export function Card({ children, className }) {
  return (
    <div
      className={`bg-white shadow-lg rounded-2xl border border-gray-100 hover:shadow-2xl transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );
}

export function CardContent({ children, className }) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}
