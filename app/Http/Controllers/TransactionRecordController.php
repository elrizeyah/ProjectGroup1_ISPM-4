<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Transaction;

class TransactionRecordController extends Controller
{
    public function index()
    {
        $transactions = Transaction::latest()->take(50)->get();

        return Inertia::render('Reports/TransactionRecord', [
            'transactions' => $transactions,
        ]);
    }
}
