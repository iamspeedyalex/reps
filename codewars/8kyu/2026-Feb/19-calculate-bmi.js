function bmi(weight, height) {
  let bmi = weight / (height * height);
  
  if (bmi <= 18.5) {
    return "Underweight";
    
  } else if (bmi <= 25.0) {
    return "Normal";
    
  } else if (bmi <= 30.0) {
    return "Overweight";
    
  } else {
    return "Obese";
  }
}

/* I understand now that the return of an if statement goes in the curly brackets after the condition. I'd read that before, but it clicked more. Claude told me that the "^" symbol can't be used for self-multiplication as it is the bitwise XOR operator in JS. I don't know what that is right now, but good to know I shouldn't use it for this. */