import "@/styles/globals.css";
import { Main } from "next/document";

export default function App({ Component, pageProps }) {
  return (
    <main>
      <Component {...pageProps} />
    </main>
  );
}
