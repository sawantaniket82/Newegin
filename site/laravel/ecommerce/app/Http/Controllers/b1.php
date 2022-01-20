<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class b1 extends Controller
{
    //

    function b11()
    {
        $user = ["aniket", "sarvesh", "nikhil", "amey"];
        return view("b1", ["users" => "aniket"]);
    }
}
