"use client";

import React from "react";
import { Provider } from "react-redux";
import { makeStore } from "./index";

interface Props {
  children: React.ReactNode;
}

const store = makeStore();

const StoreProvider: React.FC<Props> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
