class Tripple {
     tripple(n) {
      n = n || 1;
      return n * 3;
    }
  }
  
  class BiggerTripple extends Tripple {
    static tripple2(n) {
      return super.tripple(n) * super.tripple(n);
    }
  }
  
 // console.log(Tripple.tripple());
 // console.log(Tripple.tripple(6));
  console.log(BiggerTripple.tripple2(3));
  var tp = new Tripple();
  console.log(tp.tripple()); //Logs 'tp.tripple is not a function'.
  