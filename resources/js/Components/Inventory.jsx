import React from "react";
import { router } from "@inertiajs/react";
import EditProduct from "./EditProduct";
import DeleteButton from "./DeleteButton";

export default function Inventory({ products = [] }) {
    const inc = (id, qty) =>
        router.put(route("update-iteminc", id), { quantity: qty });
    const dec = (id, qty) =>
        router.put(route("update-itemdec", id), { quantity: qty });

    const brownButton =
        "bg-[#4b2e17] text-white font-semibold px-4 py-2 rounded-lg hover:bg-[#3a2312] transition-colors";
    const redButton =
        "bg-red-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-red-700 transition-colors";

    return (
        <div className="space-y-6">

            {products.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {products.map((item) => (
                        <div
  key={item.id}
  className="bg-white p-4 rounded-2xl border border-[#e2cdbf] flex flex-col items-start space-y-2
             transform transition duration-300 hover:scale-105 hover:border-[#4b2e17] hover:shadow-lg hover:shadow-[#4b2e17]/30"
>
    {item.file_path && (
        <img
            src={`/${item.file_path}`}
            alt={item.name}
            className="w-full h-40 object-cover rounded-lg mb-2"
            onError={(e) => (e.target.style.display = "none")}
        />
    )}

    <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
    <p className="text-gray-700">Category: {item.category}</p>
    <p className="text-gray-700">Quantity: {item.quantity}</p>
    <p className="text-gray-700">Price: ₱{item.price}</p>

    {/* + / - buttons */}
    <div className="w-full flex justify-center items-center mt-2">
        <div className="flex space-x-4">
            <button
                className="w-12 h-12 rounded-full flex items-center justify-center border border-[#4b2e17] text-[#4b2e17] font-bold text-lg hover:bg-[#4b2e17] hover:text-white transition-colors"
                onClick={() => dec(item.id, item.quantity)}
            >
                -
            </button>
            <button
                className="w-12 h-12 rounded-full flex items-center justify-center border border-[#4b2e17] text-[#4b2e17] font-bold text-lg hover:bg-[#4b2e17] hover:text-white transition-colors"
                onClick={() => inc(item.id, item.quantity)}
            >
                +
            </button>
        </div>
    </div>

    {/* Edit/Delete stacked */}
    <div className="flex flex-col items-center space-y-2 mt-4 w-full">
        <EditProduct product={item} className={brownButton} />
        <DeleteButton id={item.id} className={redButton} />
    </div>
</div>

                        
                    ))}
                </div>
            ) : (
                <p className="text-gray-500">No products found in inventory.</p>
            )}
        </div>
    );
}
