import { render, screen } from "@testing-library/react";
import App from "../App";

import { UserContext } from "../UserProvider";

function renderWithProvider(users) {
	return render(
		<UserContext.Provider value={users}>
			<App />
		</UserContext.Provider>
	);
}

test("Should display the name of the user on the card", () => {
	const users = [];
	renderWithProvider(users);
	expect(screen.queryByTestId("user-profile-name")).toBeTruthy();
});
