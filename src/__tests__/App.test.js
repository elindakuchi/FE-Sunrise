import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "../App";

const { getByTestId, queryAllByTestId, getByText } = screen;

describe("App", () => {
	it("Should display App", () => {
		render(
			<Router>
				<App />
			</Router>
		);
		expect(getByTestId("app")).toBeInTheDocument();
		const userList = queryAllByTestId("user-card");
		expect(userList).toHaveLength(6);
		expect(getByText("Soria")).toBeInTheDocument();
	});
});
