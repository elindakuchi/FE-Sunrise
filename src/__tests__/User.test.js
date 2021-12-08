import User from "../components/users/User";
import Router from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { data } from "../data";
import { UserContext } from "../UserProvider";

const {getByTestId, getByText} = screen

jest.mock("react-router-dom", () => ({
	...jest.requireActual("react-router-dom"),
	useParams: jest.fn(),
   }));

describe("User", () => {
	it("should render correctly with data", () => {
		jest.spyOn(Router, 'useParams').mockReturnValue({ id: '1' })
		render(
			<UserContext.Provider value={[data]}>
				<User />
			</UserContext.Provider>
		)
		expect(getByTestId("user-profile-card")).toBeInTheDocument()
		expect(getByText('Soria')).toBeInTheDocument()
	});
});
