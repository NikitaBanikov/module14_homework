// Задание 1
const xmlString = `
<list>
<student>
  <name lang="en">
    <first>Ivan</first>
    <second>Ivanov</second>
  </name>
  <age>35</age>
  <prof>teacher</prof>
</student>
<student>
  <name lang="ru">
    <first>Петр</first>
    <second>Петров</second>
  </name>
  <age>58</age>
  <prof>driver</prof>
</student>
</list>
`;
const xmlDocument = new DOMParser().parseFromString(xmlString, "text/xml");
const listNode = xmlDocument.querySelectorAll("student");

const list = [];

for (const student of listNode) {
  const nameNode = student.querySelector("name");
  const first = nameNode.querySelector("first").textContent;
  const second = nameNode.querySelector("second").textContent;
  const name = `${first} ${second}`;
  const lang = nameNode.getAttribute("lang");
  const age = student.querySelector("age").textContent;
  const prof = student.querySelector("prof").textContent;
  list.push({name, age, prof, lang});
}

const result = { list };
console.log(result);





