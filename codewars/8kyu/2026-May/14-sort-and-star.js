function twoSort(s) {
    s.sort();
    let firstValue = s[0];
    return firstValue.split("").join("***");
  }

/*
function twoSort(s) {
    return s.sort()[0].split('').join('***');
}
A very nice best practices/clever answer someone else gave
*/