<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SalesReportController extends Controller
{
    public function index()
    {
        return Inertia::render('SalesReports/GenerateSalesReport');
    }

    public function daily()
    {
        $transactions = Transaction::whereDate('created_at', today())->get();
        return Inertia::render('SalesReports/GenerateSalesReportDaily', [
            'transactions' => $transactions,
        ]);
    }

    public function weekly()
    {
        $startOfWeek = now()->startOfWeek();
        $endOfWeek = now()->endOfWeek();
        $transactions = Transaction::whereBetween('created_at', [$startOfWeek, $endOfWeek])->get();
        return Inertia::render('SalesReports/GenerateSalesReportWeekly', [
            'transactions' => $transactions,
        ]);
    }

    public function monthly()
    {
        $transactions = Transaction::whereMonth('created_at', now()->month)->get();
        return Inertia::render('SalesReports/GenerateSalesReportMonthly', [
            'transactions' => $transactions,
        ]);
    }

    public function custom(Request $request)
    {
        $from = $request->input('from');
        $to = $request->input('to');
        $transactions = Transaction::whereBetween('created_at', [$from, $to])->get();
        return Inertia::render('SalesReports/GenerateSalesReportCustom', [
            'transactions' => $transactions,
        ]);
    }
}
