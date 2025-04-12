import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <main className="w-full">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}