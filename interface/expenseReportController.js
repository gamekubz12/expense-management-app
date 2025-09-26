class ExpenseReportController {
    constructor(createExpenseReportUseCase) {
        this.createExpenseReportUseCase = createExpenseReportUseCase;
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
