const Character = require('../models/Character')
const characters = require('./characters.json')


Character.deleteMany({}).then(() => {
    Character.create(characters).then(res => {
        require("util").inspect.defaultOptions.depth = null
        console.log(res)
        process.exit()
    });
});