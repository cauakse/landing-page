import "@/styles/globals.scss";
import {Roboto} from 'next/font/google'

const roboto = Roboto({subsets:['latin'], weight:['100','300','400','500','700','900'],});
export default function App({ Component, pageProps }) {
  return(
    <main className={roboto.className}>
        <Component {...pageProps} />
    </main>);
}
