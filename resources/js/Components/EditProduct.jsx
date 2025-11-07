import React, { useState } from "react";
import { useForm } from "@inertiajs/react";

export default function EditProduct({ product = [] }) {
    const [visible, setVisible] = useState(false);
    const {
        data: productData,
        setData: setProduct,
        post: postProduct,
        processing: processingEditProduct,
        reset: resetForm,
    } = useForm({
        name: product.name || "",
        quantity: product.quantity || "",
        price: product.price || "",
        category: product.category || "",
        is_archived: product.is_archived || false,
        file: null,
    });

    const submitProducts = (e) => {
        e.preventDefault();
        postProduct(route("update-product", product.id), {
            forceFormData: true,
            onSuccess: () => {
                resetForm();
                setVisible(false);
            },
        });
    };

    const brownButton =
        "bg-[#4b2e17] text-white font-semibold px-6 py-2 rounded-xl hover:bg-[#3a2312] transition-colors";
    const secondaryButton =
        "bg-gray-200 text-gray-800 font-semibold px-4 py-2 rounded-xl hover:bg-gray-300 transition-colors";

    return (
        <div>
            <button
    className=" text-[#4b2e17] font-semibold px-6 py-2 rounded-xl hover:bg-[#4b2e17] hover:text-white transition-colors text-center"
    style={{ width: "15rem" }}
    onClick={() => setVisible(true)}
>
    Edit Product
</button>




            {visible && (
                <div className="mt-4 bg-white p-6 rounded-2xl shadow-md border border-[#e2cdbf] w-full max-w-3xl mx-auto space-y-4">
                    {/* Close button top-right */}
                    <div className="flex justify-end">
                        <button
                            className={secondaryButton + " text-xl font-bold"}
                            onClick={() => setVisible(false)}
                        >
                            ×
                        </button>
                    </div>

                    <form onSubmit={submitProducts} encType="multipart/form-data" className="space-y-4">
                        <div>
                            <label className="block mb-1 font-medium">Product Name:</label>
                            <input
                                type="text"
                                name="name"
                                value={productData.name}
                                onChange={(e) => setProduct("name", e.target.value)}
                                className="border border-gray-300 rounded-lg px-3 py-2 w-full"
                                required
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium">Quantity:</label>
                            <input
                                type="number"
                                name="quantity"
                                value={productData.quantity}
                                onChange={(e) => setProduct("quantity", Number(e.target.value))}
                                className="border border-gray-300 rounded-lg px-3 py-2 w-full"
                                required
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium">Price:</label>
                            <input
                                type="number"
                                name="price"
                                value={productData.price}
                                onChange={(e) => setProduct("price", Number(e.target.value))}
                                className="border border-gray-300 rounded-lg px-3 py-2 w-full"
                                required
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium">Category:</label>
                            <input
                                type="text"
                                name="category"
                                value={productData.category}
                                onChange={(e) => setProduct("category", e.target.value)}
                                className="border border-gray-300 rounded-lg px-3 py-2 w-full"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium">Is Archived?</label>
                            <select
                                name="is_archived"
                                value={productData.is_archived}
                                onChange={(e) => setProduct("is_archived", e.target.value === "true")}
                                className="border border-gray-300 rounded-lg px-3 py-2 w-full"
                            >
                                <option value="false">Not Archived</option>
                                <option value="true">Archived</option>
                            </select>
                        </div>

                        <div>
                            <label className="block mb-1 font-medium">Picture:</label>
                            <input
                                type="file"
                                name="file"
                                accept="image/*"
                                onChange={(e) => setProduct("file", e.target.files[0])}
                                className="w-full"
                            />
                        </div>

                        {/* Submit and Clear buttons centered with extra top margin */}
<div className="flex justify-center space-x-4 mt-6">
    <button
        type="submit"
        className={brownButton}
        disabled={processingEditProduct}
    >
        Save
    </button>
    <button
        type="button"
        className={secondaryButton}
        onClick={resetForm}
    >
        Clear
    </button>

                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}
