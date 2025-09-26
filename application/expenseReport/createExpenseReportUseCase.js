class CreateExpenseReport {
    constructor(expenseReportRepository) {
        this.expenseReportRepository = expenseReportRepository;
    }

    async execute(expenseReportData) {
        const result = await this.expenseReportRepository.create(expenseReportData);

        return result?.toJson();
    }
}

module.exports = CreateExpenseReport;
