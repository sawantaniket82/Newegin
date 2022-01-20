<?php

namespace App\Http\Controllers;

use App\Models\Emp;

use Illuminate\Http\Request;

class controller1 extends Controller
{
    //
    function getData()
    {
        return Emp::all();
    }
}
