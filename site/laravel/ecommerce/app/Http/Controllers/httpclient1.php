<?php

namespace App\Http\Controllers;

use GuzzleHttp\Psr7\HttpFactory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class httpclient1 extends Controller
{
    //
    function getData()
    {
        // return "API";
        return Http::get("https://api.publicapis.org/entries");
    }
}
