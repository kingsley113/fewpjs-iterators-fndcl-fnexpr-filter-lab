// Code your solution here
// Matching
function findMatching(drivers, name) {
  let matches = drivers.filter((driver) => {
    return driver.toLowerCase() === name.toLowerCase();
  });
  return matches;
}

// Fuzzy Finder
function fuzzyMatch(drivers, search) {
  let matches = drivers.filter((driver) => {
    return driver.slice(0, search.length) === search;
  });
  return matches;
}

// Match Name
function matchName(drivers, name) {
  let matches = drivers.filter((driver) => {
    return driver.name === name;
  });
  return matches;
}
