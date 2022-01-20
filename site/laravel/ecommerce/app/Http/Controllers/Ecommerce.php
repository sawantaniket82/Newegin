<?php

namespace App\Http\Controllers;

//use Illuminate\Http\Request;

class Ecommerce extends Controller
{
    public function index($name)
    {
        echo $name;
        return ["name" => "aniket", "age" => 24];
    }
}
