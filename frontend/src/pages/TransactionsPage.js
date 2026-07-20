import React, { useEffect, useState } from 'react';
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Box,
  Typography,
  Dialog,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel
} from '@mui/material';
import api from '../services/api';
import moment from 'moment';

const TransactionsPage = () => {
  const [transactions, setTransactions] = useState([]);
  const [categories, setCategories] = useState({});
  const [loading, setLoading] = useState(true);
  const [openDialog, setOpenDialog] = useState(false);
  const [newTransaction, setNewTransaction] = useState({
    accountId: '',
    type: 'expense',
    category: '',
    description: '',
    amount: '',
    paymentMethod: 'card'
  });

  useEffect(() => {
    fetchTransactions();
    fetchCategories();
  }, []);

  const fetchTransactions = async () => {
    try {
      const response = await api.get('/transactions');
      setTransactions(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching transactions:', error);
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await api.get('/categories');
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleAddTransaction = async () => {
    try {
      await api.post('/transactions', newTransaction);
      setOpenDialog(false);
      setNewTransaction({
        accountId: '',
        type: 'expense',
        category: '',
        description: '',
        amount: '',
        paymentMethod: 'card'
      });
      fetchTransactions();
    } catch (error) {
      console.error('Error creating transaction:', error);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography component="h1" variant="h4">
          Transactions
        </Typography>
        <Button variant="contained" color="primary" onClick={() => setOpenDialog(true)}>
          Add Transaction
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
              <TableCell>Date</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Type</TableCell>
              <TableCell align="right">Amount</TableCell>
              <TableCell>Payment Method</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell>{moment(transaction.date).format('MMM DD, YYYY')}</TableCell>
                <TableCell>{transaction.category}</TableCell>
                <TableCell>{transaction.description}</TableCell>
                <TableCell>
                  <Typography
                    sx={{
                      color: transaction.type === 'income' ? '#4caf50' : '#f44336',
                      fontWeight: 'bold'
                    }}
                  >
                    {transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1)}
                  </Typography>
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: 'bold' }}>
                  {transaction.type === 'income' ? '+' : '-'}${transaction.amount}
                </TableCell>
                <TableCell>{transaction.paymentMethod}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Add Transaction Dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="sm" fullWidth>
        <Box sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Add New Transaction
          </Typography>

          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Type</InputLabel>
            <Select
              value={newTransaction.type}
              onChange={(e) => setNewTransaction({ ...newTransaction, type: e.target.value })}
            >
              <MenuItem value="income">Income</MenuItem>
              <MenuItem value="expense">Expense</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Category</InputLabel>
            <Select
              value={newTransaction.category}
              onChange={(e) => setNewTransaction({ ...newTransaction, category: e.target.value })}
            >
              {(newTransaction.type === 'income' ? categories.income : categories.expense || []).map(
                (cat) => (
                  <MenuItem key={cat} value={cat}>
                    {cat}
                  </MenuItem>
                )
              )}
            </Select>
          </FormControl>

          <TextField
            fullWidth
            label="Description"
            value={newTransaction.description}
            onChange={(e) => setNewTransaction({ ...newTransaction, description: e.target.value })}
            margin="normal"
          />

          <TextField
            fullWidth
            label="Amount"
            type="number"
            value={newTransaction.amount}
            onChange={(e) => setNewTransaction({ ...newTransaction, amount: e.target.value })}
            margin="normal"
          />

          <FormControl fullWidth sx={{ mb: 2, mt: 2 }}>
            <InputLabel>Payment Method</InputLabel>
            <Select
              value={newTransaction.paymentMethod}
              onChange={(e) =>
                setNewTransaction({ ...newTransaction, paymentMethod: e.target.value })
              }
            >
              <MenuItem value="cash">Cash</MenuItem>
              <MenuItem value="card">Card</MenuItem>
              <MenuItem value="bank_transfer">Bank Transfer</MenuItem>
              <MenuItem value="digital_wallet">Digital Wallet</MenuItem>
            </Select>
          </FormControl>

          <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
            <Button variant="contained" color="primary" onClick={handleAddTransaction} fullWidth>
              Save
            </Button>
            <Button variant="outlined" onClick={() => setOpenDialog(false)} fullWidth>
              Cancel
            </Button>
          </Box>
        </Box>
      </Dialog>
    </Container>
  );
};

export default TransactionsPage;
