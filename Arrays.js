//Find the last element of the following arrays.
//arr1 = [3,7,34,90,12]
//arr2 = [true, "green", "where",12,56]
let  arr1= [3,7,34,90,12];
let lastElement=arr1.slice(-1);
console.log(lastElement);
let arr2= [true,"green","where",12,56]
let lastElement2=arr2.slice(-1)
console.log(lastElement2);

//Write a JS program that will join the following array elements into a string
//myPets = ["Cow", "Bird", "Snake", "Dog"];
let myPets = ["Cow","Bird","Snake","Dog"];
let joined= myPets.join();
console.log(joined)

//Write a JS script to sort the following array items
//var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
 var arr3= [-5, 9, 5, 3, 2,-3, 6, 8, 4,1 ];
 var x= arr3.sort();
 console.log(x);

 //Write a program to remove duplicates from the following array.
//Console the array without duplicates, and console another array that only contains the duplicates
var arr = ["apple", "mango", "apple",
            "orange", "mango", "mango"];
function removeDuplicates(arr){
    return arr.filter((item,index)=> arr.indexOf(item)===index)
}
console.log(removeDuplicates(arr));
function duplicates(arr){
    return arr.filter((item,index)=> arr.indexOf(item)===index)
}
console.log(duplicates(arr));

//Write a JS script to search for the following word in the array.
//"way"
//If the word is present, console it else console "the search word was not found"
let arr5 = ["the", "way", "x", 4];
    if (arr=>"way"){
        console.log("way");
    }
    else{
        console.log("the search word was not found")
    }

//Write a JS script to sort the following string
let sortString = (string) => {
    return string.split("").sort().join("");
  };
  console.log(sortString("sevink"));
