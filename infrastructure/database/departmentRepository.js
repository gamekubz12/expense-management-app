const prisma = require('./client');
const Department = require('../../domain/department');

class DepartmentRepository {
    async findById(id) {
        const result = await prisma.department.findUnique({
            where: { id }
        })

        if (!result) return null;

        return new Department({...result});
    }

    async create({ name }) {
        const result = await prisma.department.create({
            data: { name }
        })

        return new Department({ ...result });
    }
}

module.exports = DepartmentRepository;
