'use strict';
/*Given a year, return the century it is in. 
The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to 
and including the year 200, etc.*/

/*siglo I   100/100 =1          el resto es === 0 y el siglo es el valor del cociente que es entero
            99/100=0.99~0+1=1   el resto es !==0 y el siglo es el valor del cociente sin decimales más 1


*/


function centuryFromYear(year) {
    const century = year % 100;
    const yearToCentury = year / 100;

    if (century === 0) {
        return yearToCentury;

    } else {
        return Math.trunc(yearToCentury) + 1;
    }
}

console.log(centuryFromYear(1905));