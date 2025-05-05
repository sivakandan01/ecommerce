import { useEffect, useState } from "react"
import { FetchUsers } from "../apiService/userApi"
import { FetchProducts } from "../apiService/productApi"
import { CustomTable } from "../components/Table"

let Admin = () => {
    let [activeTab, setActiveTab] = useState("Users")
    let [users, setUsers] = useState([])
    let [products, setProducts] = useState([])

    let UserHeaders = [
        { key: "userName", value: "USER NAME" },
        { key: "email", value: "EMAIL" },
        { key: "role", value: "ROLE" }
    ]

    let ProductHeaders = [
        { key: "name", value: "PRODUCT NAME" },
        { key: "productType", value: "PRODUCT TYPE" },
        { key: "companyName", value: "COMPANY NAME" },
        { key: "price", value: "PRICE" },
        { key: "stock", value: "STOCK" },
    ]

    useEffect(() => {
        let FetchAllData = async () => {
            try{
                let response = await FetchUsers()
                let productResponse = await FetchProducts()
                if(response.data.success && productResponse.data.success){
                    setUsers(response.data.data)
                    setProducts(productResponse.data.data)
                }
            } catch(err){
                console.log(err)
            }
        }
        FetchAllData()
    })

    return(
        <div>
            <div className="ml-[30px] mt-[15px]">
                <button 
                    onClick={() => setActiveTab("Users")}
                    className="border-gray-400 border py-1 px-2 rounded-md"
                >
                    Users
                </button>
                <button 
                    onClick={() => setActiveTab("Products")} 
                    className="ml-[20px] border-gray-400 border py-1 px-2 rounded-md"
                >
                    Products
                </button>
            </div>
            <div className="mt-4">
                <CustomTable 
                    data={activeTab === "Users" ? users : products}
                    header={activeTab === "Users" ? UserHeaders : ProductHeaders}
                />
            </div>
        </div>
    )
}

export { Admin }