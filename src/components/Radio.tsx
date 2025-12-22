import { useState } from "react"
export default function Radio({ label, enum_value, color, style, onSelected } : {label : string, enum_value : string, color : string | "bg-gray-200", style: string | "", onSelected : (enum_value: string, selected: boolean) => void}){
    const [checked, setChecked] = useState<boolean>(false)
    
    function handleClick(e: any ){
        const value = e.target.value;
        setChecked(!checked);
        onSelected(value, checked)
    }
    return (
        <div className={"px-2 py-4 rounded " + style + " " + (checked ? "bg-"+color : "border-3 border-"+color)}>
            <input className="hidden" id={enum_value} type="checkbox" value={enum_value} defaultChecked={checked} onClick={(e) => handleClick(e)}/>
            <label htmlFor={enum_value}>{label}</label>
        </div>
    )
}