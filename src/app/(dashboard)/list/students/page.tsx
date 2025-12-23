import { StudentsListWidget } from "@/widgets/students-list";
import { studentsData } from "@/lib/data";
import { Student } from "@/entities/student";

const StudentListPage = () => {
  const students = studentsData as Student[];

  return <StudentsListWidget data={students} />;
};

export default StudentListPage;
