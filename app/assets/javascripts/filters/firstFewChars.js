crudAngles.filter('firstFewChars', function(){

  return function(input){
    if (input.length > 60){
      return input.slice(0, 60) + "... ";
    } else {
      return input;
    }
  }
});