import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Users from  '.././components/users/Users'
import { data } from "../data";
import { UserContext } from "../UserProvider";

const {queryAllByTestId, getByTestId} = screen

describe('Users', () => {
	it('Should show the list of user with data', () => {
		render(
				<Router>
					<UserContext.Provider value={[data]}>
						<Users/>
					</UserContext.Provider>
				</Router>
			)
		const userList = queryAllByTestId("user-card")
		expect(userList).toHaveLength(6)
	})
	it('Should show correctly without data', () => {
		render(
			<Router>
				<UserContext.Provider value={[[]]}>
					<Users/>
				</UserContext.Provider>
			</Router>
		)
		expect(getByTestId('no-data')).toBeInTheDocument()
	})
})
