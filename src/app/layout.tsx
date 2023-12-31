import Menu from "@/components/Nav/Index";
import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <Menu>{children}</Menu>
      </body>
    </html>
  );
}
