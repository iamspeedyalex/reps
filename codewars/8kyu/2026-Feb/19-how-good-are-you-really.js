function betterThanAverage(classPoints, yourPoints) {
  let totalScore = 0;
  
  for (let i = 0; i < classPoints.length; i++) {
    totalScore = totalScore + classPoints[i];
  }
  let classAverage = totalScore / classPoints.length;
  
  return yourPoints > classAverage;
}

/* Slight guidance, but mostly my own. Lesson further solidified: comparison operators always return the result of true or false. */