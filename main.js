// departments
const DepartmentRepository = require('./infrastructure/database/departmentRepository');
const CreateDepartmentUseCase = require('./application/department/createDepartmentUseCase');
const DepartmentController = require('./interface/departmentController');

// users
const UserRepository = require('./infrastructure/database/userRepository');
const CreateUserUseCase = require('./application/user/createUserUseCase');
const UserController = require('./interface/userController');

// routes
const userRoutes = require('./infrastructure/webserver/routes/userRoutes');
const departmentRoutes = require('./infrastructure/webserver/routes/departmentRoutes');
const createExpressApp = require('./infrastructure/webserver/expressApp');

require('dotenv').config();

const main = async () => {
    // departments
    const departmentRepository = new DepartmentRepository();
    const createDepartment = new CreateDepartmentUseCase(departmentRepository);
    const departmentController = new DepartmentController(createDepartment);

    // users
    const userRepository = new UserRepository();
    const createUser = new CreateUserUseCase(userRepository);
    const userController = new UserController(createUser);

    const app = createExpressApp(
        userRoutes(userController),
        departmentRoutes(departmentController),
    );
    app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
}

main();
