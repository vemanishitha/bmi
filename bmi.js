mass =parseFloat( prompt("enter your mass in kg"))
height =parseFloat( prompt("enter your height  in cm"))
bmi=mass/(height/100)**2
if(bmi<18.5){
    alert("you are underweight")
}else if(bmi<25){
    alert("you are having nrml bmi")
}else if(bmi<30){
    alert("you are overweight")
}else {
    alert("you are obese")
}