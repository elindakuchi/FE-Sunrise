import axios from 'axios';
import { getUsers, apiUrl } from '../apiCall';
import {data} from '../data'

jest.mock('axios');

describe('getUsers', () => {
  it('fetches successfully data from an API', async () => {

    axios.get.mockImplementation((url) => {
        if (url === apiUrl) {
            const aaa = {data: data}
            return Promise.resolve(aaa);
        } 
    });
    await expect(await getUsers()).toEqual(data);
  });

  it('fetches erroneously data from an API', async () => {
    const errorMessage = 'Network Error aaaa';

    axios.get.mockImplementationOnce(() =>
      Promise.reject({errorMessage}),
    );

    await expect(await getUsers()).toEqual({errorMessage})
  });
});