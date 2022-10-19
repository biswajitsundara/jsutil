const student = {
  name: "Biswajit",
  age: "21",
};

//Fetch the value from object
const fetchValueFromObject = () => {
  console.log(student.name);
  console.log(student["name"]);
  console.log(student["age"]);
};

//Check if key exists in object (true or false)
const checkIfKeyExists = () => {
  console.log(student.hasOwnProperty("name"));
  console.log(student.hasOwnProperty("grade"));
  console.log(student.hasOwnProperty(2));
};

//Fetch all keys & values as array
const printKeyValues = () => {
  console.log(Object.keys(student));
  console.log(Object.values(student));
};

//Find key based on the value (Returns name, age)
const findKeyBasedOnValue = () => {
  const key = Object.keys(student).filter((key) => student[key] === "Biswajit");
  const key1 = Object.keys(student).filter((key) => student[key] === "21");
  console.log(key);
  console.log(key1);
};

//Add a dynamic key value
const addDynamicKey = () => {
  student.mark = 200;
  console.log(student);

  const gradeVar = "grade";
  student.gradeVar = "A";
  console.log(student);

  student["Rank"] = "1";
  console.log(student);
};

addDynamicKey();
