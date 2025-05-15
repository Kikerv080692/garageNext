'use client'
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "src@/components/Header/Header";
import Footer from "src@/components/Footer/Footer";
import { ThemeProvider } from "styled-components";
import ButtonPhone from "src@/components/Header/components/ButtonPhone/ButtonPhone";
import '../i18n'
import ButtonLocation from "src@/components/ButtonLocation/ButtonLocation";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider theme={{}}>
        <body style= {{display: "flex", flexDirection: "column", minHeight: "100vh"}}>
          <Header />
          <main style={{flex: "1"}}>
            {children}
            <ButtonPhone/>
            <ButtonLocation/>
          </main>
            
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  );
}
