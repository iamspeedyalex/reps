function Warrior(n){
    let name = n;  
    this.name = function(n){
      if( n ) name=n;
      return name;
    }
  }
    
  Warrior.prototype.toString = function(){
      return "Hi! my name's "+this.name();
  }

/* learned that by not putting the let or var in front of name = n  on line 2, it made it a global variable making every warrior share the same name. By writing "Boris" on the following line after "Al", it overwrote "Al". Simply adding let to the beginning of line 2 fixed the issue. It fixed the issue by changing it so the variable name only exists inside that specific warrior's function. */