<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Product;

class TransactionHistoryController extends Controller
{
    public function index()
    {
        $products = Product::where('category', 'transaction-history')->get();

        return Inertia::render('QA/TransactionHistory', [
            'products' => $products,
        ]);
    }
}
