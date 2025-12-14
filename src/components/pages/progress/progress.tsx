"use client";

import React, { useState } from "react";
import classes from "./progress.module.scss";
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import Column from "./column";
import { JobData } from "@/components/general/job-card";
import ApplicationCard from "./application-card";
import { SAMPLE_JOBS } from "@/constants/sample-jobs";

export enum EApplicationStatus {
  APPLIED = "APPLIED",
  TEST_TASK = "TEST_TASK",
  INTERVIEW = "INTERVIEW",
  OFFER = "OFFER",
  REJECTED = "REJECTED",
}

export interface ApplicationData extends JobData {
  status: EApplicationStatus;
}

export type ColumnType = {
  id: EApplicationStatus;
  title: string;
};

const COLUMNS: ColumnType[] = [
  { id: EApplicationStatus.APPLIED, title: "Applied" },
  { id: EApplicationStatus.TEST_TASK, title: "Test Task" },
  { id: EApplicationStatus.INTERVIEW, title: "Interview" },
  { id: EApplicationStatus.OFFER, title: "Offer" },
  { id: EApplicationStatus.REJECTED, title: "Rejected" },
];

const INITIAL_APPLICATIONS: ApplicationData[] = [
  { ...SAMPLE_JOBS[0], status: EApplicationStatus.APPLIED },
  { ...SAMPLE_JOBS[1], status: EApplicationStatus.APPLIED },
  { ...SAMPLE_JOBS[2], status: EApplicationStatus.TEST_TASK },
  { ...SAMPLE_JOBS[3], status: EApplicationStatus.INTERVIEW },
  { ...SAMPLE_JOBS[4], status: EApplicationStatus.INTERVIEW },
  { ...SAMPLE_JOBS[5], status: EApplicationStatus.INTERVIEW },
  { ...SAMPLE_JOBS[6], status: EApplicationStatus.REJECTED },
  { ...SAMPLE_JOBS[7], status: EApplicationStatus.REJECTED },
];

const Progress: React.FC = () => {
  const [applications, setApplications] =
    useState<ApplicationData[]>(INITIAL_APPLICATIONS);
  const [activeApplication, setActiveApplication] = useState<ApplicationData | null>(
    null,
  );

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
  );

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    const application = applications.find((application) => application.id === active.id);
    setActiveApplication(application || null);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    setActiveApplication(null);

    if (!over) return;

    const applicationId = active.id as string;
    const newStatus = over.id as EApplicationStatus;

    setApplications(() =>
      applications.map((application) =>
        application.id === applicationId
          ? {
              ...application,
              status: newStatus,
            }
          : application,
      ),
    );
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Application Progress</h1>

      <div className={classes.board}>
        <DndContext
          sensors={sensors}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          {COLUMNS.map((column) => (
            <Column
              key={column.id}
              column={column}
              applications={applications.filter(
                (application) => application.status === column.id,
              )}
            />
          ))}
          <DragOverlay>
            {activeApplication ? (
              <ApplicationCard application={activeApplication} isOverlay />
            ) : null}
          </DragOverlay>
        </DndContext>
      </div>
    </div>
  );
};

export default Progress;
