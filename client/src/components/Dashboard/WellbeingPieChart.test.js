import React from "react";
import { render } from "@testing-library/react";
import WellBeingPieChart from "./WellBeingPieChart";

test("renders the home wellbeing assessment component", () => {
  render(<WellBeingPieChart />);
});