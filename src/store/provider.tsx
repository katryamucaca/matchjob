"use client";

import React, { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "./index";
import { useSaveState } from "@/hooks/useSaveState";

interface Props {
  children: React.ReactNode;
}

const StateSaver: React.FC = () => {
  useSaveState();

  return null;
};

const StoreProvider: React.FC<Props> = ({ children }) => {
  const storeRef = useRef<AppStore>();

  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return (
    <Provider store={storeRef.current}>
      <StateSaver />
      {children}
    </Provider>
  );
};

export default StoreProvider;
