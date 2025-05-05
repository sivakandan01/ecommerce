import { useState } from "react"
import { TextInput, Button, SelectInput } from "../ui/Input"
import { Register } from "../../apiService/userApi"
import { useNavigate } from "react-router-dom"

let RegisterForm = () => {
    let [registerFormData, setRegisterFormData] = useState({
        userName: "",
        email: "",
        password: "",
        role: "",
        companyName: ""
    })

    let navigate = useNavigate()

    let HandleChange = (e) => {
        let {name, value} = e.target
        setRegisterFormData((prev) => ({ ...prev, [name]: value }))
    }

    let Submit = async (e) => {
        e.preventDefault()
        try{
            let response = await Register(registerFormData)
            if(response.success){
                console.log(response.data)
            }
            navigate("/login")
        }catch(err){
            console.log(err)
        }
    }

    return(
        <div className="w-[300px] border border-black rounded-md py-3 mt-[20px]  ml-[35%]">
            <div className="flex justify-center">
                <h3 className="mb-2 font-semibold">Register</h3>
            </div><hr />
            <form onSubmit={Submit} className="space-y-6 ml-[15px]">
                <TextInput 
                    label = "UserName"
                    name="userName"
                    value={registerFormData.userName}
                    onchange={HandleChange}
                />
                <TextInput 
                    label = "Email"
                    name="email"
                    value={registerFormData.email}
                    onchange={HandleChange}
                />
                <TextInput 
                    label = "Password"
                    name="password"
                    value={registerFormData.password}
                    onchange={HandleChange}
                />
                <SelectInput 
                    label = "Role"
                    name="role"
                    value={registerFormData.role}
                    onchange={HandleChange}
                    options = {["customer", "company"]}
                />
                {registerFormData.role === "company" &&
                    <TextInput 
                        label = "CompanyName"
                        name="companyName"
                        value={registerFormData.companyName}
                        onchange={HandleChange}
                    />
                }
                <Button
                    type= "submit"
                    value= "Register"
                    classname="bg-blue-700 text-white w-[260px] h-[32px] px-2 py-1 rounded-md mb-4"
                />
            </form>
        </div>
    )
}

export { RegisterForm }