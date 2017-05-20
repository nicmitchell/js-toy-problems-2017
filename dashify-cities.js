/* Given a list of city data, return a list in alphabetical order displaying the relationships. 
Each level of the hierarchy should be ordered alphabetically.

var cities = [
  {"id": 1, "name": "San Francisco Bay Area", "parent_id": null},
  {"id": 2, "name": "San Jose", "parent_id": 3},
  {"id": 3, "name": "South Bay", "parent_id": 1},
  {"id": 4, "name": "San Francisco", "parent_id": 1},
  {"id": 5, "name": "Manhattan", "parent_id": 6},
  {"id": 6, "name": "New York", "parent_id": null}
];

The above data should output the following:
New York
-Manhattan
San Francisco Bay Area
-San Francisco
-South Bay
--San Jose
*/

const displayCities = (cityData) => {
  let sortedCities = cityData.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (b.name < a.name) {
      return 1;
    }
    return 0;
  });

  sortedCities = sortedCities.map((city) => {
    city.children = [];
    return city;
  });

  sortedCities.forEach((currentCity) => {
    if (currentCity.parent_id !== null) {
      sortedCities.forEach((targetCity) => {
        if (currentCity.parent_id === targetCity.id) {
          targetCity.children.push(currentCity);
        }
      });
    }
  });

  let cityTree = [];
  sortedCities.forEach((city) => {
    if (city.parent_id === null) {
      cityTree.push(city);
    }
  })

  const dashify = (name, number) => {
    let dashes = '';
    while (number > 0) {
      dashes += '-';
      number -= 1;
    }
    return `${dashes}${name}\n`;
  }

  const makeString = (cityArray, depth) => {
    let resultString = '';
    cityArray.forEach((city) => {
      resultString += dashify(city.name, depth);
      if (city.children.length > 0) {
        resultString += makeString(city.children, depth + 1);
      }
    });
    return resultString;
  }
  return makeString(cityTree, 0);
}
