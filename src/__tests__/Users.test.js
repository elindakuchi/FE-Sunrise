import { render, screen } from "@testing-library/react";
import App from "../App";

function renderWithProvider(users) {
	return render(<App />);
}

test.skip("Should display - No users to display when users is empty array", () => {
	const users = [];
	renderWithProvider(users);
	expect(screen.queryByText("No users to display")).toBeVisible();
});

test("Should display the list of users when there are users to display", () => {
	const users = [];
	renderWithProvider(users);
	expect(screen.queryAllByTestId("userCard").length).toBeGreaterThan(0);
});

//see name
test("Should display the name of the user on the card", () => {
	const users = [];
	renderWithProvider(users);
	expect(screen.queryAllByTestId("user-name").length).toBeGreaterThan(0);
});

//see role
test("Should display the role of the user on the card", () => {
	const users = [];
	renderWithProvider(users);
	expect(screen.queryAllByTestId("user-role").length).toBeGreaterThan(0);
});
//see team
test("Should display the team of the user on the card", () => {
	const users = [];
	renderWithProvider(users);
	expect(screen.queryAllByTestId("user-team").length).toBeGreaterThan(0);
});
