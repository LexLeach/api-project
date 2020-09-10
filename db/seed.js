const Character = require('../models/Character');
const characters = require('./characters.json');

Character.deleteMany({}).then(() => {
    Character.create(characters).then(res => {
        console.log(res);
    });
});