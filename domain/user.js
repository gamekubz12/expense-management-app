class User {
    constructor({
        id,
        name,
        email,
        password,
        role,
        department_id,
        created_at,
    }) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
        this.departmentId = department_id;
        this.createdAt = created_at;    
    }

    toJson = () => ({
        "id": this.id,
        "name": this.name,
        "email": this.email,
        "password": this.password,
        "role": this.role,
        "department_id": this.departmentId,
        "created_at": this.createdAt
    })
}

module.exports = User;
