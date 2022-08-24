/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/display-name */
import React from "react";
import { fetchUrl } from "src/api";

export const withApiCalls = (WrappedComponent: any) => (props: any) => {
  return <WrappedComponent {...props} fetchUrl={fetchUrl} />;
};
