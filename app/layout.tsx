import "./globals.css";
import Navbar from "./_Components/Navbar";
import Footer from "./_Components/Footer"; 
import FloatingActions from "./_Components/FloatingActions"; 
export const metadata = {
  title: "عالم الدهانات | ألوان فخمة لمنزلك",
  description: "اكتشف أحدث صيحات الألوان والدهانات العصرية في مصر",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="antialiased flex flex-col min-h-screen bg-slate-50">

        <main className="flex-grow">
          {children}
          <Navbar/>
        </main>

        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}