import { Header } from "./pages/Header"
import { Routes, Route, useLocation } from "react-router-dom"
import { CompanyModule } from "./pages/company"
import { Cart } from "./pages/cart"
import { Admin } from "./pages/admin"
import { Home } from "./pages/home"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { LoginForm } from "./components/form/LoginForm"
import { RegisterForm } from "./components/form/RegisterForm"
import { useEffect } from "react"

function App() {
    let { userData } = useSelector((state) => state.user)
    console.log(userData)

    let navigate = useNavigate()
    let location = useLocation()

    useEffect(() => {
        if ((!userData || Object.keys(userData).length === 0) && location.pathname !== "/login" && location.pathname !== "/register") {
            navigate("/login")
        }
    }, [userData, location.pathname, navigate])

    const hideHeader = location.pathname === "/login" || location.pathname === "/register"
    

    return (
        <div >
            {!hideHeader && <Header />}
            <Routes>
                <Route path="/login" element={ <LoginForm/> } />
                <Route path="/register" element={<RegisterForm />} />
                <Route path="/" element={ <Home /> } />
                <Route path="/admin" element={ <Admin /> } />
                <Route path="/cart" element={ <Cart /> } />
                <Route path="/company" element={ <CompanyModule />} />
            </Routes>
        </div>
    )
}

export default App;
