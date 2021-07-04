const calculate = document.getElementById('sub');

calculate.addEventListener('click' , function(){
     
     let weigth = document.getElementById('weight').value;
     let height =   document.getElementById('height').value;
    
     let ans = (weigth)/((height)*(height));
     console.log(ans);

     var get = document.getElementById('result');
     
     if( ans <18.5){
         get.innerHTML = "<b>BMI =</b>" + ans + "<b>(underweight)</b>";
     }
     else if (ans > 18.5 && ans<25){
        get.innerHTML = "<b>BMI =</b>" + ans + "<b>(normal)</b>";
     }
     else if (ans >= 25 && ans<30){
        get.innerHTML = "<b>BMI =</b>" + ans + "<b>(overweight)</b>";
     }
     else{
        get.innerHTML = "<b>BMI =</b>" + ans + "<b>(obese)</b>";
     }
    
});
document.getElementById('form').addEventListener('submit' , function(event){
  event.preventDefault();
})