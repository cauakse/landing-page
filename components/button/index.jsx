import style from "./button.module.scss"

export default function Button ({tittle,kind}){
    return (
        <button className={`${style.button} ${kind === "primary" ? style.primary : style.secondary}`}>
            {tittle}
        </button>
    )
}