const express = require('express');

module.exports = (controller) => {
    const router = express.Router();
    
    // GET
    router.get('/', controller.findByUserId);

    // POST
    router.post('/', controller.create);

    return router;
}
