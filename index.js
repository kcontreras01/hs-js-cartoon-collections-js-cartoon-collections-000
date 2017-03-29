function dwarfRollCall(dwarves) {
  var line = ''//[]; creates an array instead of a string

    for (var i = 0; i < dwarves.length; i++) {
      //line.push(`${i + 1}. ${dwarves[i]}`) - mutates the array by adding the element to the end
      line += `${i + 1}. ${dwarves[i]} `
  }
    return line//.join(' '); - turns array to string
  }

function summonCaptainPlanet(planeteerCalls){
  for(var i = 0; i < planeteerCalls.length; i++){
    planeteerCalls[i] = planeteerCalls[i].toUpperCase() + '!';
    // takes the element of an array and returns that element upper case
}
  return planeteerCalls;
}

function longPlaneteerCalls(words) {
  if (words.length > 4) {
    return true;
  }
  if (words.length <= 4){
    return false;
  }
}

function  findTheCheese(cheese_array){ // cheese == 'cheddar'
  var cheese_types = ['cheddar', 'gouda', 'camembert'];
  var cheese = cheese_array.find(function(cheese) {
    return cheese_types.includes(cheese);
  });
  if (cheese){ // format of includes: array.includes(element)
    return cheese;
  } else {
      return 'no cheese!';
  }
}
