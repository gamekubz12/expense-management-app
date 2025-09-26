class CreateDepartment {
    constructor(departmentRepository) {
        this.departmentRepository = departmentRepository;
    }

    async execute(departmentData) {
        const result = await this.departmentRepository.create(departmentData);

        return result?.toJson();
    }
}

module.exports = CreateDepartment;
