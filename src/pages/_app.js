import "@/styles/globals.css";
import localFont from "next/font/local";
const generalSans = localFont({
  src: [
    {
      path: "../../public/fonts/GeneralSans-Bold.woff",
      weight: "600",
    },
    {
      path: "../../public/fonts/GeneralSans-Extralight.woff",
      weight: "100",
    },
    {
      path: "../../public/fonts/GeneralSans-Light.woff",
      weight: "200",
    },
    {
      path: "../../public/fonts/GeneralSans-Regular.woff",
      weight: "400",
    },
    {
      path: "../../public/fonts/GeneralSans-Semibold.woff",
      weight: "500",
    },
    {
      path: "../../public/fonts/GeneralSans-Medium.woff",
      weight: "300",
    },
    {
      path: "../../public/fonts/GeneralSans-Variable.woff",
      weight: "700",
    },
  ],
  variable: "--font-generalsans",
});
export default function App({ Component, pageProps }) {
  return (
    <main className={`${generalSans.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
