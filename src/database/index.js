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
        hobbiesObj[key].map(hobby => hobbies.push(hobby))
    }
    hobbies = _.uniqWith(hobbies, _.isEqual);
    return hobbies;
}

const getHobbies = () => {
  const dataAccessMethod = () => {
    return getUniqueHobbies();
  };
  return mockDBCall(dataAccessMethod);
};

const getListOfAgesOfUsersWith = (hobby) => {
  const dataAccessMethod = () => {
    // create an object with age key 
    const users = db.usersById;
    const usersHobbies = db.hobbiesOfUserByUsername;
    const data = [];
    for (const key in users) {
        let value = users[key];
        data.push(value)
    }

    // init real obejct
    let data2 = [];
    const unique = [...new Set(data.map(item => item.age))];
    unique.map((item) => data2.push({age:item, count: 0}));

    for (let key in usersHobbies) {
        let name = key;

        let containHobby = false;
        for (let j = 0 ; j < usersHobbies[key].length; j++) {

            if ( usersHobbies[key][j] == hobby) {
                containHobby = true;
                break
            }
        }

        // using name Find the age of that person
        if (containHobby) {
            let temp;
            for (let key2 in users) {
                if (users[key2].username == name) {
                    temp = users[key2];
                    break;
                }
            }
            let tempAge = temp.age;
           for (let k = 0; k < data2.length; k++) {
               if (data2[k].age == tempAge) {
                   data2[k].count++;
               }
           }
        }

    }
    return data2;
  };
  return mockDBCall(dataAccessMethod);
};

module.exports = {
  getUsers,
  getListOfAgesOfUsersWith,
  getHobbies,
};
