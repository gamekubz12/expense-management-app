class Department {
    constructor({
        id,
        name
    }) {
        this.id = id;
        this.name = name;
    }

    toJson = () => ({
        "id": this.id,
        "name": this.name
    })
}

module.exports = Department;
