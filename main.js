var isPP = function (n) {
  var current = 2,
    power = 2,
    max = Math.floor( n / 2 );

  while ( current <= max ) {
    power = 2;
    while ( Math.pow( current, power ) <= n ) {
      if ( n === Math.pow( current, power ) ) {
        return console.log([ current, power ]);
      } else {
        power += 1;
      }
    }
    current += 1;
  }

  return console.log(null);
}

isPP(4) // 2, 2
isPP(9) // 3, 2
isPP(5) // null
isPP(8) // 2, 3
isPP(128) // 2, 7
isPP(3707398432);
isPP(61917364224);
isPP(243);
isPP(27136);


