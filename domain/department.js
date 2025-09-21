class Department {
    constructor({
        id,
        name,
        manager_id
    }) {
        this.id = id;
        this.name = name;
        this.managerId = manager_id;
    }

    toJson = () => ({
        "id": this.id,
        "name": this.name,
        "manager_id": this.managerId,
    })
}

module.exports = Department;
