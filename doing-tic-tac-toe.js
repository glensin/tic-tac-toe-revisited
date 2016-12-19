var gameCounter = 1

$('#word').on('click',function(){location.reload()})

$('.border').on('click','li',function(){
if (gameCounter%2 === 0) {
  $(this).addClass ("red")
$("h2").text("Player Two turn")
}
else {
$(this).addClass ("blue")
$("h2").text("Player One Turn")
}
winner()
draw()
gameCounter++
console.log(gameCounter)
})

function winner () {
if(
$("#One").hasClass("blue") && $("#Two").hasClass("blue") && $("#Three").hasClass("blue") ||
$("#Four").hasClass("blue") && $("#Five").hasClass("blue") && $("#Six").hasClass("blue") ||
$("#Seven").hasClass("blue") && $("#Eight").hasClass("blue") && $("#Nine").hasClass("blue") ||
$("#One").hasClass("blue") && $("#Four").hasClass("blue") && $("#Seven").hasClass("blue") ||
$("#Two").hasClass("blue") && $("#Five").hasClass("blue") && $("#Eight").hasClass("blue") ||
$("#Three").hasClass("blue") && $("#Six").hasClass("blue") && $("#Nine").hasClass("blue") ||
$("#One").hasClass("blue") && $("#Five").hasClass("blue") && $("#Nine").hasClass("blue") ||
$("#Three").hasClass("blue") && $("#Five").hasClass("blue") && $("#Seven").hasClass("blue")
)
{$("h2").text("Player One Win")
$('.border').on('click',function(){location.reload()})
}
else if (
  $("#One").hasClass("red") && $("#Two").hasClass("red") && $("#Three").hasClass("red") ||
  $("#Four").hasClass("red") && $("#Five").hasClass("red") && $("#Six").hasClass("red") ||
  $("#Seven").hasClass("red") && $("#Eight").hasClass("red") && $("#Nine").hasClass("red") ||
  $("#One").hasClass("red") && $("#Four").hasClass("red") && $("#Seven").hasClass("red") ||
  $("#Two").hasClass("red") && $("#Five").hasClass("red") && $("#Eight").hasClass("red") ||
  $("#Three").hasClass("red") && $("#Six").hasClass("red") && $("#Nine").hasClass("red") ||
  $("#One").hasClass("red") && $("#Five").hasClass("red") && $("#Nine").hasClass("red") ||
  $("#Three").hasClass("red") && $("#Five").hasClass("red") && $("#Seven").hasClass("red")
  )
{
$("h2").text("Player Two Win")
$('.border').on('click',function(){location.reload()})
}
}

function draw (){
  if(gameCounter === 10)
  {$("h2").text("Game Draw")
$('.border').on('click',function(){location.reload()})}
}
