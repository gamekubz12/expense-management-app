class ExpenseController {
    constructor(createExpenseUseCase) {
        this.createExpenseUseCase = createExpenseUseCase;
    }

    create = async (req, res) => {
        try {
            const expense = await this.createExpenseUseCase.execute({
                ...req.body,
                receipt_file: req.file
            })
            res.status(201).json(expense);

        } catch (err) {
            console.error(err);
            res.status(400).json({ error: err.message });
        }
    }
}

module.exports = ExpenseController;
