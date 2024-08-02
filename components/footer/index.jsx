import style from "./footer.module.scss"
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../public/images/agência.svg'
import youtube from '../../public/images/youtube.png'
import facebook from '../../public/images/facebook.png'
import linkedin from '../../public/images/linkedin.png'
import instagram from '../../public/images/instagram.png'

export default function Footer () {
    return (
        <div className={style.container}>
            <div className={`${style.collum} ${style.collumPrincipal}`}>
                <Image src={Logo} alt="Logo"/>
                <h1 className={style.tittle}>0800 800 800</h1>
                <p>comercial@agencia.com.br</p>
            </div>
            <div className={style.collum}>
                <h1>MENU</h1>
                <p>Quem somos</p>
                <p>Cases</p>
            </div>
            <div className={style.collum}>
                <h1>CONTEÚDO</h1>
                <p>E-books</p>
                <p>Fórmulas prontas</p>
            </div>
            <div className={`${style.collum} ${style.finalTittle}`}>
                <h1>Social</h1>
                <div className={style.icons}>
                    <Link href='/'><Image src={instagram}/> </Link>
                    <Link href='/'><Image src={facebook}/> </Link>
                    <Link href='/'><Image src={linkedin}/> </Link>
                    <Link href='/'><Image src={youtube}/> </Link>
                    </div>
            </div>

            <div className={`${style.collum} ${style.allrightreserved}`}>
                <p>©2022 AGENCIA - Todos os direitos reservados.</p>
            </div>

        </div>
    )
}