import style from './welcome.module.scss'
import Button from '../button'
import cardImage from '../../public/images/cardImage.svg'
import fundo from '../../public/images/fundo.svg'
import Image from 'next/image'
export default function Welcome () {
    return (
        <div className={style.container}>
            <div className={style.text}>
                <h1>Melhor agência de marketing do bairro</h1>
                <p>Somos uma agência de performance digital, aceleramos vendas e aquisição de leads para grandes marcas.</p>
                <Button tittle={"Aumentar Vendas"} kind={"secondary"}/>
            </div>
            <div className={style.image}>
                <Image src={cardImage} alt='Banner Image'/>
            </div>
           
        </div>
    )
}