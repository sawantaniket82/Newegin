<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Controllers\Route;

class formmsg extends Controller
{
    //
    function getData(Request $req)
    {
        $req->validate([
            'username' => 'required |max : 10',
            'password' => 'required'
        ]);
        $username = $_POST['username'];
        $password = $_POST['password'];
        if ($username == "Aniket" && $password == "123") {
            return  redirect('https://www.callofduty.com/');
        } else {
            echo "invalid";
        }

        //-------------------------------------------------
        //return $req->input();
    }
}
