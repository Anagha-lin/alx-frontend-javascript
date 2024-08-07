export interface ITeacher {
  readonly firstName: string;
  readonly lastName: string;
  isFullTime: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

export interface IDirector extends ITeacher {
  numberOfReports: number;
}

export interface IPrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

export function printTeacher(firstName: string, lastName: string): string {
  return `${firstName.charAt(0)}. ${lastName}`;
}

export interface IStudentClassConstructor {
  new (firstName: string, lastName: string): IStudentClass;
}

export interface IStudentClass {
  workOnHomework(): string;
  displayName(): string;
}

export class StudentClass implements IStudentClass {
  private _firstName: string;
  private _lastName: string;

  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this._firstName;
  }
}

export function createStudent(
  constructor: IStudentClassConstructor,
  firstName: string,
  lastName: string
): IStudentClass {
  return new constructor(firstName, lastName);
}

