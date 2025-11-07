<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Product;

class AddProductController extends Controller
{
    public function index()
    {
        $products = Product::where('category', 'add-product')->get();

        return Inertia::render('QA/AddProduct', [
            'products' => $products,
        ]);
    }

    public function editProduct($id)
    {
        $product = Product::findOrFail($id);
        return Inertia::render('QA/EditProduct', [
            'product' => $product,
        ]);
    }
}
