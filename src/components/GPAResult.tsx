import { calculateGPA } from '@/utils/calculateGPA';
import { Course } from '@/utils/calculateGPA';

interface GPAResultProps {
  courses: Course[];
}

export default function GPAResult({ courses }: GPAResultProps) {
  const gpa = calculateGPA(courses);

  return (
    <div id="result" className="result">
      <h2 >Your GPA</h2>
      <p id="gpaResult">
        {gpa.toFixed(2)}
      </p>
    </div>
  );
}