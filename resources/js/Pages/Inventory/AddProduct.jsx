import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";
import { useState } from "react";

export default function AddProduct() {
  const [form, setForm] = useState({
    name: "",
    category: "",
    quantity: 0,
    price: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.post("/inventory/store", form);
  };

  return (
    <AuthenticatedLayout>
      <Head title="Add Product" />

      <div className="flex justify-center items-center h-screen bg-[#fffaf6] overflow-hidden">
        <div
          className="bg-[#fff5ee] border border-gray-300 rounded-2xl shadow-lg p-6 w-[60rem] max-w-[95vw]"
          style={{
            transform: "scale(0.95)",
            marginTop:"-10rem"
          }}
        >
          <h1 className="text-3xl font-bold mb-4 text-[#4b2e17] text-center">
            Add Product
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Product Name */}
            <div>
              <label className="block font-semibold text-base text-[#4b2e17] mb-1">
                Product Name
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="flex-1 border border-gray-400 rounded-md px-3 py-2 text-base outline-none focus:ring-2 focus:ring-[#c5a888]"
                  required
                />
                <button
                  type="button"
                  className="bg-gray-200 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-300"
                >
                  📷 Change Image
                </button>
              </div>
            </div>

            {/* Category */}
            <div>
              <label className="block font-semibold text-base text-[#4b2e17] mb-1">
                Category
              </label>
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="w-full border border-gray-400 rounded-md px-3 py-2 text-base focus:ring-2 focus:ring-[#c5a888]"
                required
              >
                <option value="">Select Category</option>
                <option value="Snacks">Snacks</option>
                <option value="Drinks">Drinks</option>
                <option value="Chocolate">Chocolate</option>
              </select>
            </div>

            {/* Quantity */}
            <div>
              <label className="block font-semibold text-base text-[#4b2e17] mb-1">
                Quantity Available
              </label>
              <div className="flex items-center space-x-3">
                <button
                  type="button"
                  onClick={() =>
                    setForm({
                      ...form,
                      quantity: Math.max(0, form.quantity - 1),
                    })
                  }
                  className="bg-gray-200 px-3 py-1 rounded text-lg hover:bg-gray-300"
                >
                  −
                </button>
                <input
                  type="number"
                  name="quantity"
                  value={form.quantity}
                  onChange={handleChange}
                  className="w-20 text-center border border-gray-400 rounded-md px-2 py-1 text-base"
                  required
                />
                <button
                  type="button"
                  onClick={() =>
                    setForm({ ...form, quantity: form.quantity + 1 })
                  }
                  className="bg-gray-200 px-3 py-1 rounded text-lg hover:bg-gray-300"
                >
                  +
                </button>
              </div>
            </div>

            {/* Price */}
            <div>
              <label className="block font-semibold text-base text-[#4b2e17] mb-1">
                Price
              </label>
              <input
                type="number"
                name="price"
                value={form.price}
                onChange={handleChange}
                placeholder="₱ 00.00"
                className="w-full border border-gray-400 rounded-md px-3 py-2 text-base focus:ring-2 focus:ring-[#c5a888]"
                required
              />
            </div>

            {/* Buttons */}
<div className="flex justify-end mt-4">
  <div className="flex items-center space-x-4">
    <button
      type="button"
      onClick={() => router.visit("/inventory1")}
      className="text-[#4b2e17] text-base font-semibold hover:underline"
    >
      Cancel
    </button>
    <button
      type="submit"
      className="bg-[#4b2e17] text-white px-6 py-2 rounded-md text-base font-semibold hover:bg-[#6b3e1f] transition"
    >
      Add Product
    </button>
  </div>
</div>

          </form>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
