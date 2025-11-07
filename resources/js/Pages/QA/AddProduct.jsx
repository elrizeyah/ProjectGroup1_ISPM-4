import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";

export default function AddProduct({ auth }) {
    const { data, setData, post, processing, reset } = useForm({
        name: "",
        category: "",
        quantity: 0,
        price: "",
        image: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("products.store"), {
            onSuccess: () => reset(),
        });
    };

    const handleImageChange = (e) => {
        setData("image", e.target.files[0]);
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Add Product" />

            <div className="flex justify-center py-12 px-4">
                <form
                    onSubmit={handleSubmit}
                    className="bg-[#fefaf7] border border-gray-300 rounded-2xl shadow-md w-full max-w-2xl"
                >
                    {/* 🟤 Header */}
                    <div className="bg-[#f8ecdf] px-6 py-4 border-b border-gray-300 rounded-t-2xl">
                        <h1 className="text-xl font-bold text-black">Add Product</h1>
                    </div>

                    {/* 🟤 Form Fields */}
                    <div className="p-6 space-y-5">
                        {/* Product Name + Change Image */}
                        <div>
                            <label className="font-semibold text-sm text-gray-800">
                                Add Product Name
                            </label>
                            <div className="flex items-center gap-2 mt-1">
                                <input
                                    type="text"
                                    className="flex-1 border border-gray-400 rounded-sm px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#4b2e17]"
                                    value={data.name}
                                    onChange={(e) => setData("name", e.target.value)}
                                />
                                <label className="text-sm bg-gray-200 px-3 py-2 border border-gray-400 rounded cursor-pointer hover:bg-gray-300 transition">
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        className="hidden"
                                    />
                                    <span role="img" aria-label="camera">📷</span> Change Image
                                </label>
                            </div>
                        </div>

                        {/* Category */}
                        <div>
                            <label className="font-semibold text-sm text-gray-800">
                                Add Category
                            </label>
                            <select
                                className="mt-1 w-full border border-gray-400 rounded-sm px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#4b2e17]"
                                value={data.category}
                                onChange={(e) => setData("category", e.target.value)}
                            >
                                <option value="">Select category</option>
                                <option value="chocolate">Chocolate</option>
                                <option value="drinks">Drinks</option>
                                <option value="snacks">Snacks</option>
                            </select>
                        </div>

                        {/* Quantity */}
                        <div>
                            <label className="font-semibold text-sm text-gray-800">
                                Indicate Quantity Available
                            </label>
                            <div className="flex items-center gap-2 mt-1">
                                <button
                                    type="button"
                                    onClick={() =>
                                        setData("quantity", Math.max(0, data.quantity - 1))
                                    }
                                    className="border border-gray-400 px-3 py-1 rounded hover:bg-gray-200"
                                >
                                    -
                                </button>
                                <input
                                    type="number"
                                    value={data.quantity}
                                    onChange={(e) => setData("quantity", e.target.value)}
                                    className="w-full border border-gray-400 rounded-sm px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#4b2e17]"
                                />
                                <button
                                    type="button"
                                    onClick={() =>
                                        setData("quantity", parseInt(data.quantity || 0) + 1)
                                    }
                                    className="border border-gray-400 px-3 py-1 rounded hover:bg-gray-200"
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        {/* Price */}
                        <div>
                            <label className="font-semibold text-sm text-gray-800">
                                Indicate Price
                            </label>
                            <input
                                type="text"
                                placeholder="₱ 00.00"
                                className="mt-1 w-full border border-gray-400 rounded-sm px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#4b2e17]"
                                value={data.price}
                                onChange={(e) => setData("price", e.target.value)}
                            />
                        </div>
                    </div>

                    {/* 🟤 Buttons */}
                    <div className="flex justify-end items-center gap-4 px-6 py-4 border-t border-gray-300">
                        <button
                            type="button"
                            onClick={() => reset()}
                            className="text-sm font-semibold text-black hover:underline"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={processing}
                            className="bg-[#4b2e17] text-white px-5 py-2 rounded-sm font-semibold hover:bg-[#3a2211] transition"
                        >
                            Add Product
                        </button>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
