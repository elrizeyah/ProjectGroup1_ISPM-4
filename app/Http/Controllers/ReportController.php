<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Transaction;
use App\Models\Capital;

class ReportController extends Controller
{
    // Generate Sales Report
    public function generateSalesReport(Request $request)
    {
        $request->validate([
            'reportType' => 'required|string',
            'startDate'  => 'nullable|date',
            'endDate'    => 'nullable|date',
        ]);

        $query = Transaction::query();

        switch ($request->reportType) {
            case 'Daily':
                $query->whereDate('created_at', now()->toDateString());
                break;
            case 'Weekly':
                $query->whereBetween('created_at', [now()->startOfWeek(), now()->endOfWeek()]);
                break;
            case 'Monthly':
                $query->whereMonth('created_at', now()->month);
                break;
            case 'Custom':
                if ($request->startDate && $request->endDate) {
                    $query->whereBetween('created_at', [$request->startDate, $request->endDate]);
                }
                break;
        }

        $sales = $query->get();

        return response()->json([
            'success' => true,
            'reportType' => $request->reportType,
            'data' => $sales,
        ]);
    }

    // Generate Capital Report
    public function generateCapitalReport(Request $request)
    {
        $request->validate([
            'reportType' => 'required|string',
            'startDate'  => 'nullable|date',
            'endDate'    => 'nullable|date',
        ]);

        $query = Capital::query();

        switch ($request->reportType) {
            case 'Daily':
                $query->whereDate('created_at', now()->toDateString());
                break;
            case 'Weekly':
                $query->whereBetween('created_at', [now()->startOfWeek(), now()->endOfWeek()]);
                break;
            case 'Monthly':
                $query->whereMonth('created_at', now()->month);
                break;
            case 'Custom':
                if ($request->startDate && $request->endDate) {
                    $query->whereBetween('created_at', [$request->startDate, $request->endDate]);
                }
                break;
        }

        $capital = $query->get();

        return response()->json([
            'success' => true,
            'reportType' => $request->reportType,
            'data' => $capital,
        ]);
    }
}
