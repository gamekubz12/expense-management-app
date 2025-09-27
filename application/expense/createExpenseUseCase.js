const fs = require('fs');
const path = require('path');

class CreateExpense {
    constructor(expenseRepository) {
        this.expenseRepository = expenseRepository;
    }

    async execute(expenseData) {
        const { content_file, filename, ...expense } = expenseData;
        let outputPath;
        if (content_file) {
            outputPath = path.resolve(__dirname, '..', '..', 'receipts', `${expense.report_id}-${filename}`);
            const buffer = Buffer.from(content_file, 'base64')
            fs.writeFileSync(outputPath, buffer);
        }

        const result = await this.expenseRepository.create({
            ...expense,
            receipt_url: content_file ? outputPath: null
        });

        return result?.toJson();
    }
}

module.exports = CreateExpense;
