class FindExpenseReport {
    constructor(expenseReportRepository) {
        this.expenseReportRepository = expenseReportRepository;
    }

    async execute(key, queries) {
        const mapRepositories = {
            findByUserId: this.expenseReportRepository.findByUserId
        }
        const userId = parseInt(queries.user_id);
        const result = await mapRepositories[key](userId);

        return result.map(v => v.toJson());
    }
}

module.exports = FindExpenseReport;
