import Link from 'next/link'
import Button from '../button'
import Input from '../input'
import Select from '../select'
import style from './contato.module.scss'
import { useState } from 'react'

export default function Contato (){


    const defaultClient = {
        name:'',
        email:'',
        tel:'',
        site:'',
        midia:''
    }

    const handleChange = (ev)=> {
        setClient((state)=>{
            return{
                ...state,
                [ev.target.name]: ev.target.value
            }
        })
    }
    
    const [client, setClient] = useState(defaultClient);

    const SendEmail = (ev)=>{
        ev.preventDefault();
        console.log(client)
        fetch('/api/sendEmail',{
            method:"POST",
            headers:{
                'Content-Type':"application/json"
            },
            body: JSON.stringify(client)
        }).then(()=>console.log("Tudo certo")).catch(()=>console.log("Algo deu errado..."))
    }
    return (
        <div className={style.container}>
            <div className={style.texts}>
                <span>ENTRE EM CONTATO</span>
                <h1>Aumente seu resultado de vendas e performance</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
            </div>
            <div className={style.form}>
                    <h1>Fale com um especialista</h1>
                    <form onSubmit={SendEmail}>
                        <Input 
                        type={"text"} 
                        text={"Nome completo"} 
                        id='name' 
                        name='name'
                          required={true} 
                          value={client.name} 
                          onChange={handleChange}/>

                        <Input 
                        type={"email"} 
                        text={'E-mail profissional'}  
                        id='email' 
                        name='email'
                        required={true} 
                        value={client.email} 
                        onChange={handleChange}/>
                        
                        <Input type={"text"} 
                        text={'Celular/Whatsapp'}   
                        id='tel' 
                        name='tel'
                        required={true} 
                        value={client.tel}
                        onChange={handleChange}/>

                        <Input type={"text"} 
                        text={'Site'}   
                        id='site' 
                        name='site'
                        required={true} 
                        value={client.site}
                        onChange={handleChange}/>

                        <Select 
                        placeholder={"Orçamento para mídia"} 
                        id='midia' 
                        name='midia'
                         required={true} 
                         onChange={handleChange}
                         options={[
                            {text:"Instagram",value:"Instagram"},
                            {text:"Facebook",value:"Facebook"}
                            ]}
                            />

                         
                        <Button tittle={"Enviar"} kind={"full"} />
                    </form>
            </div>
            <div className={style.footer}>
                    <p>
                        Ao enviar esse formulário, você reconhece que leu e concorda com a nossa
                        <Link href={"/"}>
                            <strong> Política de Privacidade.</strong>
                        </Link>
                        
                    </p>
            </div>
        </div>
    )
}