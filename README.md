# Finance Management System

A comprehensive, professional-grade Finance Management System built with modern technologies for tracking income, expenses, budgets, and financial analytics.

## 🎯 Features

- **Dashboard**: Real-time financial overview and KPIs
- **Income Management**: Track multiple income sources
- **Expense Tracking**: Categorized expense management
- **Budget Planning**: Create and monitor budgets
- **Reports & Analytics**: Generate comprehensive financial reports
- **Account Management**: Multi-account support with reconciliation
- **Recurring Transactions**: Automated recurring income/expenses
- **Financial Goals**: Set and track financial objectives
- **Data Export**: Export reports in PDF, Excel, and CSV formats
- **User Management**: Role-based access control (Admin, User, Analyst)
- **Notifications**: Real-time alerts for budget thresholds
- **Mobile Responsive**: Fully responsive design

## 🛠 Tech Stack

### Backend
- **Runtime**: Node.js (v16+)
- **Framework**: Express.js
- **Database**: PostgreSQL with Sequelize ORM
- **Authentication**: JWT + OAuth2
- **API Documentation**: Swagger/OpenAPI
- **Validation**: Joi
- **Logging**: Winston
- **Testing**: Jest + Supertest

### Frontend
- **Framework**: React.js (v18+)
- **State Management**: Redux Toolkit
- **UI Components**: Material-UI (MUI)
- **Charts**: Chart.js / Recharts
- **Forms**: Formik + Yup
- **HTTP Client**: Axios
- **Testing**: Jest + React Testing Library

### DevOps & Deployment
- **Containerization**: Docker
- **Orchestration**: Docker Compose
- **CI/CD**: GitHub Actions (optional)
- **Environment Management**: dotenv

## 📁 Project Structure

```
finance-management-system/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── authController.js
│   │   │   ├── userController.js
│   │   │   ├── accountController.js
│   │   │   ├── transactionController.js
│   │   │   ├── budgetController.js
│   │   │   ├── reportController.js
│   │   │   └── dashboardController.js
│   │   ├── models/
│   │   │   ├── User.js
│   │   │   ├── Account.js
│   │   │   ├── Transaction.js
│   │   │   ├── Category.js
│   │   │   ├── Budget.js
│   │   │   └── Goal.js
│   │   ├── routes/
│   │   │   ├── auth.js
│   │   │   ├── users.js
│   │   │   ├── accounts.js
│   │   │   ├── transactions.js
│   │   │   ├── budgets.js
│   │   │   ├── reports.js
│   │   │   └── dashboard.js
│   │   ├── middleware/
│   │   │   ├── auth.js
│   │   │   ├── errorHandler.js
│   │   │   └── validation.js
│   │   ├── services/
│   │   │   ├── authService.js
│   │   │   ├── transactionService.js
│   │   │   ├── budgetService.js
│   │   │   └── reportService.js
│   │   ├── utils/
│   │   │   ├── constants.js
│   │   │   ├── helpers.js
│   │   │   └── validators.js
│   │   ├── config/
│   │   │   ├── database.js
│   │   │   └── mail.js
│   │   ├── migrations/
│   │   └── seeders/
│   ├── tests/
│   │   ├── unit/
│   │   └── integration/
│   ├── .env.example
│   ├── .gitignore
│   ├── Dockerfile
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Auth/
│   │   │   ├── Dashboard/
│   │   │   ├── Accounts/
│   │   │   ├── Transactions/
│   │   │   ├── Budgets/
│   │   │   ├── Reports/
│   │   │   ├── Navigation/
│   │   │   └── Common/
│   │   ├── pages/
│   │   │   ├── LoginPage.js
│   │   │   ├── DashboardPage.js
│   │   │   ├── AccountsPage.js
│   │   │   ├── TransactionsPage.js
│   │   │   ├── BudgetsPage.js
│   │   │   ├── ReportsPage.js
│   │   │   └── GoalsPage.js
│   │   ├── store/
│   │   │   ├── slices/
│   │   │   │   ├── authSlice.js
│   │   │   │   ├── transactionSlice.js
│   │   │   │   ├── accountSlice.js
│   │   │   │   └── budgetSlice.js
│   │   │   └── index.js
│   │   ├── services/
│   │   │   ├── api.js
│   │   │   ├── authService.js
│   │   │   └── transactionService.js
│   │   ├── hooks/
│   │   ├── utils/
│   │   ├── styles/
│   │   ├── App.js
│   │   └── index.js
│   ├── tests/
│   ├── .env.example
│   ├── .gitignore
│   ├── Dockerfile
│   ├── package.json
│   └── public/index.html
├── docker-compose.yml
├── .gitignore
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js v16 or higher
- PostgreSQL v12 or higher
- npm or yarn
- Docker & Docker Compose (optional)

### Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Configure database credentials in .env
# Run database migrations
npm run migrate

# Seed initial data (optional)
npm run seed

# Start the server
npm start
```

Server runs on `http://localhost:5000`

### Frontend Setup

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Start development server
npm start
```

Application runs on `http://localhost:3000`

### Using Docker Compose

```bash
# Build and start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

## 📚 API Documentation

Once the backend is running, access the Swagger API documentation at:
```
http://localhost:5000/api-docs
```

### Key API Endpoints

#### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/refresh` - Refresh token
- `POST /api/auth/logout` - Logout user

#### Accounts
- `GET /api/accounts` - List all accounts
- `POST /api/accounts` - Create new account
- `GET /api/accounts/:id` - Get account details
- `PUT /api/accounts/:id` - Update account
- `DELETE /api/accounts/:id` - Delete account

#### Transactions
- `GET /api/transactions` - List transactions (with filters)
- `POST /api/transactions` - Create transaction
- `GET /api/transactions/:id` - Get transaction details
- `PUT /api/transactions/:id` - Update transaction
- `DELETE /api/transactions/:id` - Delete transaction

#### Budgets
- `GET /api/budgets` - List budgets
- `POST /api/budgets` - Create budget
- `GET /api/budgets/:id` - Get budget details
- `PUT /api/budgets/:id` - Update budget

#### Reports
- `GET /api/reports/summary` - Financial summary
- `GET /api/reports/expense-breakdown` - Expense analysis
- `GET /api/reports/income-breakdown` - Income analysis
- `GET /api/reports/export/:format` - Export report (pdf, excel, csv)

#### Dashboard
- `GET /api/dashboard/overview` - Dashboard overview
- `GET /api/dashboard/charts` - Chart data

## 🔒 Authentication & Security

- JWT-based authentication
- Password hashing with bcrypt
- CORS protection
- Rate limiting on API endpoints
- SQL injection prevention via ORM
- Input validation and sanitization
- HTTPS ready (production)

## 📊 Database Schema Highlights

### Core Tables
- **users** - User accounts and profiles
- **accounts** - Bank/financial accounts
- **transactions** - Income and expense records
- **categories** - Transaction categories
- **budgets** - Budget allocations and tracking
- **goals** - Financial goals
- **budget_transactions** - Budget vs actual tracking
- **recurring_transactions** - Automated transactions

## 🧪 Testing

### Backend Tests
```bash
cd backend
npm test                    # Run all tests
npm run test:unit         # Unit tests only
npm run test:integration  # Integration tests only
npm run test:coverage     # Coverage report
```

### Frontend Tests
```bash
cd frontend
npm test                  # Run all tests
npm run test:coverage    # Coverage report
```

## 🔄 Available Scripts

### Backend
```bash
npm start              # Start server
npm run dev            # Start with nodemon
npm test               # Run tests
npm run migrate        # Run migrations
npm run seed           # Seed database
npm run lint           # Run ESLint
```

### Frontend
```bash
npm start              # Start dev server
npm run build          # Production build
npm test               # Run tests
npm run lint           # Run ESLint
npm run eject          # Eject from CRA
```

## 🌍 Environment Variables

### Backend (.env)
```
# Server
NODE_ENV=development
PORT=5000

# Database
DB_HOST=localhost
DB_PORT=5432
DB_NAME=finance_db
DB_USER=postgres
DB_PASSWORD=your_password

# JWT
JWT_SECRET=your_jwt_secret
JWT_EXPIRE=7d

# Email (for notifications)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email
SMTP_PASSWORD=your_password
```

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_JWT_TOKEN_KEY=auth_token
```

## 📈 Roadmap

- [ ] Multi-currency support
- [ ] Investment tracking
- [ ] Advanced analytics and forecasting
- [ ] Mobile app (React Native)
- [ ] API rate limiting improvements
- [ ] Scheduled reports via email
- [ ] Bank integration (Plaid)
- [ ] Two-factor authentication
- [ ] Team collaboration features
- [ ] Audit logging

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Style
- Follow ESLint configuration
- Use meaningful variable names
- Add comments for complex logic
- Write tests for new features

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 💬 Support & Contact

For support, email: support@financemanagementsystem.com
Or open an issue on GitHub.

## 👨‍💻 Authors

- **mrdare2000** - Initial work and maintenance

---

**Built with ❤️ for better financial management**
