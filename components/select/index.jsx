import style from "./select.module.scss"

export default function select ({placeholder,required,options}){
    return (
        <select required={required} className={style.select}>
            <option value="" disabled selected>{placeholder}</option>
            {options?.map((option,index)=>
               <option key={index} value={option.value}>
                    {option.text}
                </option>
            )}
        </select>
    )
}