
// A natural number greater than 1 that is not a product of two smaller natural numbers is prime number  eg 5 X 1 or 1 X 5 i e 5 prime
// The positive integer whole numbers are natural numbers eg 1,2,3,4
//A natural number greater than 1 that is not prime number is called composite number    eg 2 X 2 = 4 i e 4 composite
/*To prove whether a number is prime number or not first divide by 2
and see if you get whole number. If you do its not prime number, if not try by 3, 5, 7, 11 and so on.
*/
// Prime numbers are the numbers that can be divided by itself or 1.

//1. Find given number is Prime or not
    
        var prime=true;
        var userNum = 6;
        
        if (userNum<=1){
           prime=false;
        }else{

            for (var i = 2; i <= userNum / 2; i++) {
                input = userNum % i;
                console.log("Thinking if " + i + " is a multiple " + "of " + userNum);

                if (input == 0) {
                    console.log("YES MULTIPLE FOUND= " + i);
                    prime = false;
                    break;
                }
            }
        }
         if (prime)
             console.log("Yes! " + userNum + " is a Prime Number!");
          else
              console.log("Not Prime number! "+ userNum + " is a Composite Number!");

          console.log("-----------------------------------------------------------------------------")    



// 2. Find Prime between 1 to 100

for (var num = 1; num <= 100; num++) {

    var notPrime = false;
    for (var i = 2; i <= num; i++) {
        if (num%i===0 && i!==num) {
            notPrime = true;
        }
    }
    if (notPrime === false) {
                console.log(num);
    }
}
console.log("-----------------------------------------------------------------------------")    
       

// 3. Find fibinoci series
var fibonacciSeries = function (f) 
{
  if (f===1) 
  {
    return [0, 1];
  } 
  else 
  {
    var s = fibonacciSeries(f - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};

 console.log(fibonacciSeries(5));
 

console.log("-----------------------------------------------------------------------------")    

// 4. Print below pattrens

// 	*
// 	**
// 	***
// 	****
// 	***** (5 stars)
// 	****
// 	***
// 	**
// 	*
var star = "* ";
//where length is no of stars in longest streak
var length = 5;
for(let i = 1; i <= (length*2)-1; i++){
   const k = i <= length ? i : (length*2)-i;
   console.log(star.repeat(k));
}

console.log("-----------------------------------------------------------------------------")    
// 5. accept a number and check for palindrome

 var n =12321;
 var sum = 0, r;
 var temp = n;    
 while(n>0)
   {    
    r = n % 10;   
    sum = (sum*10)+r;    
    n = Math.floor(n/10);    
   }    
  if(temp==sum)    
    console.log("It is a Palindrome number.");
  else  
    console.log("Not a palindrome");    

console.log("-----------------------------------------------------------------------------") 


// 6.Find the sum of all elements of a given array?
// 	var arr = [1, 2, 5, 10, 20];
    
        var arr = [1, 2, 5, 10, 20];
        var sum  = 0;

        for(var i=0;i<arr.length;i++)
            sum+= arr[i];

      console.log("Sum of the give array: " + sum);

      console.log("-----------------------------------------------------------------------------")   
// 7)Find Duplicate Characters in a String 

let strArray = [ "a", "r", "s", "b", "b", "i", "p", "k"];
let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index)
console.log(findDuplicates(strArray)) 
console.log([...new Set(findDuplicates(strArray))]) 

console.log("-----------------------------------------------------------------------------")  

// 8)Find first non-repeated character in a String 

function firstNonRepeatedCharacter(string) {
    for (var i = 0; i < string.length; i++) {
      var c = string.charAt(i);
      if (string.indexOf(c) == i && string.indexOf(c, i + 1) == -1) {
        return c;
      }
    }
    return null;
  }
  var someString = 'aabcbdcee';
console.log(firstNonRepeatedCharacter(someString));

console.log("-----------------------------------------------------------------------------")  

// 9)Reverse a String(trying using without reverse method in String Builder) 
function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
var reverse='hello';
console.log(reverseString(reverse));

console.log("-----------------------------------------------------------------------------")  

// 10)Compute floor of a division and modules.Apply Overloading for four different primitive datatypes 

// 11)Check if a string contains substring(String and substring are input) 
const string = "foo";
const substring = "oo";

console.log(string.includes(substring));

console.log("-----------------------------------------------------------------------------")  

// 12)Extract Min and Max of two numbers(int,long,float and double) 

console.log(Math.max(5,6,7));
console.log(Math.min(0.1,2,3));


console.log("-----------------------------------------------------------------------------")  

// 13)Write a Programm to sort an Array using loop(Not using Arrays or Collections classes) 
        
var input = [2,3,8,1,4,5,9,7,6];

var output = [];
var inserted;

for (var i = 0, ii = input.length ; i < ii ; i++){
  inserted = false;
  for (var j = 0, jj = output.length ; j < jj ; j++){
    if (input[i] < output[j]){
      inserted = true;
      output.splice(j, 0, input[i]);
      break;
    }
  } 
  if (!inserted)
    output.push(input[i])
}

console.log(output); 
console.log("-----------------------------------------------------------------------------")  
// 14)Write a Programm to reverse a Array(using Loops) 

function reverseArray(arr) {
    var newArray = [];
    for (var i = arr.length - 1; i >= 0; i--) {
      newArray.push(arr[i]);
    }
    return newArray;
  }

var reverse = ['1','2','3','4','5','6'];
console.log(reverseArray(reverse));

console.log("-----------------------------------------------------------------------------")  
// 15)Create a interface Arithmetic which contains a method signature int divisor_sum(int n). You need to write a class called MyCalculator which implements the interface. 

//   divisorSum function just takes an integer as input and return the sum of all its divisors. For example divisors of 6 are 1, 2, 3 and 6, so divisor_sum should return 12 

//   Input : 6   

//   Output: I implemented: Arithmetic  

//             12 

 