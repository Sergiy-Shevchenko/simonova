import { Header } from "@/components/Header/Header";
import "./globals.css";
import type { Metadata } from "next";

import { Lora} from "next/font/google";

const lora = Lora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "НОТАРІУС Сімонова Вікторія",
  description: "нотаріус сімонова вікторія валеріївна",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ua">
      <body className={lora.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
