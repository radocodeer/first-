// RADO and Maros Java Script madafaka
//
function rado() {
  console.log(5);
}

let vstup = document.get;

//aby sme nemusli vzdy zadavat novo ciselka tak stalcis random button, kt. by si mohol vytvorit a niekde ho pekne vlozit :D
function randomarr() {
  let zero = [];
  // zero[0] = document.querySelector("#val_0_");
  // zero[1] = document.querySelector("#val_1_");
  // zero[2] = document.querySelector("#val_2_");
  // zero[3] = document.querySelector("#val_3_");
  // zero[4] = document.querySelector("#val_4_");
  // zero[5] = document.querySelector("#val_5_");
  // zero[6] = document.querySelector("#val_6_");
  // zero[7] = document.querySelector("#val_7_");
  // zero[8] = document.querySelector("#val_8_");
  // zero[9] = document.querySelector("#val_9_");
  let newarr = [];
  while (newarr.length < 10) {
    let r = Math.floor(Math.random() * 1000) + 1;
    if (newarr.indexOf(r) === -1) newarr.push(r);
  }
  //input = newarr;
  //console.log(newarr);
  //console.log(input);
  // for (let i = 0; i < 10; i++){
  //   document.getElementById("val_" + i + "_").value = input[i];
  // }

  for (let i = 0; i < 10; i++) {
    document.querySelector("#val_"+i+"_").value = newarr[i];
  }


  // document.querySelector("#val_0_").value = newarr[0];
  // document.querySelector("#val_1_").value = newarr[1];
  // document.querySelector("#val_2_").value = newarr[2];
  // document.querySelector("#val_3_").value = newarr[3];
  // document.querySelector("#val_4_").value = newarr[4];
  // document.querySelector("#val_5_").value = newarr[5];
  // document.querySelector("#val_6_").value = newarr[6];
  // document.querySelector("#val_7_").value = newarr[7];
  // document.querySelector("#val_8_").value = newarr[8];
  // document.querySelector("#val_9_").value = newarr[9];
  console.log(zero);
  return newarr;
}

let k = "The respective values are :";
let input = document.querySelectorAll(".input--num");

//
//let input = [10,50,40,50,80,90,70];
function Geeks() {
  for (let i = 0; i < input.length; i++) {
    let a = input[i].value;
    k += "array[" + i + "].value = " + a + " ";
  }
  return k;
  //document.getElementsByClassName("result").innerHTML = k;
  //document.getElementById("po").innerHTML = "Output";
}

function min() {
  console.log(input);
  let min = parseFloat(input[0].value);
  for (let i = 0; i < input.length; i++) {
    if (input[i].value < min) {
      min = parseFloat(input[i].value);
    }
  }
  // fuj document.querySelector(".min").textContent = min;
  return min;
}

function max() {
  let max = parseFloat(input[0].value);
  for (let i = 0; i < input.length; i++) {
    if (input[i].value > max) {
      max = parseFloat(input[i].value);
    }
  }
  // fuj document.querySelector(".max").textContent = max;
  return max;
}

function sum() {
  let summary = 0;
  for (let i = 0; i < input.length; i++) {
    summary += parseFloat(input[i].value);
  }
  // fuj document.querySelector(".sum").textContent = summary;
  return summary;
}

function avg() {
  let avg_val = 0;
  avg_val = sum() / input.length;
  avg_val = Math.round(avg_val);

  // fuj document.querySelector(".avg").textContent = avg_val;
  return avg_val;
}

//!!! Vlozil som to do kazdej funkcie aby to zapisovalo, pozri pri kazdej fukncii na alternativne riesenie :)

function calc() {
  Geeks();
  min();
  max();
  avg();
  sum(); //rado();

  // document.querySelector(".result").innerHTML = Geeks();
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
