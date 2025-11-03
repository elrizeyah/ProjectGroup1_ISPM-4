<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class TransactionController extends Controller
{
    /**
     * Display a list of transactions.
     */
    public function index()
    {
        // ✅ Example static transaction data
        // Replace this with actual data from your database (e.g., Transaction::all())
        $transactions = [
            ['id' => 1, 'date' => '8/17/2025 - 7:00 AM', 'method' => 'Cash', 'amount' => 2050],
            ['id' => 2, 'date' => '9/28/2025 - 4:37 PM', 'method' => 'Card', 'amount' => 5000],
            ['id' => 3, 'date' => '10/12/2025 - 2:15 PM', 'method' => 'GCash', 'amount' => 1200],
        ];

        // ✅ Return the TransactionRecord page (adjust if your file is under a subfolder)
        return Inertia::render('Transactions/TransactionRecord', [
            'transactions' => $transactions,
        ]);
    }

    /**
     * Display a specific transaction (Full Transaction Information page).
     */
    public function show($id)
    {
        // ✅ Normally, you’d fetch from DB using Transaction::find($id)
        // For now, we’ll use a static example:
        $transaction = [
            'id' => $id,
            'date' => '8/17/2025 - 7:00 AM',
            'method' => 'Cash',
            'amount' => 2050,
            'items' => [
                ['category' => '#000020', 'name' => 'Buldak C.', 'price' => 250, 'quantity' => 4],
                ['category' => '#000043', 'name' => 'Large Cadbury', 'price' => 500, 'quantity' => 1],
                ['category' => '#000007', 'name' => 'Pringles Orig.', 'price' => 200, 'quantity' => 2],
                ['category' => '#000020', 'name' => 'Binggrae B. Milk', 'price' => 70, 'quantity' => 3],
                ['category' => '#000003', 'name' => 'Lotte Pepero M.', 'price' => 30, 'quantity' => 2],
            ],
        ];

        // ✅ Render the TransactionDetails page under Reports/
        return Inertia::render('Reports/TransactionDetails', [
            'transaction' => $transaction,
        ]);
    }
}
