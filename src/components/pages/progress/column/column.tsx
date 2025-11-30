import React from "react";
import classes from "./column.module.scss";
import { ApplicationData, ColumnType } from "../progress";
import { useDroppable } from "@dnd-kit/core";
import ApplicationCard from "../application-card/application-card";

interface IColumnProps {
  column: ColumnType;
  applications: ApplicationData[];
}

const Column: React.FC<IColumnProps> = ({ column, applications }) => {
  const { setNodeRef, isOver } = useDroppable({
    id: column.id,
  });

  return (
    <div className={classes.columnWrapper}>
      <div className={classes.columnHeader}>
        <h2 className={classes.columnTitle}>{column.title}</h2>
        <span className={classes.taskCount}>{applications.length}</span>
      </div>
      <div
        ref={setNodeRef}
        className={`${classes.column} ${isOver ? classes.columnOver : ""}`}
      >
        {applications.map((application) => {
          return <ApplicationCard key={application.id} application={application} />;
        })}
        {applications.length === 0 && (
          <div className={classes.emptyState}>No applications</div>
        )}
      </div>
    </div>
  );
};

export default Column;
