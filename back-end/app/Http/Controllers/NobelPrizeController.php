<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\NobelPrize;

class NobelPrizeController extends Controller
{
    public function index()
    {
        $NobelPrize = NobelPrize::all();
        return response()->json($NobelPrize);
    }
}
