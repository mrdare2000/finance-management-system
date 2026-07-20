import api from './api';

export const transactionService = {
  getAll: (filters = {}) => api.get('/transactions', { params: filters }),
  getById: (id) => api.get(`/transactions/${id}`),
  create: (transactionData) => api.post('/transactions', transactionData),
  update: (id, transactionData) => api.put(`/transactions/${id}`, transactionData),
  delete: (id) => api.delete(`/transactions/${id}`),
  getCategories: () => api.get('/categories')
};

export default transactionService;
