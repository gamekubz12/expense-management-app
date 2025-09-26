class DepartmentController {
    constructor(createDepartmentUseCase, findDepartmentUseCase) {
        this.createDepartmentUseCase = createDepartmentUseCase;
        this.findDepartmentUseCase = findDepartmentUseCase;
    }

    findById = async (req, res) => {
        try {
            const departmentId = parseInt(req.params.id || 0);
            const department = await this.findDepartmentUseCase.execute('findById', departmentId);
            res.status(200).json(department || null);

        } catch (err) {
            console.error(err);
            res.status(400).json({ error: err.message });
        }
    }

    create = async (req, res) => {
        try {
            const department = await this.createDepartmentUseCase.execute(req.body);
            res.status(201).json(department);

        } catch (err) {
            console.error(err);
            res.status(400).json({ error: err.message });
        }
    }
}

module.exports = DepartmentController;
