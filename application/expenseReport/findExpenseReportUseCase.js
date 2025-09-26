class FindExpenseReport {
    constructor(expenseReportRepository) {
        this.expenseReportRepository = expenseReportRepository;
    }

    async execute(key, queries) {
        const mapRepositories = {
            findByUserId: this.expenseReportRepository.findByUserId
        }

        return await mapRepositories[key](queries);
    }
}

module.exports = FindExpenseReport;
