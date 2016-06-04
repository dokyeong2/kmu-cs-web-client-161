function answer_1() {

  document.getElementById("q1-answer").innerHTML = "<ul><li>D - Document</li><li>O - Object</li><li>M - Model</li></ul>";

}



function answer_2() {

  document.getElementById("q2-answer").innerHTML = "1. Represent HTML file as an object so that javascript can easily access.</br> 2. Represented in a tree structure where the <html> tag is the root.</br>";
}



function answer_3() {
  var t = document.getElementsByClassName("q34-answer");
  t[0].innerHTML="<ul><li>Parent node : A node directly above a node. </li> <li>Child nodes : Nodes one level directly below. </li><li>Sibling nodes : Nodes at the same level (same parent node). </li><li>Descendant nodes : A set of nodes any number of levels below another node.</li><li>Ancestor nodes : A set of nodes above a node in a tree.</li></ul>";
  
}

function answer_4() {

  var t=document.getElementsByClassName("q34-answer");
  t[1].innerHTML = "<ul><li>document.getElementById : Returns an element with a given ID_NAME. Duplicate ID is not allowed in the HTML specification. </li><li>document.getElementsByClassName : Get a list of elements based on the class name.</li><li>document.getElementsByName : Get a list of elements based on the name. Name is generally used with input tag.</li><li>document.getElementsByTagName : Get a list of elements with the input tag name. </li></ul>";
}



$('a').click(function (event) {
 $(this).text('Answer5');
})

$('.item').click(function (event){
 $(this).attr('style', 'font-size:3em;');
})

$('.demo').dblclick(function (event){
 $(this).attr('style', 'color:blue;');
})