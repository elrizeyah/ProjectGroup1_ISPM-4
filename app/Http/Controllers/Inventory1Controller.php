<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Product;

class Inventory1Controller extends Controller
{
    public function index()
    {
        $products = Product::where('category', 'inventory1')->get();

        return Inertia::render('Reports/Inventory1', [
            'products' => $products,
        ]);
    }
}
