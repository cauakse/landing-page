import style from "./button.module.scss"

export default function Button ({tittle,kind}){
    function generateClassByKind () {
        if(kind==="primary") return style.primary
        if(kind==="secundary") return style.secundary

        return style.full
    }
    return (
        <button className={`${style.button} ${generateClassByKind()}`}>
            {tittle}
        </button>
    )
}