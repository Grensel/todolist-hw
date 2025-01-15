import { dataPropsType } from "./HomeWork01-1";

type TasksPropsType = {
  data: dataPropsType;
};
export const Tasks = ({ data }: TasksPropsType) => {
  const studentsList = data.students.map((s, index) => (
    <li key={index}>{s}</li>
  ));
  return (
    <>
      <ul>{studentsList}</ul>
    </>
  );
};
