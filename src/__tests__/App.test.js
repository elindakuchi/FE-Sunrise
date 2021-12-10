import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../App';
import { data as users } from '../data';
import * as apiCalls from '../apiCall';

describe('App', () => {
  beforeEach(async () => {
    const mockGetUsers = jest.spyOn(apiCalls, 'getUsers');
    mockGetUsers.mockResolvedValueOnce(users);

    render(
      <Router>
        <App />
      </Router>
    );
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('Should display App', async () => {
    const appContainer = await screen.findByTestId('app');
    expect(appContainer).toBeInTheDocument();
  });

  it('should display list of users when there are users', async () => {
    const userList = await screen.findAllByTestId('user-card');
    expect(userList.length).toBe(users.length);
  });

  it('should display users name', async () => {
    const text = await screen.findByText(users[0].name);
    expect(text).toBeVisible();
  });
});
