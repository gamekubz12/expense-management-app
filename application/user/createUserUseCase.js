const bcrypt = require('bcrypt');

class CreateUser {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async execute(userData) {
        const hashedPassword = await bcrypt.hash(userData.password, 10);
        const result = await this.userRepository.create({
            ...userData,
            password: hashedPassword
        })

        return result?.toJson();
    }
}

module.exports = CreateUser;
