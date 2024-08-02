import styles from "./Home.module.scss";
import Header from "../components/header";
import Welcome from '../components/welcome/index.jsx'
import Features from "@/components/features";
import Contato from "@/components/contato";


export default function Home() {
  return (
    <div className={styles.container}>
      <Header/>
      <Welcome />
      <Features/>
      <Contato/>
    </div>
  )
      
}
