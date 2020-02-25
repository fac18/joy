import React from "react";
import { render } from "@testing-library/react";
import WellbeingAssessmentModal from "./WellbeingAssessmentModal";
import WellbeingAssessment from "./WellbeingAssessment";

test("renders the wellbeing assessment page component", () => {
  render(<WellbeingAssessment />);
});

test("renders the home wellbeing assessment modal", () => {
  render(<WellbeingAssessmentModal />);
});

