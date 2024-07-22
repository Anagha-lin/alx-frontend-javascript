export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
<<<<<<< HEAD
     const task = true;
    var task2 = false;
=======
    const task = true; // eslint-disable-line no-unused-vars
    const task2 = false; // eslint-disable-line no-unused-vars
>>>>>>> 64880386096f1a85c19e24341a7feadf10460990
  }

  return [task, task2];
}
