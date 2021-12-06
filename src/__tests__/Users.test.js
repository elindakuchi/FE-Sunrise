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
