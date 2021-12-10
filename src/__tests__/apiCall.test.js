import axios from 'axios';
import { getUsers } from '../apiCall';
import {data} from '../data'

jest.mock('axios');

describe('getUsers', () => {
  it('fetches successfully data from an API', async () => {

    axios.get.mockImplementationOnce(() => Promise.resolve(data));

    await expect(getUsers()).resolves.toEqual(data);
  });

  it('fetches erroneously data from an API', async () => {
    const errorMessage = 'Network Error';

    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage)),
    );

    await expect(getUsers()).rejects.toThrow(errorMessage);
  });
});