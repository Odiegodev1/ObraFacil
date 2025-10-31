
import { Sora } from "next/font/google";
import "./globals.css";
import { Toaster } from 'sonner';
const fontfamily = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: [ "200", "300", "400", "500", "600", "700"],
});




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${fontfamily.className} antialiased`}
      >
        <Toaster />
        {children}
      </body>
    </html>
  );
}
