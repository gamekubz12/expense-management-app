const prisma = require('./client');
const ExpenseReport = require('../../domain/expenseReport');

class ExpenseReportReposity {
    async findByUserId(user_id) {
        const result = await prisma.expenseReport.findMany({
            where: { user_id },
            include: { user: true }
        })

        if (!result) return [];

        return result.map(v => new ExpenseReport({ ...v }))
    }

    async create({
        user_id,
        title,
        description,
        status,
        reviewed_by,
        submitted_at
    }) {
        const result = await prisma.expenseReport.create({
            data: {
                user_id,
                title,
                description,
                status,
                reviewed_by,
                submitted_at
            }
        })

        return new ExpenseReport({ ...result });
    }
}

module.exports = ExpenseReportReposity;
