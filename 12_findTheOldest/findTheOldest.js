const findTheOldest = function(arrayOfObjects) {
    let oldest = arrayOfObjects.reduce((oldestPerson, currentPerson) => {
        let oldestPersonAge = calculateAge(oldestPerson.yearOfBirth, oldestPerson.yearOfDeath);
        let currentPersonAge = calculateAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);

        return oldestPersonAge > currentPersonAge ? oldestPerson : currentPerson;
    });

    return oldest;
};

function calculateAge(yearOfBirth, yearOfDeath) {
    if (yearOfDeath) {
        return yearOfDeath - yearOfBirth;
    } else {
        return new Date().getFullYear() - yearOfBirth;
    }
}

const people = [
    {
      name: "Carly",
      yearOfBirth: 1066,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

findTheOldest(people);


// Do not edit below this line
module.exports = findTheOldest;
