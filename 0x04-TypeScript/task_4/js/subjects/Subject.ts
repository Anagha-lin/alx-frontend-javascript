// task_4/js/subjects/Subject.ts

/// <reference path="Teacher.ts" />

namespace Subjects {
  export class Subject {
    private teacher!: Teacher;

    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}

