<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Product;

class Inventory2Controller extends Controller
{
    public function index()
    {
        $products = Product::where('category', 'inventory2')->get();

        return Inertia::render('Reports/Inventory2', [
            'products' => $products,
        ]);
    }
}
