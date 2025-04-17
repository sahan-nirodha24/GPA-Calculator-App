"use client";

import { useState } from 'react';
import CourseForm from '@/components/CourseForm';
import CourseTable from '@/components/CourseTable';
import GPAResult from '@/components/GPAResult';
import PrintButton from '@/components/PrintButton';
import { Course } from '@/utils/calculateGPA';

export default function Home() {
  const [courses, setCourses] = useState<Course[]>([]);

  const handleAddCourse = (newCourse: Course) => {
    setCourses([...courses, newCourse]);
  };

  const handleDeleteCourse = (id: number) => {
    setCourses(courses.filter(course => course.id !== id));
  };

  const handleResetAll = () => {
    if (courses.length === 0 || confirm('Are you sure you want to reset all courses?')) {
      setCourses([]);
    }
  };

  return (
    <div className="container">
      <h1 >GPA Calculator</h1>
      
      <CourseForm onAddCourse={handleAddCourse} onResetAll={handleResetAll} />
      
      <CourseTable courses={courses} onDeleteCourse={handleDeleteCourse} />
      
      {courses.length > 0 && (
        <>
          <GPAResult courses={courses} />
          <PrintButton courses={courses} />
        </>
      )}
    </div>
  );
}