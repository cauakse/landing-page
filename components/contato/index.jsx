import Button from '../button'
import Input from '../input'
import Select from '../select'
import style from './contato.module.scss'

export default function Contato (){
    return (
        <div className={style.container}>
            <div className={style.texts}>
                <span>ENTRE EM CONTATO</span>
                <h1>Aumente seu resultado de vendas e performance</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
            </div>
            <div className={style.form}>
                    <h1>Fale com um especialista</h1>
                    <form>
                        <Input type={"text"} text={"Nome completo"}  required={true}/>
                        <Input type={"email"} text={'E-mail profissional'} required={true}/>
                        <Input type={"text"} text={'Celular/Whatsapp' } pattern={`/^(?:\\+)[0-9]{2}\\s?(?:\\()[0-9]{2}(?:\\))\\s?[0-9]{4,5}(?:-)[0-9]{4}$/`} required={true}/>
                        <Input type={"text"} text={'Site'}  required={true}/>
                        <Select 
                        placeholder={"Orçamento para mídia"}
                         required={true} 
                         options={[
                            {text:"Instagram",value:"Instagram"},
                            {text:"Facebook",value:"Facebook"}
                            ]}/>

                         
                        <Button tittle={"Enviar"} kind={"full"}/>
                    </form>

                  
            </div>
        </div>
    )
}