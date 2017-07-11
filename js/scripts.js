$(document).ready(function(){
  $("#palindromeForm").submit(function(event) {
    var wordInput = $("input#word").val();

    var reverseInput = wordInput.split("");
    reverseInput.reverse();
    var reverseString = reverseInput.join("");
    //alert(reverseString);
     if(wordInput === reverseString){
       alert("Yay its a Palindrome!");
     }
     else if (wordInput !== reverseString) {
       alert("Nooo its not a Palindrome!");
     }
    event.preventDefault();
  })
})
