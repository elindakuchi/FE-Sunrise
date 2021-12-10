import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { MemoryRouter } from 'react-router-dom';
import Users from ".././components/users/Users";
import { data } from "../data";
import { UserContext } from "../UserProvider";

const { queryAllByTestId, getByTestId, findAllByTestId } = screen;

describe("Users", () => {
	it("Should render with search searchTerm", () => {
		render(
			<MemoryRouter initialEntries={[{ pathname: '/', search: '?searchTerm=soria' }]}>
				<UserContext.Provider value={[data]}>
					<Users />
				</UserContext.Provider>
			</MemoryRouter>
		);
		const userList = queryAllByTestId("user-card");
		expect(userList).toHaveLength(1);
	});

	it("Should show correctly without data", () => {
		render(
			<Router>
				<UserContext.Provider value={[[]]}>
					<Users />
				</UserContext.Provider>
			</Router>
		);
		expect(getByTestId("no-data")).toBeInTheDocument();
	});

	it("Should show the list of users with data", async() => {
		render(
			<MemoryRouter initialEntries={[{ pathname: '/', search: '?searchTerm=' }]}>
				<UserContext.Provider value={[data]}>
					<Users />
				</UserContext.Provider>
			</MemoryRouter>
		);
		const userList = await findAllByTestId("user-card");
		expect(userList).toHaveLength(6);
	});
});
