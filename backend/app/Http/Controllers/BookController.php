<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;

class BookController extends Controller
{
    public function index()
    {
        $books = Book::all();
        return response()->json($books);
    }

    public function store(Request $request)
    {
        $book = Product::create($request->all());
        return response()->json($book, 201);
    }

    public function show($id)
    {
        $book = Product::findOrFail($id);
        return response()->json($book);
    }

    public function update(Request $request, $id)
    {
        $book = Product::findOrFail($id);
        $book->update($request->all());
        return response()->json($book);
    }

    public function destroy($id)
    {
        $book = Product::findOrFail($id);
        $book->delete();
        return response()->json(null, 204);
    }
}
