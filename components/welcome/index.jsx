import style from './welcome.module.scss'
import Button from '../button'
import cardImage from '../../public/images/cardImage.svg'
import Image from 'next/image'
export default function Welcome () {
    return (
        <div className={style.container}>
            <div className={style.text}>
                <h1>Melhor agência de marketing do bairro</h1>
                <p>Somos uma agência de performance digital, aceleramos vendas e aquisição de leads para grandes marcas.</p>
                <Button tittle={"Aumentar Vendas"} kind={"secundary"}/>
            </div>
            
                <Image src={cardImage} alt='Banner Image' className={style.image}/>
            
           
        </div>
    )
}