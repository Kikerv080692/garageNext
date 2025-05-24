
import "./globals.css";
import Header from "src@/components/Header/Header";
import Footer from "src@/components/Footer/Footer";
import ButtonPhone from "src@/components/Header/components/ButtonPhone/ButtonPhone";
import '../i18n'
import ButtonLocation from "src@/components/ButtonLocation/ButtonLocation";
import Theme from "src@/components/Theme/Theme";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body style= {{display: "flex", flexDirection: "column", minHeight: "100vh", background: " #131619"}}>
      <Theme>
          <Header />
          <main style={{flex: "1"}}>
            {children}
            <ButtonPhone/>
            <ButtonLocation/>
          </main>
          <Footer />
      </Theme>
        </body>
    </html>
  );
}
