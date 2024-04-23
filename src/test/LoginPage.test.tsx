import axios from 'axios';
import LoginPage from '../pages/LoginPage';
import { render, fireEvent, waitFor } from '@testing-library/react';

// Create a mock of axios
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('LoginPage', () => {
  it('renders without crashing', () => {
    render(<LoginPage />);
  });

  it('handles login', async () => {
    const { getByPlaceholderText, getByText } = render(<LoginPage />);

    // Use mockResolvedValue on the mocked axios
    mockedAxios.post.mockResolvedValue({ data: {} });

    fireEvent.change(getByPlaceholderText('Email'), { target: { value: 'test@example.com' } });
    fireEvent.change(getByPlaceholderText('Password'), { target: { value: 'password' } });
    fireEvent.click(getByText('Login'));

    await waitFor(() => expect(mockedAxios.post).toHaveBeenCalledTimes(1));
    expect(mockedAxios.post).toHaveBeenCalledWith('http://backend-test-app-env.eba-kgsm3q4m.us-west-1.elasticbeanstalk.com/api/users/login', { email: 'test@example.com', password: 'password' });
  });
});