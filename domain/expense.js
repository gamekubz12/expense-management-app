class Expense {
    constructor({
        id,
        report_id,
        category,
        amount,
        currency,
        expense_date,
        description,
        receipt_url
    }) {
        this.id = id;
        this.reportId = report_id;
        this.category = category;
        this.amount = amount;
        this.currency = currency;
        this.expenseDate = expense_date;
        this.description = description;
        this.receiptUrl = receipt_url;
    }

    toJson = () => ({
        "id": this.id,
        "report_id": this.reportId,
        "category": this.category,
        "amount": this.amount,
        "currency": this.currency,
        "expense_date": this.expenseDate,
        "description": this.description,
        "receipt_url": this.receiptUrl
    })
}

module.exports = Expense;
