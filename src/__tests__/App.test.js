import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "../App";

const { getByTestId, findAllByTestId } = screen;

describe("App", () => {
	it("Should display App", async() => {
		render(
			<Router>
				<App />
			</Router>
		);
		expect(getByTestId("app")).toBeInTheDocument();
		const userList = await findAllByTestId("user-card");
		expect(userList).toHaveLength(10);
	});
});
