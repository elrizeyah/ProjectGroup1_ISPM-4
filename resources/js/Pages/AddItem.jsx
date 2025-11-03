import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";

export default function AddItem({ auth, products }) {
    const [cart, setCart] = useState([]);

    // ✅ Update quantity in products and cart when user types in the input
    const handleQuantityChange = (index, value) => {
        const newProducts = [...products];
        const quantity = parseInt(value) || 0;
        newProducts[index].quantity = quantity;

        // Update cart if product is already added
        const cartIndex = cart.findIndex((item) => item.name === newProducts[index].name);
        if (cartIndex !== -1) {
            const newCart = [...cart];
            newCart[cartIndex].quantity = quantity;
            setCart(newCart);
        }
    };

    const handleAddToCart = (product) => {
        if (product.stock === 0) {
            alert(`${product.name} is out of stock!`);
            return;
        }

        const existing = cart.find((item) => item.name === product.name);
        if (existing) {
            existing.quantity += 1;
            setCart([...cart]);
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    // ✅ Confirm button: send cart to MakeTransaction page
    const handleConfirm = () => {
        if (cart.length === 0) {
            alert("Please add at least one item to proceed.");
            return;
        }

        router.visit("/make-transaction", { data: { initialItems: cart } });
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Add Item" />

            <div className="py-12 px-6 flex flex-col items-center">
                {/* 🟤 Title */}
                <h1 className="text-3xl font-bold text-black mb-6 text-center">
                    Record Transaction Form
                </h1>

                <div className="flex gap-4">
                    {/* Left: Product List */}
                    <div className="w-[40rem] bg-[#f9f9f9] border border-black p-6 shadow-[5px_5px_0px_rgba(0,0,0,0.3)]">
                        <div className="flex justify-between mb-3">
                            <input
                                type="text"
                                placeholder="Search for Product..."
                                className="border border-gray-400 px-3 py-1 w-1/2"
                            />
                            <p className="text-sm font-semibold text-black">
                                Transaction #: 00000000
                            </p>
                        </div>

                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="text-black border-b border-gray-400">
                                    <th className="py-2 text-left w-1/4">Item</th>
                                    <th className="py-2 text-left w-1/4">Price</th>
                                    <th className="py-2 text-center w-1/4">Stock</th>
                                    <th className="py-2 text-center w-1/4">Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product, i) => (
                                    <tr key={i} className="border-b border-gray-300">
                                        <td className="py-2 flex items-center gap-2">
                                            <button
                                                onClick={() => handleAddToCart(product)}
                                                disabled={product.stock === 0}
                                                className={`text-[#4b2e17] text-lg font-bold rounded-full w-7 h-7 flex items-center justify-center border border-[#4b2e17] shadow-md transition ${
                                                    product.stock === 0
                                                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                                        : "bg-[#e6d6c3] hover:bg-[#d4c0aa]"
                                                }`}
                                            >
                                                +
                                            </button>
                                            <span>{product.name}</span>
                                        </td>

                                        <td className="py-2">₱{product.price}</td>

                                        <td className="py-2 text-center">
                                            {product.stock > 0 ? (
                                                <span className="text-green-700 font-semibold">
                                                    {product.stock}
                                                </span>
                                            ) : (
                                                <span className="text-red-500 text-sm">
                                                    Out of Stock
                                                </span>
                                            )}
                                        </td>

                                        <td className="py-2 text-center">
                                            <input
                                                type="number"
                                                min="0"
                                                className="w-16 border border-gray-400 px-2 py-1 text-center"
                                                onChange={(e) =>
                                                    handleQuantityChange(i, e.target.value)
                                                }
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* 🛒 Right: Cart */}
                    <div className="w-64 bg-[#f4e8da] border border-black p-4 shadow-[5px_5px_0px_rgba(0,0,0,0.3)] flex flex-col justify-between">
                        <div>
                            <h2 className="text-lg font-bold mb-3 flex items-center gap-2">
                                🛒 Cart
                            </h2>

                            {cart.length === 0 ? (
                                <p className="text-gray-600 text-sm">No items added yet.</p>
                            ) : (
                                <div className="flex flex-col gap-3">
                                    {cart.map((item, index) => (
                                        <div
                                            key={index}
                                            className="bg-white border border-gray-300 rounded-md p-3 shadow-sm flex justify-between items-start"
                                        >
                                            <div className="text-sm">
                                                <p className="font-bold text-black">{item.name}</p>
                                                <p>Quantity: {item.quantity}</p>
                                                <p>Total: ₱{item.price * item.quantity}</p>
                                            </div>

                                            <button
                                                onClick={() =>
                                                    setCart(cart.filter((_, i) => i !== index))
                                                }
                                                className="text-red-500 hover:text-red-700 transition"
                                                title="Remove item"
                                            >
                                                X
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        <button
    onClick={handleConfirm}
    disabled={cart.length === 0}
    className={`bg-[#4b2e17] text-white py-2 rounded-md mt-4 transition ${
        cart.length === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-[#3b2412]"
    }`}
    href="/make-transaction" // ✅ Added href
>
    Confirm
</button>

                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
