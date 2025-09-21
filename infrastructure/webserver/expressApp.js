const express = require('express');
const morgan = require('morgan');

module.exports = (userRoutes, departmentRoutes) => {
    const app = express();

    app.use(morgan('dev'));
    app.use(express.json());
    app.use('/users', userRoutes);
    app.use('/departments', departmentRoutes);

    return app;
}
