"use client";

import { Inter } from "@next/font/google";
import SignUp from "./(auth)/register/page";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <SignUp />
    </main>
  );
}
