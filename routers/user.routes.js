const {Router} = require('express');
const { indexUsers, postUsers, updateUsers } = require('../controllers/user.controller');
const router = Router();


router.get('/', indexUsers);
router.post('/', postUsers);
router.put('/:id', updateUsers);

module.exports = router;