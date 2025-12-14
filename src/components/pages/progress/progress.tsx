"use client";

import React, { useState, useEffect } from "react";
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
import ApplicationCard from "./application-card";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  fetchApplications,
  updateApplicationStatus,
} from "@/store/slices/applicationsSlice";
import {
  selectApplicationsWithJobData,
  selectApplicationsLoading,
} from "@/store/selectors/applicationsSelectors";
import { EApplicationStatus } from "@/types/application.types";
import { LoadingSpinner } from "@/components/general/loading-spinner";
import { JobData } from "@/components/general/job-card";

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

const Progress: React.FC = () => {
  const dispatch = useAppDispatch();
  const applicationsWithJobs = useAppSelector(selectApplicationsWithJobData);
  const isLoading = useAppSelector(selectApplicationsLoading);
  const [activeApplication, setActiveApplication] = useState<ApplicationData | null>(
    null,
  );

  useEffect(() => {
    dispatch(fetchApplications());
  }, [dispatch]);

  const applications: ApplicationData[] = applicationsWithJobs
    .filter((app) => app.job)
    .map((app) => ({
      ...app.job!,
      status: app.status,
    }));

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

  const handleDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event;

    setActiveApplication(null);

    if (!over) return;

    const applicationId = active.id as string;
    const newStatus = over.id as EApplicationStatus;

    const application = applicationsWithJobs.find((app) => app.job?.id === applicationId);
    const previousStatus = application?.status;

    if (!previousStatus || previousStatus === newStatus) return;

    await dispatch(
      updateApplicationStatus({
        applicationId: application.id,
        newStatus,
        previousStatus,
      }),
    );
  };

  if (isLoading) {
    return <LoadingSpinner fullScreen message="Loading applications..." />;
  }

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
