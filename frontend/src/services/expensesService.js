import axios from 'axios';

const API_URL = 'http://localhost:5000/api/expenses';

export const fetchExpenses = () => axios.get(API_URL);
export const fetchStats = () => axios.get(`${API_URL}/stats`);
export const addExpense = (expense) => axios.post(API_URL, expense);