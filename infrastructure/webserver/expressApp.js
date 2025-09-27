const express = require('express');
const morgan = require('morgan');

module.exports = (
    userRoutes,
    departmentRoutes,
    expenseReportRoutes,
    expenseRoutes
) => {
    const app = express();
    app.use(express.json({ limit: '10mb' })); // for JSON body

    app.use(morgan('dev'));
    app.use(express.json());
    app.use('/users', userRoutes);
    app.use('/departments', departmentRoutes);
    app.use('/expense_reports', expenseReportRoutes);
    app.use('/expenses', expenseRoutes);

    return app;
}
