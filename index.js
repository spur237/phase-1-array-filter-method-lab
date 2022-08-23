// Code your solution here
function findMatching(drivers, name) {
    return drivers
      .filter(function (driver) {
        return driver.toLowerCase().indexOf(name.toLowerCase()) !== -1;
      })
      .sort();
  }
  function fuzzyMatch(drivers, name) {
    return drivers
      .filter(function (driver) {
        return driver.toLowerCase().indexOf(name.toLowerCase()) === 0;
      })
      .sort();
  }
  function matchName(drivers, name) {
    return drivers.filter(function (driver) {
      return driver.name.toLowerCase() === name.toLowerCase();
    });
  }