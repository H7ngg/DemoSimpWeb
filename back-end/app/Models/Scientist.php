<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Scientist extends Model
{
    protected $fillable = [
        'name',
        'birth_place',
        'nationality',
        'date_of_birth',
        'date_of_death',
        'image',
        'biography',
        'quote',
    ];
    use HasFactory;
}
