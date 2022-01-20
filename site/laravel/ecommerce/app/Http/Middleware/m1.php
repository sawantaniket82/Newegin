<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class m1
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        //echo "<h1>msg from global middleware</h1>";

        if ($request->age && $request->age < 18) {
            return redirect('noaccesspage');
        }
        return $next($request);
    }
}
