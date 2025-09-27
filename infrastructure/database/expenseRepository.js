const prisma = require('./client');
const Expense = require('../../domain/expense');

class ExpenseRepository {
    async create({
        report_id,
        category,
        amount,
        currency,
        description,
        receipt_url
    }) {
        const result = await prisma.expense.create({
            data: {
                report_id,
                category,
                amount,
                currency,
                description,
                receipt_url
            }
        })

        return new Expense({ ...result });
    }
}

module.exports = ExpenseRepository;
