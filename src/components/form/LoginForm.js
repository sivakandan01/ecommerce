import { useState } from "react"
import { TextInput, Button } from "../ui/Input"
import { Login } from "../../apiService/userApi"
import { useDispatch } from "react-redux"
import { setUser } from "../../store/slice/userSlice"
import { useNavigate } from "react-router-dom"

let LoginForm = ({ setLog }) => {
    let [loginFormData, setLoginFormData] = useState({
        email: "",
        password: ""
    })

    let dispatch = useDispatch()
    let navigate = useNavigate()

    let HandleChange = (e) => {
        let {name, value} = e.target
        setLoginFormData((prev) => ({  ...prev, [name]: value }))
    }

    let Submit = async (e) => {
        e.preventDefault()
        try{
            let response = await Login(loginFormData)
            if(response.data.success){
                dispatch(setUser(response.data.data))
            }
            navigate("/")
            setLog(true)
        } catch (err){
            console.log(err)
        }
    }

    return(
        <div className="w-[300px] border border-black rounded-md py-3 mt-[20px] ml-[35%]">
            <div className="flex justify-center">
                <h3 className="mb-2 font-semibold">Login</h3>
            </div><hr />
            <form onSubmit={Submit} className="space-y-6 mx-[15px]">
                <TextInput 
                    label = "Email"
                    name = "email"
                    value = {loginFormData.email}
                    onchange={HandleChange}
                />
                <TextInput 
                    label = "Password"
                    name = "password"
                    value = {loginFormData.password}
                    onchange={HandleChange}
                />
                <Button 
                    type= "submit"
                    value= "Login"
                    classname="bg-blue-700 text-white w-[260px] h-[32px] px-2 py-1 rounded-md mb-4"
                />
                <p className="ml-[10px]">Dont have an account ?<button className="ml-[10px] text-blue-700 underline" onClick={() => navigate("/register")}>Register</button></p>
            </form>
        </div>
    )
}

export { LoginForm }