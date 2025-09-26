const express = require('express');

module.exports = (controller) => {
    const router = express.Router();

    // GET
    router.get('/:id', controller.findById);

    // POST
    router.post('/', controller.create);

    return router;
}
