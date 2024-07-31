export interface IManager {
  workFromHome(): string;
  takeCoffeeBreak(): string;
  manageDirectorTasks(): string;
}

export interface IEducator {
  workFromHome(): string;
  takeCoffeeBreak(): string;
  manageTeachingTasks(): string;
}

export class Director implements IManager {
  workFromHome(): string {
    return 'Working from home';
  }

  takeCoffeeBreak(): string {
    return 'Taking a coffee break';
  }

  manageDirectorTasks(): string {
    return 'Handling director tasks';
  }
}

export class Teacher implements IEducator {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  takeCoffeeBreak(): string {
    return 'Cannot take a break';
  }

  manageTeachingTasks(): string {
    return 'Handling teaching tasks';
  }
}

export function hireEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

export function isManager(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

export function performWork(employee: Director | Teacher): string {
  if (isManager(employee)) {
    return employee.manageDirectorTasks();
  }
  return employee.manageTeachingTasks();
}

export type Subject = 'Math' | 'History';

export function conductClass(todayClass: Subject): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  }
  if (todayClass === 'History') {
    return 'Teaching History';
  }
  return 'Class not defined';
}

