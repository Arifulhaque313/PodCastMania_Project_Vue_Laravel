<?php

use App\Models\Frontend\Contact;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Frontend\ContactController;

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

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/',function(){
    return Inertia::render('Frontend/index');
}); 

Route::get('/about',function(){
    return Inertia::render('Frontend/about');
}); 

Route::get('/podcast',function(){
    return Inertia::render('Frontend/podcast');
}); 

Route::get('/service',function(){
    return Inertia::render('Frontend/service');
}); 

Route::get('/blog',function(){
    return Inertia::render('Frontend/blog');
});

Route::get('/blog_details',function(){
    return Inertia::render('Frontend/blogDetails');
})->name('blog.details'); 


// contact route //
Route::get('/contact',[ContactController::class,'index'])->name('contact.index');
Route::post('/contact/store',[ContactController::class,'store'])->name('contact.store');








Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
});


//