/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let cost_per_day = 35;
let total_cost = 0;
let selected_days = 0;

const monday = document.getElementById('monday');
const tuesday = document.getElementById('tuesday');
const wednesday = document.getElementById('wednesday');
const thursday = document.getElementById('thursday');
const friday = document.getElementById('friday');

const full = document.getElementById('full');
const half = document.getElementById('half');

const clear_button = document.getElementById('clear-button');
const calculated_cost = document.getElementById('calculated-cost');




/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function calculate(){
    total_cost = cost_per_day * selected_days;
    calculated_cost.innerText = total_cost;
}

function change_color(button){
    if (button.classList.contains('clicked'))
    {
        button.classList.remove('clicked');
        selected_days -= 1;
    }
    else 
    {
        button.classList.add('clicked');
        selected_days += 1;
    }
    calculate();
}

monday.addEventListener('click', function(){
    change_color(this);
});
tuesday.addEventListener('click', function(){
    change_color(this);
});
wednesday.addEventListener('click', function(){
    change_color(this);
});
thursday.addEventListener('click', function(){
    change_color(this);
});
friday.addEventListener('click', function(){
    change_color(this);
});




/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function clear_days(){
    monday.classList.remove('clicked');
    tuesday.classList.remove('clicked');
    wednesday.classList.remove('clicked');
    thursday.classList.remove('clicked');
    friday.classList.remove('clicked');


full.classList.add('clicked');
half.classList.remove('clicked');

cost_per_day = 35;
total_cost = 0;
selected_days = 0;

calculate();
}
clear_button.addEventListener('click', function(){
    clear_days();
});


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
half.addEventListener('click', function(){
    half.classList.add('clicked');
    full.classList.remove('clicked');
    cost_per_day = 20;
    calculate();

});



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

full.addEventListener('click', function(){
    full.classList.add('clicked');
    half.classList.remove('clicked');
    cost_per_day = 35;
    calculate();
});



