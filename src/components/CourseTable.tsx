"use client";

import { Course } from '@/utils/calculateGPA';

interface CourseTableProps {
  courses: Course[];
  onDeleteCourse: (id: number) => void;
}

export default function CourseTable({ courses, onDeleteCourse }: CourseTableProps) {
  if (courses.length === 0) {
    return (
      <div id="emptyMessage" className="empty-message">
        No courses added yet. Add your first course above.
      </div>
    );
  }

  return (
    <div id="coursesList">
      <table id="coursesTable" className="w-full">
        <thead>
          <tr>
            <th >Course Name</th>
            <th >Credits</th>
            <th >Grade (Value)</th>
            <th >Grade Points</th>
            <th >Action</th>
          </tr>
        </thead>
        <tbody id="coursesTableBody">
          {courses.map((course) => (
            <tr key={course.id} >
              <td >{course.name}</td>
              <td >{course.credits}</td>
              <td >
                {course.gradeText} ({course.grade})
              </td>
              <td >
                {course.gradePoints.toFixed(2)}
              </td>
              <td >
                <button
                  onClick={() => onDeleteCourse(course.id)}
                  className="delete-btn"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}