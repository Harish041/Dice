'use strict'
let text1=document.querySelector('.score--1');
let btn1=document.querySelector('.b1');
let btn2=document.querySelector('.b3');
let dice=document.querySelector('.dice');
let currentScore =0;
let activePlayer =0;
dice.classList.add('hidden');
let playing = function(){
dice.classList.remove('hidden');
const value=Math.trunc(Math.random() *6)+1;  
dice.src=`dice-${value}.png`;
console.log(dice);
 };
btn1.addEventListener('click',playing);
btn2.addEventListener('click',playing);