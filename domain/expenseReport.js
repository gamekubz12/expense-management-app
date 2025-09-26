class ExpenseReport {
    constructor({
        id,
        user_id,
        title,
        description,
        status,
        submitted_at,
        reviewed_by,
        reviewed_at
    }) {
        this.id = id;
        this.userId = user_id;
        this.title = title;
        this.description = description;
        this.status = status;
        this.submittedAt = submitted_at;
        this.reviewedBy = reviewed_by;
        this.reviewedAt = reviewed_at;
    }

    toJson = () => ({
        "id": this.id,
        "user_id": this.userId,
        "title": this.title,
        "description": this.description,
        "status": this.status,
        "submitted_at": this.submittedAt,
        "reviewed_by": this.reviewedBy,
        "reviewed_at": this.reviewedAt
    })
}

module.exports = ExpenseReport;
