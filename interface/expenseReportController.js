class ExpenseReportController {
    constructor(
        createExpenseReportUseCase,
        findExpenseReportUseCase,
    ) {
        this.createExpenseReportUseCase = createExpenseReportUseCase;
        this.findExpenseReportUseCase = findExpenseReportUseCase;
    }

    findByUserId = async (req, res) => {
        try {
            const expenseReport = await this.findExpenseReportUseCase.execute('findByUserId', req.query);
            res.status(200).json(expenseReport);

        } catch (err) {
            console.error(err);
            res.status(400).json({ error: err.message });
        }
    }

    create = async (req, res) => {
        try {
            const expenseReport = await this.createExpenseReportUseCase.execute(req.body);
            res.status(201).json(expenseReport);

        } catch (err) {
            console.error(err);
            res.status(400).json({ error: err.message });
        }
    }
}

module.exports = ExpenseReportController;
