class UserController {
    constructor(createUserUseCase) {
        this.createUserUseCase = createUserUseCase;
    }

    create = async (req, res) => {
        try {
            const user = await this.createUserUseCase.execute(req.body);
            res.status(201).json(user.toJson());

        } catch (err) {
            console.error(err);
            res.status(400).json({ error: err.message });
        }
    }
}

module.exports = UserController;
