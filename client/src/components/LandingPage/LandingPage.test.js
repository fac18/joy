import React from "react";
import { render } from "@testing-library/react";
import LandingPage from "./LandingPage";

test("renders the home landing page component", () => {
  render(<LandingPage />);
});
