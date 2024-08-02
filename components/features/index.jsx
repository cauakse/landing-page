import style from './features.module.scss'
import icon from "../../public/images/Outline.svg"
import Image from "next/image"

export default function Features() {
    return (
        <div className={style.container}>
            <h1 className={style.firstTittle}>Neste bairro, não há agência melhor. Garantimos.</h1>
            <p className={style.secondTittle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

            <div className={style.features}>
                <div className={style.feature}>
                    <Image src={icon} alt="icone"  className={style.icon}></Image>
                    <h1>
                        Digital Strategy
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nam rerum quidem exercitationem aspernatur quasi eos, explicabo maxime molestias inventore.</p>
                </div>
                <div className={style.feature}>
                 <Image src={icon} alt="icone" className={style.icon}></Image>
                    <h1>
                        Estratégia digital
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nam rerum quidem exercitationem aspernatur quasi eos, explicabo maxime molestias inventore.</p>
                </div>
                <div className={style.feature}>
                    <Image src={icon} alt="icone" className={style.icon}></Image>
                    <h1>
                    Social Midia
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nam rerum quidem exercitationem aspernatur quasi eos, explicabo maxime molestias inventore.</p>
                </div>
                <div className={style.feature}>
                    <Image src={icon} alt="icone" className={style.icon}></Image>
                    <h1>
                     Social Midia
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nam rerum quidem exercitationem aspernatur quasi eos, explicabo maxime molestias inventore.</p>
                </div>
            </div>
        </div>
    )
}