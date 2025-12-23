import { ParentsListWidget } from "@/widgets/parents-list";
import { parentsData } from "@/lib/data";
import { Parent } from "@/entities/parent";

const ParentListPage = () => {
  const parents = parentsData as Parent[];

  return <ParentsListWidget data={parents} />;
};

export default ParentListPage;
