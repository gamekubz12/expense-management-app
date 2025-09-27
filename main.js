// departments
const DepartmentRepository = require('./infrastructure/database/departmentRepository');
const CreateDepartmentUseCase = require('./application/department/createDepartmentUseCase');
const FindDepartmentUseCase = require('./application/department/findDepartmentUseCase');
const DepartmentController = require('./interface/departmentController');

// users
const UserRepository = require('./infrastructure/database/userRepository');
const CreateUserUseCase = require('./application/user/createUserUseCase');
const UserController = require('./interface/userController');

// expense reports
const ExpenseReportRepository = require('./infrastructure/database/expenseReportRepository');
const CreateExpenseReportUseCase = require('./application/expenseReport/createExpenseReportUseCase');
const FindExpenseReportUseCase = require('./application/expenseReport/findExpenseReportUseCase');
const ExpenseReportController = require('./interface/expenseReportController');

// expense
const ExpenseRepository = require('./infrastructure/database/expenseRepository');
const CreateExpenseUseCase = require('./application/expense/createExpenseUseCase');
const ExpenseController = require('./interface/expenseController');

// routes
const userRoutes = require('./infrastructure/webserver/routes/userRoutes');
const departmentRoutes = require('./infrastructure/webserver/routes/departmentRoutes');
const expenseReportRoutes = require('./infrastructure/webserver/routes/expenseReportRoutes');
const expenseRoutes = require('./infrastructure/webserver/routes/expenseRoutes');

// express
const createExpressApp = require('./infrastructure/webserver/expressApp');

require('dotenv').config();

const main = async () => {
    // departments
    const departmentRepository = new DepartmentRepository();
    const createDepartment = new CreateDepartmentUseCase(departmentRepository);
    const findDepartment = new FindDepartmentUseCase(departmentRepository);
    const departmentController = new DepartmentController(createDepartment, findDepartment);

    // users
    const userRepository = new UserRepository();
    const createUser = new CreateUserUseCase(userRepository);
    const userController = new UserController(createUser);

    // expense reports
    const expenseReportRepository = new ExpenseReportRepository();
    const createExpenseReport = new CreateExpenseReportUseCase(expenseReportRepository);
    const findExpenseReport = new FindExpenseReportUseCase(expenseReportRepository);
    const expenseReportController = new ExpenseReportController(createExpenseReport, findExpenseReport);

    // expenses
    const expenseRepository = new ExpenseRepository();
    const createExpense = new CreateExpenseUseCase(expenseRepository);
    const expenseController = new ExpenseController(createExpense);

    const app = createExpressApp(
        userRoutes(userController),
        departmentRoutes(departmentController),
        expenseReportRoutes(expenseReportController),
        expenseRoutes(expenseController)
    )
    app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
}

main();
