/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function (employees, id) {
  let importance = 0;
  let find = [id];

  while (find.length !== 0) {
    let currentId = find.shift();
    for (let i = 0; i < employees.length; i++) {
      let currentEmployee = employees[i];
      if (currentEmployee.id === currentId) {
        importance += currentEmployee.importance;

        for (let id_element of currentEmployee.subordinates) {
          find.push(id_element);
        }
        break;
      }
    }
  }

  return importance;
};

let e = [
  [1, 2, [2]],
  [2, 3, []],
];
let id = 2;
console.log(GetImportance(e, id));
