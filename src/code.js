myapp = {};

myapp.Greeter = function() { };

myapp.Greeter.prototype.greet = function(name) {
  return "Hello " + name + "!";
};

myapp.Greeter.prototype.uncovered = function(name) {
  return "uncovered " + name + "!";
};
