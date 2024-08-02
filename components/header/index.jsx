import Link from 'next/link'
import Logo from '../../public/images/agência.svg'
import Image from 'next/image'
import style from './header.module.scss'
import Button from '../button'

const Header = () => {
    return (
    <div className={style.container}>
            <Image src={Logo} alt='logo' className={style.logotipo}></Image>
        <div className={style.menu}>
            <Link href="/">Home</Link>
            <Link href="/">O que fazemos</Link>
            <Link href="/">Cases</Link>

        </div>
        <div className={style.action}>
           <Button tittle={"Fale Conosco"} kind={"primary"} />
        </div>
    </div>)
}

export default Header