import React from "react";
import { render } from "@testing-library/react";
import SearchClient from "./SearchClient";
import { filterClients } from '../../utils/filterClients';

test("renders the client search page component", () => {
  render(<SearchClient />);
});