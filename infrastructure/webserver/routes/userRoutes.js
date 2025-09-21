const express = require('express');

module.exports = (controller) => {
    const router = express.Router();

    router.post('/', controller.create);

    return router;
}
