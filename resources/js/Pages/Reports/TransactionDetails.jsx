import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { router } from "@inertiajs/react";

export default function TransactionDetails({ transaction }) {
  return (
    <AuthenticatedLayout>
      <Head title="Full Transaction Information" />

      <div className="p-6">
  {/* Title and Back Button on One Line */}
  <div
    className="flex items-center justify-between mb-6"
    style={{ paddingLeft: "8rem", paddingRight: "8rem", marginTop:"-2rem"}}
  >
    <h1 className="text-3xl font-bold text-black">
      Full Transaction Information
    </h1>
    <button
      onClick={() => router.visit("/transaction-record")}
      className="bg-[#4b2e17] text-white px-5 py-2 rounded-md text-sm font-semibold hover:bg-[#6b3e1f] transition shadow-md"
    >
      ← Back
    </button>
  </div>



        <div className="border border-black bg-white shadow-[5px_5px_0_gray] max-w-5xl mx-auto p-5 space-y-3">
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
    <p>Transaction Number: {transaction.id.toString().padStart(3, "0")}</p>
    <p className="text-right">
      Date and Time: {transaction.date || "8/17/2025 - 7:00 AM"}
    </p>
  </div>

  <p>Payment Method: {transaction.method || "Cash"}</p>
  <p>Total Amount: ₱ {transaction.amount?.toLocaleString() || "2,050.00"}</p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse mb-3">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-700 px-3 py-2">Category</th>
                  <th className="border border-gray-700 px-3 py-2">Item Name</th>
                  <th className="border border-gray-700 px-3 py-2">Price</th>
                  <th className="border border-gray-700 px-3 py-2">Quantity</th>
                  <th className="border border-gray-700 px-3 py-2">Total Amount</th>
                </tr>
              </thead>
              <tbody>
                {transaction.items?.map((item, index) => (
                  <tr key={index}>
                    <td className="border border-gray-400 px-3 py-2 text-[#2e1a0e]">{item.category}</td>
                    <td className="border border-gray-400 px-3 py-2 text-[#2e1a0e]">{item.name}</td>
                    <td className="border border-gray-400 px-3 py-2 text-[#2e1a0e]">₱ {item.price}</td>
                    <td className="border border-gray-400 px-3 py-2 text-[#2e1a0e]">{item.quantity}</td>
                    <td className="border border-gray-400 px-3 py-2 text-[#2e1a0e]">
                      ₱ {(item.price * item.quantity).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-end items-center mt-4">
  <p className="font-semibold text-right">
    Total Amount of Transaction: ₱ {transaction.amount?.toLocaleString() || "2,050.00"}
  </p>
</div>

        </div>
      </div>
    </AuthenticatedLayout>
  );
}
