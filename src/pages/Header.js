import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { setUser } from "../store/slice/userSlice"

let Header = () => {
    let [IsAdmin, setIsAdmin] = useState(false)
    let [IsCompany, setIsCompany] = useState(false)

    let navigate = useNavigate()
    let dispatch = useDispatch()
    let { userData } = useSelector((state) => state.user)

    useEffect(() => {
        if(userData.role === "admin"){
            setIsAdmin(true)
        } else if (userData.role === "company") {
            setIsCompany(true)
        }
    },[userData.role])

    let HandleLogout = () => {
        dispatch(setUser({}))
        navigate("/login")
    }

    return(
        <div className="flex items-center justify-between h-[72px] border-b border">
            <div className="">
                <p className="ml-[40px]">Name</p>
            </div>
            <div className="space-x-4 mr-[30px]">
                <button
                    className="border-gray-400 border py-1 px-2 bg-white rounded-md"
                    onClick={() => navigate("/")}
                >
                    Home
                </button>
                <button
                className="border-gray-400 border py-1 px-2 bg-white rounded-md"
                onClick={() => navigate("/cart")}
                >
                    Cart
                </button>

                {IsCompany && 
                    <button 
                    className="border-gray-400 border py-1 px-2 bg-white rounded-md"
                    onClick={() => navigate("/company")}
                    >
                        Company
                    </button>
                }

                {IsAdmin && 
                    <button 
                    className="border-gray-400 border py-1 px-2 bg-white rounded-md"
                    onClick={() => navigate("/admin")}
                    >
                        Admin Panel
                    </button>
                }
                <button 
                    className="border-gray-400 border py-1 px-2 bg-white rounded-md"
                    onClick={HandleLogout}
                >
                    Logout
                </button>
            </div>
        </div>
    )
}

export { Header }