const bcrypt = require('bcrypt');

class CreateUser {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async execute(userData) {
        const hashedPassword = await bcrypt.hash(userData.password, 10);

        return await this.userRepository.create({
            ...userData,
            password: hashedPassword
        })
    }
}

module.exports = CreateUser;
