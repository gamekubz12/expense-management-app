const prisma = require('./client');
const User = require('../../domain/user');

class UserRepository {
    async findByEmail(email) {
        const result = await prisma.user.findUnique({
            where: { email }
        })

        return result ? new User({...result}): null;
    }

    async create({ name, password, email, role, department_id }) {
        const result = await prisma.user.create({
            data: {
                name,
                password,
                email,
                role,
                departmentId: department_id
            }
        })

        return new User({...result});
    }
}

module.exports = UserRepository;
