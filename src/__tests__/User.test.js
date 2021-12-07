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
