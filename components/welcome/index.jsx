import style from './welcome.module.scss'
import Button from '../button'
export default function () {
    return (
        <div className={style.containes}>
            <div className={style.text}>
                <h1>Melhor agência de marketing do bairro</h1>
                <p>Somos uma agência de performance digital, aceleramos vendas e aquisição de leads para grandes marcas.</p>
            </div>
            <div className={style.image}></div>
            <Button tittle={"Aumentar Vendas"} kind={"secondary"}/>
        </div>
    )
}