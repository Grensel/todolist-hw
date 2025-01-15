import { dataPropsType } from "./HomeWork01-1";
import { S } from "../components/TodolistItem_Styles";

type TodolistPropsType = {
  data: dataPropsType;
};

export const Todolist = ({ data }: TodolistPropsType) => {
  const TodoTasks = data.tasks.map((t) => {
    return (
      <div key={t.taskId} style={{ display: "flex" }}>
        <h3>{t.title}</h3>
        <input type={"checkbox"} checked={t.isDone} />
      </div>
    );
  });
  return (
    <S.TodolistItem>
      <h2>{data.title}</h2>
      {TodoTasks}
    </S.TodolistItem>
  );
};
