import React from "react";
import { render } from "@testing-library/react";
import Dashboard from "./Dashboard";
// import ServicesPopularityChart from "./ServicesPopularityChart";
// import TotalsChart from "./TotalsChart";
// import WellBeingPieChart from "./WellBeingPieChart";

// test("renders the wellbeing chart component", () => {
//   render(<WellBeingPieChart />);
// });

// test("renders the totals chart component", () => {
//   render(<TotalsChart />);
// });

// test("renders the services popularity chart component", () => {
//   render(<ServicesPopularityChart />);
// });

test("renders the dashboard component", () => {
  render(<Dashboard />);
});
