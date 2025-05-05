let TextInput = ({label, name, value, onchange}) => {
    return(
        <div>
            <label>{label}</label><br />
            <input type="text" className="border-gray-400 border w-[260px] h-[32px] px-2 py-1 rounded-md" name= {name} value= {value} onChange={onchange} />
        </div>
    )
}

let SelectInput = ({label, name, value, onchange, options}) => {
    return(
        <div>
            <label>{label}</label><br />
            <select className="border-gray-400 border w-[260px] h-[36px] rounded-md" name={name} value={value} onChange={onchange}>
            <option value="" disabled>select an role</option>
                {options.map((opt) => 
                    <option value={opt}>{opt}</option>
                )}
            </select>
        </div>
    )
}

let NumberInput = ({label, name, value, onchange}) => {
    return(
        <div>
            <label>{label}</label><br />
            <input type="number" className="border-gray-400 border w-[260px] h-[32px] px-2 py-1 rounded-md" name= {name} value= {value} onChange={onchange} />
        </div>
    )
}

let Button = ({value, type, classname = ""}) => {
    return(
        <button type={type} className={classname}>{value}</button>
    )
}

export { TextInput, Button, SelectInput, NumberInput }