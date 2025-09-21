class DepartmentController {
    constructor(createDepartmentUseCase) {
        this.createDepartmentUseCase = createDepartmentUseCase;
    }

    create = async (req, res) => {
        try {
            const department = await this.createDepartmentUseCase.execute(req.body);
            res.status(201).json(department.toJson());

        } catch (err) {
            console.error(err);
            res.status(400).json({ error: err.message });
        }
    }
}

module.exports = DepartmentController;
