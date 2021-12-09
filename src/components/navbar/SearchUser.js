import React from "react";
import { SearchInput } from "./styles";
import SearchIcon from "@mui/icons-material/Search";
import { SearchInputLayout } from "./styles";
import Brightness5Icon from "@mui/icons-material/Brightness5";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { backButtonLayout } from "./styles";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { displayLayout } from "./styles";

const SeachUser = () => {
	const location = useLocation();
	const navigate = useNavigate();

	const searchString = (searchItem) => {
		if (searchItem) return `?searchTerm=`;
		else return ``;
	};

	if (location.pathname === "/" || location.pathname.includes("?searchTerm="))
		return (
			<div style={displayLayout}>
				<Brightness5Icon />
				<SearchInputLayout>
					<SearchInput
						placeholder="Search by name, title or team"
						inputProps={{ "aria-label": "search", "data-testid": "do-search" }}
						onChange={({ target }) =>
							navigate(`${searchString(target.value)}${target.value}`)
						}
					/>
					<SearchIcon />
				</SearchInputLayout>
			</div>
		);
	else
		return (
			<Link to="/" style={backButtonLayout} data-testid="do-route">
				<ArrowBackIcon />
			</Link>
		);
};

export default SeachUser;
