import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../App';
import { data as users } from '../data';
import * as apiCalls from '../apiCall';
import { act } from 'react-dom/test-utils';

const { getByTestId } = screen;

describe('App', () => {
  beforeEach(async () => {
    const mockGetUsers = jest.spyOn(apiCalls, 'getUsers');
    mockGetUsers.mockResolvedValueOnce(users);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

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
      <Router>
        <App />
      </Router>
    );
    const userList = await screen.findAllByTestId('user-card');
    expect(userList.length).toBe(users.length);
  });

  it('should display users name', async () => {
    render(
      <Router>
        <App />
      </Router>
    );
    const text = await screen.findByText('Nidhi');
    expect(text).toBeVisible();
  });
});
