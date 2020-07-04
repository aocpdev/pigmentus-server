import Router from 'express';
import { getUsers, createUser, getUserById, deleteUser} from '../queries/users';
import { getApi } from '../queries/api';

// Router
const router = Router();

// Get Routes
router.get('/', getApi);
router.get('/users', getUsers);
router.get('/users/:id', getUserById);

// Post Routes
router.post('/addUser', createUser);

// Delete
router.delete('/users/:id', deleteUser);

module.exports = router;