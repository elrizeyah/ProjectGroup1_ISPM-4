<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Product;

class GenerateReportController extends Controller
{
    public function index()
    {
        $products = Product::where('category', 'generate-report')->get();

        return Inertia::render('QA/GenerateReport', [
            'products' => $products,
        ]);
    }
}
