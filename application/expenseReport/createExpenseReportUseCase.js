const { DateTimeTH } = require('../../helpers/datetime');

class CreateExpenseReport {
    constructor(expenseReportRepository) {
        this.expenseReportRepository = expenseReportRepository;
    }

    async execute(expenseReportData) {
        const result = await this.expenseReportRepository.create({ ...expenseReportData,
            submitted_at: expenseReportData.status === 'submitted' ? DateTimeTH(): null
        })

        return result?.toJson();
    }
}

module.exports = CreateExpenseReport;
