<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class userController extends Controller
{

    function load($name)
    {
        $this->username = $name;

        return view("user") . $this->username;

        //echo "user is" . $name;


    }
}
