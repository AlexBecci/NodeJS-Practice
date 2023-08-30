function add(x1, x2) {
  return x1 + x2;
}
function substract(x1, x2) {
  return x1 - x2;
}
function multiply(x1, x2) {
  return x1 * x2;
}
function divide(x1, x2) {
  if (x2 == 0) {
    return console.log("No se puede dividir ya que el dividendo es ", x2);
  } else {
    return x1 / x2;
  }
}
