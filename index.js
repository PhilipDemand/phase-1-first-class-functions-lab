const returnFirstTwoDrivers = function (array) {
    let newArray = array.slice(0, 2)
    return newArray;
 };

 const returnLastTwoDrivers = function (array) {
    let newArray2 = array.slice(Math.max(array.length - 2, 0))
    return newArray2;
 }

 const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

 function createFareMultiplier(multiplier) {
    return function (fare) {
      let output = fare * multiplier;
      return output;
    }
  }

  const fareDoubler = createFareMultiplier(2);

  const fareTripler = createFareMultiplier(3);

  function selectDifferentDrivers(array, firstOrLastFunc) {
    if (firstOrLastFunc === returnFirstTwoDrivers) {
      return array.slice(0,2)
    } else if (firstOrLastFunc === returnLastTwoDrivers) {
      return array.slice(Math.max(array.length - 2, 0))
    }
  }