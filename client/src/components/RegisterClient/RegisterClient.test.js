import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render } from "@testing-library/react";
import RegisterClient from "./RegisterClient";
test("register client button is on the page", () => {
  const history = createMemoryHistory();
  const { debug, getByText } = render(
    <Router history={history}>
      <RegisterClient />
    </Router>
  );
});
