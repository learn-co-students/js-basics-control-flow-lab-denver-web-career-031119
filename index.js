function scuberGreetingForFeet(someValue) {
  let greeting = "";
  if (someValue <= 400) {
    greeting = "This one is on me!";
  } else if (someValue >= 2000 ) {
      if (someValue >= 2500) {
        greeting = 'No can do.';
      } else {
        greeting = 'I will gladly take your thirty bucks.';
      }
  }
  return greeting;
}

function ternaryCheckCity(city) {
  let greeting = "";
city === 'NYC' ? greeting = "Ok, sounds good." : greeting = "No go.";
  return greeting;
}

function switchOnCharmFromTip(tip) {
  switch(tip) {
    case 'generous':
      var response = "Thank you so much."
      break;
    case 'not as generous':
      var response = "Thank you."
      break;
    default:
      var response = "Bye."
      break;
  }
  return response;
}
