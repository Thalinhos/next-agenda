'use client';
import type { Metadata } from "next";
import "./globals.css";
import { SessionProvider, signOut } from "next-auth/react";

// export const metadata: Metadata = {
//   title: "Agenda App",
//   description: "Agenda para gerenciar tarefas diárias",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
