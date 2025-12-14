"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import { LoadingSpinner } from "@/components/general/loading-spinner";

export const withGuest = <P extends object>(
  Component: React.ComponentType<P>,
  redirectTo: string = "/jobs",
) => {
  const GuestComponent: React.FC<P> = (props) => {
    const { isAuthenticated, isLoading } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!isLoading && isAuthenticated) {
        router.push(redirectTo);
      }
    }, [isAuthenticated, isLoading, router]);

    if (isLoading) {
      return <LoadingSpinner fullScreen message="Loading..." />;
    }

    if (isAuthenticated) {
      return null;
    }

    return <Component {...props} />;
  };

  GuestComponent.displayName = `withGuest(${Component.displayName || Component.name || "Component"})`;

  return GuestComponent;
};
