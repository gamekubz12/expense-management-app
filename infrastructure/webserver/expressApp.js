const express = require('express');
const morgan = require('morgan');

module.exports = (userRoutes, departmentRoutes, expenseReportRoutes) => {
    const app = express();

    app.use(morgan('dev'));
    app.use(express.json());
    app.use('/users', userRoutes);
    app.use('/departments', departmentRoutes);
    app.use('/expense_reports', expenseReportRoutes);

    return app;
}
