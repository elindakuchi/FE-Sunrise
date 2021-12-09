import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import SeachUser from "../components/navbar/SearchUser";



describe('SearchUser', () => {

    it('should render back batton', async () => {
        render(
            <MemoryRouter initialEntries={[{ pathname: '/user/1' }]}>
                <SeachUser/>
            </MemoryRouter> 
        )
        expect(screen.getByTestId('do-route')).toBeInTheDocument()
    })

    it('should render search input', () => {
        render(
            <MemoryRouter initialEntries={[{ pathname: '/', search: '?searchTerm=' }]}>
                <SeachUser/>
            </MemoryRouter> 
        )
        const input = screen.getByTestId('do-search')
        expect(input).toBeInTheDocument()
        fireEvent.change(input, {target: {value: 'soria'}})
        expect(input).toHaveValue('soria')
    })
})