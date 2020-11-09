const massTom = 3628.74;
const heightTom = 22.86;
const massJerry = 45;
const heightJerry = 10;

const BMITom = massTom / heightTom **2 ;
const BMIJerry = massJerry / (heightJerry* heightJerry);

if(BMITom > BMIJerry){
    console.log("Tom's BMI is higher than Jerrys")
}

else{
    console.log("Jerrys BMI is higher than Toms")
}