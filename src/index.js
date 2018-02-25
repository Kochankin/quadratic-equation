module.exports = function solveEquation(equation) {
  
    var a= Number(equation.slice(0, equation.indexOf(" * x^2")).replace(" ",""));
    var b= Number(equation.slice(equation.indexOf(" * x^2 ")+7, equation.indexOf(" * x ")).replace(" ",""));
    var c= Number(equation.slice(equation.indexOf(" * x ")+5, equation.length).replace(" ",""));
  
    var d = b*b - 4*a*c;
  
    var roots = [];
      var x1 = Math.round((-b + Math.sqrt(d)) / (2*a));
      var x2 = Math.round((-b - Math.sqrt(d)) / (2*a));
      roots.push(x1, x2);
      return roots.sort(function(x, y) { 
        return x - y;
      });
  }
  
