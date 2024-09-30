<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Scientist;

class ScientistColtroller extends Controller
{
    public function index()
    {
        $scientists = Scientist::all();
        return response()->json($scientists);
    }

    public function details($id)
    {
        $scientist = Scientist::find($id);
        return response()->json($scientist);
    }

    public function delete($id)
    {
        $scientist = Scientist::find($id);
        $scientist->delete();
    }

    public function create()
    {
        return view("scientists.create");
    }
    public function store(Request $request)
    {
        $scientist = $request->all();
        Scientist::create($scientist);
        return response()->json($scientist);
    }

    public function edit($id)
    {
        $scientist = Scientist::findOrFail($id);
        return view("scientists.edit", compact("scientist"));
    }

    public function update(Request $request, $id)
    {
        $scientist = Scientist::findOrFail($id);
        $data = $request->all();
        return response()->json($scientist);
    }

}
