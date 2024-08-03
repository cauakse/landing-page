import style from "./select.module.scss"

export default function select ({placeholder,required,options,onChange,id,name}){
    return (
        <select 
        required={required} 
        className={style.select}
        onChange={onChange} 
        id={id} 
        name={name}>
            <option value="" disabled selected>{placeholder}</option>
            {options?.map((option,index)=>
               <option 
               key={index} 
               value={option.value}>
                    {option.text}
                </option>
            )}
        </select>
    )
}