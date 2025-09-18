import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agenda App",
  description: "Agenda para gerenciar tarefas diárias",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
