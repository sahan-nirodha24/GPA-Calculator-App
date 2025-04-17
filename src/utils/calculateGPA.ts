export interface Course {
    id: number;
    name: string;
    credits: number;
    grade: number;
    gradeText: string;
    gradePoints: number;
  }
  
  export function calculateGPA(courses: Course[]): number {
    if (courses.length === 0) {
      return 0;
    }
    
    const totalCredits = courses.reduce((sum, course) => sum + course.credits, 0);
    const totalGradePoints = courses.reduce((sum, course) => sum + course.gradePoints, 0);
    
    return totalGradePoints / totalCredits;
  }