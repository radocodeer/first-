// Create an object:
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     id: 5566,
//     fullName : function() {
//       return this.firstName + " " + this.lastName;
//     }
//   };
  
  const numbers = [8,2,3,4,5];
  let min = 500;
  let max = 0;
  let avg;
  let len;
  let sum = 0;
  
  
  for (let i = 0; i < 5; i++) {
  if (numbers[i] < min) {
  min = numbers[i];
  }
  }
  
  for (let j = 0; j < 5; j++) {
  if (numbers[j] > max) {
  max = numbers[j];
  }
  }
  
  len = numbers.length;
  
  for (let k = 0; k < 5; k++) {
  if (numbers[k] != 0) {
  sum += numbers[k]}
  }
  
  avg = sum / len;
  
  // Display data from the object:
  //document.getElementById("demo").innerHTML = person.fullName();
  // document.getElementById("zero").innerHTML = numbers[0];
  // document.getElementById("one").innerHTML = numbers[1];
  // document.getElementById("two").innerHTML = numbers[2];
  // document.getElementById("three").innerHTML = numbers[3];
  // document.getElementById("four").innerHTML = numbers[4];

  document.getElementById("min").innerHTML = min;
  document.getElementById("max").innerHTML = max;
  document.getElementById("sum").innerHTML = sum;
  document.getElementById("avg").innerHTML = avg;
  document.getElementById("len").innerHTML = len;

  var arr = [];
  while(arr.length < 6){
      var r = Math.floor(Math.random() * 6) + 1;
      if(arr.indexOf(r) === -1) arr.push(r);
  }
  console.log(arr);
  
  document.getElementById("zero").innerHTML = arr[0];
  document.getElementById("one").innerHTML = arr[1];
  document.getElementById("two").innerHTML = arr[2];
  document.getElementById("three").innerHTML = arr[3];
  document.getElementById("four").innerHTML = arr[4];
  document.getElementById("five").innerHTML = arr[5];

  let h = Math.floor(Math.random() * 10) + 1;  
  let q = Math.floor(Math.random() * 10) + 1;
  let b = Math.floor(Math.random() * 10) + 1;
  let lastrandom = Math.floor(Math.random() * 6) + 1;

  let ourcolor;
  
  let ourcolor1;
  let ourcolor2;
  let ourcolor3;


  if (h == 1 || q == 1 || b == 1 ) {
    ourcolor1 = "rgb(0, 100, 255)"; 
    ourcolor2 = "rgb(100, 0, 255)";
    ourcolor3 = "rgb(255, 100, 0)";  
  } else if (h == 2 || q == 2 || b == 2) {     
    ourcolor1 = "rgb(100, 0, 255)"; 
    ourcolor2 = "rgb(100, 200, 255)";
    ourcolor3 = "rgb(20, 100, 50)";     
  } else if (h == 3 || q ==3 || b == 3) {
    ourcolor1 = "rgb(255, 255, 255)"; 
    ourcolor2 = "rgb(50, 50, 100)";
    ourcolor3 = "rgb(255, 0, 0)";     
  } else if (h == 4 || q ==4 || b == 4) {
    ourcolor1 = "rgb(0, 100, 0)"; 
    ourcolor2 = "rgb(100, 0, 0)";
    ourcolor3 = "rgb(255, 255, 0)";    
  } else if (h == 5 || q ==5 || b == 5) { 
    ourcolor1 = "rgb(140, 100, 255)"; 
    ourcolor2 = "rgb(100, 100, 100)";
    ourcolor3 = "rgb(255, 255, 255)";     
  } else if (h == 6 || q ==6 || b == 6) {
    ourcolor1 = "rgb(0, 10, 20)"; 
    ourcolor2 = "rgb(255, 255, 255)";
    ourcolor3 = "rgb(100, 100, 100)";     
  } else if (h == 7 || q ==7 || b == 7) {
    ourcolor1 = "rgb(150, 178, 255)"; 
    ourcolor2 = "rgb(0, 250, 255)";
    ourcolor3 = "rgb(255, 0, 255)";    
  } else if (h == 8 || q ==8 || b == 8) {
    ourcolor1 = "rgb(0, 0, 0)"; 
    ourcolor2 = "rgb(150, 50, 50)";
    ourcolor3 = "rgb(0, 120, 210)";    
  } else if (h == 9 || q ==9 || b == 9) {
    ourcolor1 = "rgb(0, 0, 40)"; 
    ourcolor2 = "rgb(90, 0, 90)";
    ourcolor3 = "rgb(255, 100, 100)";     
  } else if (h == 10|| q == 10 || b == 10) {
    ourcolor1 = "rgb(20, 20, 255)"; 
    ourcolor2 = "rgb(10, 90, 10)";
    ourcolor3 = "rgb(100, 100, 100)";    
  }
   

console.log(ourcolor1);
console.log(ourcolor2);
console.log(ourcolor3);
// console.log(secondcol1);
// console.log(secondcol2);
// console.log(secondcol3);


let secondcol1;
let secondcol2;
let secondcol3;

if (lastrandom == 1) {
     secondcol1 = ourcolor1;
     secondcol2 = ourcolor2;
     secondcol3 = ourcolor3;
} else if (lastrandom == 2) {
  secondcol1 = ourcolor1;
  secondcol2 = ourcolor3;
  secondcol3 = ourcolor2;
} else if (lastrandom == 3) {
  secondcol1 = ourcolor2;
  secondcol2 = ourcolor1;
  secondcol3 = ourcolor3;
} else if (lastrandom == 4) {
  secondcol1 = ourcolor3;
  secondcol2 = ourcolor1;
  secondcol3 = ourcolor2;
} else if (lastrandom == 5) {
  secondcol1 = ourcolor3;
  secondcol2 = ourcolor2;
  secondcol3 = ourcolor1;
} else if (lastrandom == 6) {
  secondcol1 = ourcolor2;
  secondcol2 = ourcolor3;
  secondcol3 = ourcolor1;
}

console.log(secondcol1);
console.log(secondcol2);
console.log(secondcol3);

  let color1 = document.getElementById("zero").style.backgroundColor = ourcolor1;
  let color2 = document.getElementById("one").style.backgroundColor = ourcolor2;
  let color3 = document.getElementById("two").style.backgroundColor = ourcolor3;
  let color4 = document.getElementById("three").style.backgroundColor = secondcol1;
  let color5 = document.getElementById("four").style.backgroundColor = secondcol2;
  let color6 = document.getElementById("five").style.backgroundColor = secondcol3;





