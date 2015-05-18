console.log('loaded menu.js')

// var buttons = document.getElementsByTagName('button');
// for(var i=0; i<buttons.length; i++){
//   buttons[i].addEventListener("click", function(){
//     var output = this.parentElement.parentElement.querySelector("h2").textContent;
//     console.log(output);

//   })
// }

var button = document.querySelectorAll("button")
var row;
var total = 0;
var priceGet = function(event){
  console.log(this);
  var specific_class=($(this).attr("class"));
  var cupcakeName= $("h2."+specific_class).text();
  var cupcakePrice= $("span."+specific_class).text();
  var cupcakeWhole= $("<li class='purchased'><h4>"+cupcakeName+cupcakePrice+"</h4></li>");
  var price = cupcakePrice.replace("$","");
  price= parseFloat(price);
  $("#specific_order").append(cupcakeWhole);
  total=(total+price);
  var totalize= $("span#tot").text(total);
  var tax = total *.0875;
  var tip = absTot*.20;
  var absTot= total + tip + tax;
}



for (var i=0;i<button.length; i++){
    button[i].addEventListener("click", priceGet);
}





























































