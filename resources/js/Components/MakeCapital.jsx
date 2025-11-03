import React, { useState } from "react";
import { useForm } from "@inertiajs/react";

export default function MakeCapital() {
    const [visible, setVisible] = useState(false);
    const {
        data: capitalData,
        setData: setCapital,
        post: postCapital,
        processing: processingCapital,
        reset: resetForm,
    } = useForm({
        amount: "",
        type: ""
    });

    const submitCapital = (e) => {
        e.preventDefault();
        postCapital(route("add-capital"), {
            onSuccess: () => resetForm(),
        });
    };

    const brownButton =
        "bg-[#4b2e17] text-white font-semibold px-6 py-2 rounded-xl hover:bg-[#3a2312] transition-colors";

    const secondaryButton =
        "bg-gray-200 text-gray-800 font-semibold px-4 py-2 rounded-xl hover:bg-gray-300 transition-colors";

    return (
        <div className="space-y-4">
    {/* Add Capital button aligned to the left */}
    <div className="flex justify-start">
        <button
            className={brownButton}
            onClick={() => setVisible(true)}
        >
            Add Capital
        </button>
    </div>

    {visible && (
        <div className="space-y-4 bg-white p-6 rounded-2xl shadow-md border border-[#e2cdbf]">
            {/* Close button aligned to right */}
            <div className="flex justify-end">
                <button
                    className={secondaryButton}
                    onClick={() => setVisible(false)}
                >
                    Close
                </button>
            </div>

            <form onSubmit={submitCapital} className="space-y-4">
                <div>
                    <label className="block mb-1 font-medium">Amount:</label>
                    <input
                        type="number"
                        name="amount"
                        value={capitalData.amount || ''}
                        onChange={(e) => setCapital("amount", Number(e.target.value))}
                        className="border border-gray-300 rounded-lg px-3 py-2 w-full"
                        required
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">Type:</label>
                    <select
                        name="type"
                        value={capitalData.type}
                        onChange={(e) => setCapital("type", e.target.value)}
                        className="border border-gray-300 rounded-lg px-3 py-2 w-full"
                        required
                    >
                        <option value="" disabled>Select Type</option>
                        <option value="withdraw">Withdraw</option>
                        <option value="add">Add</option>
                        <option value="initial">Initial</option>
                    </select>
                </div>

                {/* Submit and Clear centered */}
                <div className="flex justify-center space-x-4">
                    <button
                        type="submit"
                        className={brownButton}
                        disabled={processingCapital}
                    >
                        Submit
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
