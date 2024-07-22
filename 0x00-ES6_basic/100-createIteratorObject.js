export default function createIteratorObject(report) {
  const iterator = [];

  if (report) {
    for (const department in report.allEmployees) {
      if (Object.prototype.hasOwnProperty.call(report.allEmployees, department)) {
        const employees = report.allEmployees[department];
        for (const employee of employees) {
          iterator.push(employee);
        }
      }
    }
  }

  return iterator;
}
