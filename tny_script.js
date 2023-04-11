"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: Stacey Chaiken
   Date:   3/31/2023

*/

//Call the function to run and display the countdown clock
runClock();

//Use the setInterval() method to keep runClock going ()
setInterval()


// Function to create and run the countdown clock
function runClock() {


// Store the current data and time 
let currentDay = new Date();
let dateStr = currentDay.toLocaleDateString();
let timeStr = currentDay.toLocaleTimeString();

// Display the current date and time
document.getElementById("dateNow").innerHTML = dataStr + "<br/>" + timeStr;


// Calculate the days until January 1st

let newYear = new Date("January 1, 2018"); 
let nextYear = currentDay.getFullYear() + 1;
let daysLeft = (newYear - currentDay) / (1000*60*60*24);


// Calculate the hours left in the current day
let hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24;

// Calculate the minutes and seconds in the current hour
let minsLeft = (hrsLeft - Math.floor(hrsLeft)) * 60;
let secsLeft = (minsLeft - Math.floor(minsLeft)) * 60;



//Display the time left until New Year's Eve
document.getElementById("days").textContent = Math.floor(daysLeft);
document.getElementById("hrs").textContent = Math.floor(hrsLeft);
document.getElementById("mins").textContent = Math.floor(minsLeft);
document.getElementById("secs").textContent = Math.floor(secsLeft);
}
