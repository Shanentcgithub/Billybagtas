import React from "react";

export default function Background({ children }: { children?: React.ReactNode }) {
  return (
    <div
      className="min-h-screen w-full bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: 'url("/inlovingmemories.png")',
      }}
    >
      {/* Overlay Effect */}
      <div
        className="absolute inset-0 bg-black opacity-50 backdrop-blur-lg"
        style={{
          filter: "blur(16px)",
          zIndex: 0,
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

