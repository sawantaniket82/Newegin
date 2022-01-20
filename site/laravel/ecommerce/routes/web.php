<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Ecommerce;
use App\Http\Controllers\userController;
use App\Http\Controllers\b1;
use App\Http\Controllers\formmsg;
use App\Http\Controllers\userData;
use App\Http\Controllers\controller1;
use App\Http\Controllers\httpclient1;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {

    return view('welcome');
});


Route::get('/about', function () {
    return view('about');
});

//----------------------------------------------------------------------
//1st way of routing

// Route::get('/contact', function () {
//     return view('contact');
// });

//2nd way of routing



// Route::view('/contact', 'contact');



//------------------------------------------------------------------------------------

//redirect method {when you don't want user to go to home page use redirect metod}

// Route::get('/', function () {
//     return  redirect('about');
// });

//--------------------------------------------------------------------------------
//controller

// Route::get('ecommerce', 'Ecommerce@index');
//Route::get("ecommerce/{name}", [Ecommerce::class, 'index']);


//---------------------------------------------------------------------------------

// Route::get('/users/{name}', function ($name) {
//     return view('user', ['name' => $name]);
// });


//--------------------------------------------------------------------------------------

// Route::get('usercontrol/{name}', function ($name) {
//     $controls = new userController("Aniket");
//     return $controls;
// });


Route::get("usercontrols/{name}", [userController::class, 'load']);

//--------------------------------------------------------------------------

// Route::view('comp', 'comp1');

//Route::view('contactpage', 'contact');

//------------------------------------------------------------------------------

Route::get('b1', function () {
    return view("b1");
});

Route::get('b1', [b1::class, 'b11']);


Route::get('/home', function () {
    return view('home');
});


// Route::get('/home', [b1::class, 'b11']);



Route::post('formmsg', [formmsg::class, 'getData']);


//-------global middleware-------------------------------------
// Route::view('loginpage', 'login');
// Route::view('homepage', 'home');
// Route::view('noaccesspage', 'noaccess');

//---group middleware---------------------------------------------

// Route::view('homepage', 'home');
// Route::view('noaccesspage', 'noaccess');

// Route::middleware(['middleware' => 'protectedPage'])->group(function () {
//     Route::view('loginpage', 'login');
//     Route::view('contactpage', 'contact');
// });

//-----------route middleware--------------------
Route::view('loginpage', 'login')->middleware("protectedPage2");
Route::view('contactpage', 'contact')->middleware("protectedPage2");

Route::view('noaccesspage', 'noaccess');


//----------------------------------------------------------------


route::get("user", [userData::class, 'index']);

//------------------------------------------------------------------

route::get("emp", [controller1::class, 'getdata']);


//------------------------------------------------------------------------

route::get("http", [httpclient1::class, 'getData']);
