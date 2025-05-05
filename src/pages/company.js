import { useEffect, useState } from "react"
import { FetchProducts, AddProducts, UpdateProducts, DeleteProducts } from "../apiService/productApi"
import { FaPencilAlt } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { CustomTable } from "../components/Table";
import { ProductForm } from "../components/form/productsForm"
import { useSelector } from "react-redux";

let CompanyModule = ({data}) => {
    let [openForm, setOpenForm] = useState(false)
    let [products, setProducts] = useState([])

    let { userData } = useSelector((state) => state.user)

    let [InitialData, setInitialData] = useState()

    let Headers = [
        { key: "name", value: "PRODUCT NAME" },
        { key: "productType", value: "PRODUCT TYPE" },
        { key: "price", value: "PRICE" },
        { key: "stock", value: "STOCK" },
    ]

    let fetchAll = async () => {
        try{
            let response = await FetchProducts()
            if(response.data.success){
                setProducts(response.data.data)
            }
        } catch (err){
            console.log(err)
        }
    }

    useEffect(() => {
        fetchAll()
    },[])

    let HandleForm = (row) => {
        console.log(row)
        if(row.id){
            setInitialData(row)
        } else {
            setInitialData(row)
        }
        setOpenForm(true)
    }

    let HandleSubmit = async (data) => {
        if(data.id){
            await UpdateProducts(data.id, data)
        }else{
            delete data.id
            await AddProducts(data)
        }
        setOpenForm(false)
        fetchAll()
    }

    let HandleDelete = async (row) => {
        try{
            await DeleteProducts(row.id)
        } catch(err){
            console.log(err)
        }
        fetchAll()
    }

    let Actions = (row) => {
        return(
            <div className="flex justify-between">
                <div>
                    <button
                        onClick={() => HandleForm(row)}
                    >
                        <FaPencilAlt />
                    </button>
                </div>
                <div>
                    <button
                        onClick={() => HandleDelete(row)}
                        className="ml-[15px]"
                    >
                        <FaRegTrashAlt />
                    </button>
                </div>
            </div>
        )
    }

    return(
        <div>
            {!openForm &&
                <div className="mt-[15px] ml-[10%]">
                    <div>
                        <button
                            className="border border-gray-400 py-1 px-2 rounded-md"
                            onClick={ () => HandleForm({ id: null, name: "", productType: "", price: null,stock: null, companyName: userData.companyName })}
                        >
                            Add Products
                        </button>
                    </div>
                    <div className="mt-[20px]">
                        <CustomTable
                            data={products}
                            header={Headers}
                            action={Actions}
                        />
                    </div>
                </div>
            }
            {openForm && 
                <ProductForm 
                    initialData = {InitialData}
                    onSave = {HandleSubmit}
                />
            }
        </div>
    )
}

export { CompanyModule }