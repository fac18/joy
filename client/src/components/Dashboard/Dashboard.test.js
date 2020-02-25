import React from "react";
import { render } from "@testing-library/react";
import Dashboard from "./Dashboard";

test("renders the home landing page component", () => {
  render(<Dashboard />);
});
