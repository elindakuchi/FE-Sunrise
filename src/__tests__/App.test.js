import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../App';
import { UserContext } from '../UserProvider';
import { data as users } from '../data';

const { getByTestId } = screen;

describe('App', () => {
  it('Should display App', async () => {
    render(
      <Router>
        <App />
      </Router>
    );
    expect(getByTestId('app')).toBeInTheDocument();
  });

  it('should display list of users when there are users', async () => {
    render(
      <UserContext.Provider value={users}>
        <Router>
          <App />
        </Router>
      </UserContext.Provider>
    );
    const userList = await screen.findAllByTestId('user-card');
    expect(userList.length).toBeGreaterThan(0);
    await userList;
  });

  it('should display Soria as a user', async () => {
    render(
      <UserContext.Provider value={users}>
        <Router>
          <App />
        </Router>
      </UserContext.Provider>
    );
    const soriaCard = await screen.queryByText(users[0].name);
    expect(soriaCard.length).toBeGreaterThan(0);
    await soriaCard;
  });
});
