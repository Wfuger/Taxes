module.exports = {
  taxCalculator: function(dollars) {
    var tax = 0;
    if (dollars <= 10) {
      tax = dollars * 0.1
      return tax;
    }
    if (dollars <= 20) {
      tax = ((dollars - 10) * 0.07) + 1;
      return tax;
    }
    if (dollars <= 30) {
      tax = ((dollars - 20) * 0.05) + 1.7;
      return tax;
    } else {
      tax = ((dollars - 30) * 0.03) + 2.2;
      return tax;
    }
  }
}
