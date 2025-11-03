<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class AddItemController extends Controller
{
    public function index()
    {
        // Later you can pass product data here
        return Inertia::render('AddItem', [
            'products' => [
                ['name' => 'Buldak 3x Spicy', 'price' => 700, 'stock' => 10],
                ['name' => 'Buldak Carbonara', 'price' => 1000, 'stock' => 5],
                ['name' => 'KitKat M. Choc.', 'price' => 1000, 'stock' => 0],
                ['name' => 'Banana Milk', 'price' => 50, 'stock' => 20],
                ['name' => 'Peach Drink', 'price' => 50, 'stock' => 15],
                ['name' => 'Ramyun', 'price' => 100, 'stock' => 25],
                ['name' => 'Oreo Big P.', 'price' => 50, 'stock' => 30],
                ['name' => 'Ferrero Rocher', 'price' => 50, 'stock' => 40],
                ['name' => 'Snickers Bar S.', 'price' => 100, 'stock' => 10],
            ],
        ]);
    }
}
