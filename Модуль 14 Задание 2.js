//Задание 2
const jsonString = `
{
  "list": [
   {
    "name": "Petr",
    "age": "20",
    "prof": "mechanic"
   },
   {
    "name": "Vova",
    "age": "60",
    "prof": "pilot"
   }
  ]
 }`;
const data = JSON.parse(jsonString);
const listJson = data.list;

const list = [];

for (const key of listJson) {
    const name = key.name;
    const age = Number(key.age);
    const prof = key.prof;
    list.push({name, age, prof});
}

const result = { list };
console.log(result);