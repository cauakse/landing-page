import style from './input.module.scss'

export default function Input ({text,type,pattern,required,onChange,id,name}) {
    return (
        <input type={type} placeholder={text} pattern={pattern} required={required} className={style.input} onChange={onChange} id={id} name={name}/>
    )
}