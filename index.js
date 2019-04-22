// Write your code in this file!
function scuberGreetingForFeet(distance)
{
  switch(true)
  {
    case (distance<=400):
      return "This one is on me!"
    case (distance>2500):
      return "No can do."
    case (distance>2000):
      return "I will gladly take your thirty bucks."
  }
}

function ternaryCheckCity(city)
{
  switch(true)
  {
    case (city === "NYC"):
      return "Ok, sounds good."
    default:
      return "No go."
  }

}

function switchOnCharmFromTip(tip)
{
  switch(true)
  {
    case (tip === "generous"):
      return "Thank you so much."
    case (tip === "not as generous"):
      return "Thank you."
    default:
      return "Bye."
  }

}
