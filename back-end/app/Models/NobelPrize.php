<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NobelPrize extends Model
{
    protected $fillable = [
        'category_id',
        'scientist_id',
        'year',
        'description',
    ];
    use HasFactory;
}
