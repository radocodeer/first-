// RADO and Maros Java Script madafaka
//
function rado() {
  console.log(5);
  
}

let k = "The respective values are :";
let input = document.querySelectorAll(".input--num");
//let input = [10,50,40,50,80,90,70];
  function Geeks() {          
        for (let i = 0; i < input.length; i++) {
          let a = input[i].value;
          k += "array[" + i + "].value = "+ a + " ";
        }
        return k;
  //document.getElementsByClassName("result").innerHTML = k;
  //document.getElementById("po").innerHTML = "Output";
      }

function min(){
let min = parseFloat(input[0].value);
for (let i = 0; i < input.length; i++){
  if (input[i].value < min) {
    min = parseFloat(input[i].value);
  }
}
console.log(min)
return min;
}

function max(){
  let max = parseFloat(input[0].value);
  for (let i = 0; i < input.length; i++){
    if (input[i].value > max) {
      max = parseFloat(input[i].value);
    }
  }
  return max;
}

function sum(){
  let summary = 0;
  for (let i = 0; i < input.length; i++){
    summary += parseFloat(input[i].value);
  }
  return summary;
}

  function avg(){
    let avg_val = 0;    
    avg_val = sum() / input.length;
    avg_val = Math.round(avg_val);
    return avg_val;
  }  



  function calc(){

    // Geeks(); min(); max(); avg(); sum(); rado();

    document.querySelector(".min").innerHTML = Geeks();
    document.querySelector(".min").innerHTML = min();
    document.querySelector(".max").innerHTML = max();
    document.querySelector(".avg").innerHTML = avg();
    document.querySelector(".sum").innerHTML = sum();
    
    
    
    console.log(min());
    console.log(max());
    console.log(input.length);
    console.log(sum());
    console.log(avg());
    console.log(Geeks());

  }




          
