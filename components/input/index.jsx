import style from './input.module.scss'

export default function Input ({text,type,pattern,required}) {
    return (
        <input type={type} placeholder={text} pattern={pattern} required={required} className={style.input}/>
    )
}