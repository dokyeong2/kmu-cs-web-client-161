//1
console.log("hello homework3");


//2
function stringToInt(input){
 return parseInt(input);
}


//3
function maskNumber(input){
 var mask_number=input.substring(0,7);
 var mask ="****"
 mask_number=mask_number + mask;

 return mask_number;
}


//4
function getAverage(input_array){
 var index=input_array.length;
 var sum =0;
 var avg;

 for ( var i=0; i<index; i++){
  sum+= input_array[i];
 }
 
 avg=sum/index;
 return avg;
}



//5
function isMultipleSeven(input){
 if(input%7==0){
    return true;}
 else{
    return false;}  
}



//6
function operation(a, b, c){
 if(a=="add"){
   return b+c;}
 else if(a=="substract"){
   return b-c;}
 else if(a=="multiply"){
   return b*c;}
 else if(a=="divide"){
   return b/c;}
 else{
   console.log("Not Supported");
   return "undefined";}

}


//7
function triangleMtn(index) {
 var triangle = "";
  for( var i=0; i<index; i++){
   for( var j=0; j<=i; j++){
      triangle += "*";}
   triangle+="\n";}

 console.log(triangle);

}
