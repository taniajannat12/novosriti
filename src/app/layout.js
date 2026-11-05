import "./globals.css";
import AskEngineer from "@/components/AskEngineer";
import { AskEngineerProvider } from "@/components/AskEngineerProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export const metadata = {
  title: "NovoSriti | Abandoned, But Not Forgotten",
  description:
    "An interactive space storytelling experience about the machines humans left behind on the Moon and Mars.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AskEngineerProvider>
          <Navbar/>
          {children}
          <Footer/>
          <AskEngineer />
        </AskEngineerProvider>
      </body>
    </html>
  );
}