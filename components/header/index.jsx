import Link from 'next/link'
import Logo from '../../public/images/agência.svg'
import Image from 'next/image'
import style from './header.module.scss'

const Header = () => {
    return (<div className={style.container}>
        <div className={style.logotipo}>
            <Image src={Logo}></Image>
        </div>
        <div className={style.menu}>
            <Link href="/">Home</Link>
            <Link href="/">O que fazemos</Link>
            <Link href="/">Cases</Link>

        </div>
        <div className={style.action}>
            <button className={style.button}>Fale conosco</button>
        </div>
    </div>)
}

export default Header