import React from "react";
import { render } from "@testing-library/react";
import LoadingPage from "./LoadingPage";

test("renders the loading page component", () => {
  render(<LoadingPage />);
});