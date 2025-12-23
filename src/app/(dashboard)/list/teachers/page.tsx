import { TeachersListWidget } from "@/widgets/teachers-list";
import { teachersData } from "@/lib/data";
import { Teacher } from "@/entities/teacher";

const TeacherListPage = () => {
  // Map data to Teacher entity interface if necessary
  const teachers = teachersData as Teacher[];

  return <TeachersListWidget data={teachers} />;
};

export default TeacherListPage;
