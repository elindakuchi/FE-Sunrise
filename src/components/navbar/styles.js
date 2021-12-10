import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
	palette: {
		primary: {
			main: "#AD0F5B",
		},
	},
});

// Nav layout
export const displayLayout = {
	width: "100vw",
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
};

// Search bar styling
export const SearchInput = styled(InputBase)(({ theme }) => ({
	color: "inherit",
	"& .MuiInputBase-input": {
		padding: theme.spacing(1, 1, 1, 0),
		paddingLeft: `calc(1em + ${theme.spacing(1)})`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			width: "26ch",
			"&:focus": {
				width: "34ch",
			},
		},
	},
}));

export const SearchInputLayout = styled("div")(({ theme }) => ({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	borderRadius: "5px",
	paddingRight: "1rem",

	backgroundColor: alpha(theme.palette.common.white, 0.15),
	"&:hover": {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
}));

// Back button styling
export const backButtonLayout = {
	textDecoration: "none",
	decoration: "none",
	color: "#F2F2F2",
};
