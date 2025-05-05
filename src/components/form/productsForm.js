import { useState } from "react"
import { TextInput, Button, NumberInput } from "../ui/Input"

let ProductForm = ({initialData, onSave, onClose}) => {
    let [formData, setFormData] = useState(initialData)

    let HandleSubmit = (e) => {
        e.preventDefault()
        onSave(formData)
    }

    let HandleChange = (e) => {
        let {name, value} = e.target
        setFormData((prev) => ({...prev, [name]: value}))
    }

    return(
        <div className="mt-[20px] ml-[35%]">
            <form className="space-y-4" onSubmit={HandleSubmit}>
                <TextInput
                    name="name"
                    label="Product Name"
                    value={formData.name}
                    onchange={HandleChange}
                />
                <TextInput
                    name="productType"
                    label="Product Type"
                    value={formData.productType}
                    onchange={HandleChange}
                />
                <NumberInput
                    name="price"
                    label="Price"
                    value={formData.price}
                    onchange={HandleChange}
                />
                <NumberInput
                    name="stock"
                    label="Stock"
                    value={formData.stock}
                    onchange={HandleChange}
                />
                <TextInput
                    name="companyName"
                    label="Company Name"
                    value={formData.companyName}
                    onchange={HandleChange}
                />
                <Button
                    value={initialData.id ? "Update Product" : "Create Product"}
                    type = "submit"
                    classname="bg-blue-700 text-white w-[260px] h-[32px] px-2 py-1 rounded-md mb-4"
                />
            </form>
        </div>
    )
}

export { ProductForm }