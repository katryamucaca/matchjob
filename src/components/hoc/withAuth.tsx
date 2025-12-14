"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import { LoadingSpinner } from "@/components/general/loading-spinner";

interface WithAuthOptions {
  redirectTo?: string;
}

export const withAuth = <P extends object>(
  Component: React.ComponentType<P>,
  options?: WithAuthOptions,
) => {
  const ProtectedComponent: React.FC<P> = (props) => {
    const { isAuthenticated, isLoading } = useAuth();
    const router = useRouter();
    const redirectPath = options?.redirectTo || "/auth/signin";

    useEffect(() => {
      if (!isLoading && !isAuthenticated) {
        router.push(redirectPath);
      }
    }, [isAuthenticated, isLoading, router, redirectPath]);

    if (isLoading) {
      return <LoadingSpinner fullScreen message="Loading..." />;
    }

    if (!isAuthenticated) {
      return null;
    }

    return <Component {...props} />;
  };

  ProtectedComponent.displayName = `withAuth(${Component.displayName || Component.name || "Component"})`;

  return ProtectedComponent;
};
