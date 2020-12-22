const Chance = require("chance");
const fs = require("fs");
const path = require("path");

let chance = new Chance();

function generatePerson() {
    return {
        name: chance.first({nationality: "en"}),
        surname: chance.last({nationality: "en"}),
        age: chance.age()
    }
}

const COUNT = 50;

let lines = [];

for (let i = 0; i < COUNT; i++) {
    lines.push(generatePerson());
}

let fileData = `
let data = {
    lines: ${JSON.stringify(lines, null, 4)}
};

export default data;
`

fs.writeFileSync(path.join(__dirname, "..", "src", "data.js"), fileData);