'use strict';
const _ = require('lodash');
const db = require('./db.js');

// UTILS
//----------------
// This is a mock db call that waits for # milliseconds and returns
const mockDBCall = (dataAccessMethod) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(dataAccessMethod());
    }, 500);
  });
};

// MOCK DB CALLS
//----------------
const getUsers = () => {
  const dataAccessMethod = () => _.map(db.usersById, (userInfo) => userInfo);
  return mockDBCall(dataAccessMethod);
};
const getUniqueHobbies = () => {
    let hobbies = [];
    const hobbiesObj = db.hobbiesOfUserByUsername
    for (const key in hobbiesObj) {
        console.log(`${key}: ${db.hobbiesOfUserByUsername[key]}`);
        hobbiesObj[key].map(hobby => hobbies.push(hobby))
    }
    hobbies = _.uniqWith(hobbies, _.isEqual);
    return hobbies;
}

const getHobbies = () => {
  const dataAccessMethod = () => {
    // fill me in :) should return an array of hobbies without duplicate value.
    return getUniqueHobbies();
  };
  return mockDBCall(dataAccessMethod);
};

const getListOfAgesOfUsersWith = (hobby) => {
  const dataAccessMethod = () => {
    // fill me in :) should return an arry of age count based on hobby.
    return [
      { age: 18, count: 2 },
      { age: 12, count: 1 },
    ];
  };
  return mockDBCall(dataAccessMethod);
};

module.exports = {
  getUsers,
  getListOfAgesOfUsersWith,
  getHobbies,
};
