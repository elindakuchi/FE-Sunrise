import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

describe('Navbar', () => {
    it('should render correctly', () => {
        render(
            <Router>
                <Navbar/>
            </Router>
        )
        expect(screen.getByTestId('navbar')).toBeInTheDocument()
    })
})