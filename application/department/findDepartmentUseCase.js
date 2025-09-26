class FindDepartment {
    constructor(departmentRepository) {
        this.departmentRepository = departmentRepository;
    }

    async execute(key, queries) {
        const mapRepositories = {
            findById: this.departmentRepository.findById
        }
        const result = await mapRepositories[key](queries);

        if (typeof result === Array) {
            return result.map(v => v.toJson());
        }

        return result?.toJson();
    }
}

module.exports = FindDepartment;
