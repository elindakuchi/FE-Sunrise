import { render, screen } from "@testing-library/react";
import User from "../components/users/User";
import { data } from "../data";

import { UserContext } from "../UserProvider";

describe("Should display user", () => {
	it("Should display bio", async () => {
		render(
			<UserContext.Provider value={data}>
				<User />
			</UserContext.Provider>
		);
		expect(await screen.findByTestId("user-profile-name")).toBeInDocument();
	});
});
