# Expense Tracker

A simple full-stack application for tracking personal expenses.  
Users can add, view, and categorize their expenses, as well as see basic statistics.

## Features

- Add new expenses with name, amount, category, and date
- View all expenses in a table
- See statistics grouped by category
- Sidebar navigation


## Tech Stack

- **Frontend**: React
- **Backend**: Node.js + Express
- **Database**: AWS DynamoDB
- **Other AWS services**: S3 (file storage), SES (email), EventBridge (scheduled Lambda – optional)


## How to Run the Project Locally

### 1. Clone the Repository

```bash
git clone https://github.com/grubor-maja/expense-tracker.git
cd expense-tracker
```

### 2. Backend setup

```bash
cd backend
npm install
```
Create a .env file in the backend/ directory with the following values:

```bash
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=your-access-key
AWS_SECRET_ACCESS_KEY=your-secret-key
```
These credentials are specific to this project and are generated through the IAM user you received access to.

Then start the backend server:
```bash
node server.js
```

### 3. Frontend setup

In a new terminal:
```bash
cd frontend
npm install

```

Then start the frontend server:
```bash
npm run dev
```

