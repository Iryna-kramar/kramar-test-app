"use client";

import "./globals.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { QueryProvider } from "../queryClient";
import Navbar from './../components/Navbar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = createTheme();


  return (
    <html lang="en">
      <head />
      <body>
      <ThemeProvider theme={theme}>
      <Navbar />
          <QueryProvider>{children}</QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

