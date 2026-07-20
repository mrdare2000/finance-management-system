import api from './api';

export const authService = {
  register: (userData) => api.post('/auth/register', userData),
  login: (email, password) => api.post('/auth/login', { email, password }),
  getProfile: () => api.get('/users/profile'),
  updateProfile: (userData) => api.put('/users/profile', userData),
  logout: () => {
    localStorage.removeItem(process.env.REACT_APP_JWT_TOKEN_KEY || 'finance_app_token');
  }
};

export default authService;
