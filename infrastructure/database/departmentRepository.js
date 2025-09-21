const prisma = require('./client');
const Department = require('../../domain/department');

class DepartmentRepository {
    async findById(id) {
        const result = await prisma.department.findUnique({
            where: { id },
            include: { manager: true }
        })

        if (!result) return null;

        return new Department({...result});
    }

    async create({ name, manager_id }) {
        const result = await prisma.department.create({
            data: { name, managerId: manager_id }
        })

        return new Department({ ...result });
    }
}

module.exports = DepartmentRepository;
