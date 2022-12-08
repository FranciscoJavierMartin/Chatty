import axios from '@/services/axios';

class AuthService {
  async singUp(body: any) {
    const response = await axios.post('/signup', body);
    return response;
  }

  async singIn(body: any) {
    const response = await axios.post('/signin', body);
    return response;
  }

  async forgotPassword(email: string) {
    const response = await axios.post('/forgot-password', { email });
    return response;
  }

  async resetPassword(token: string) {
    const response = await axios.post(`/reset-password/${token}`);
    return response;
  }
}

export const authService: AuthService = new AuthService();
