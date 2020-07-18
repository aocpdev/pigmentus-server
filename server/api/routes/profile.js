import Router from 'express';
import { getUsers } from '../queries/users';

const router = Router();

router.get('/profile', async (req, res) => {
    try {
        const response = await getUsers();
        res.status(200).json(response.rows);
    } catch (error){
        return res.status(500).json({
            message: "Error Ocurred",
            error
        });
    }
});

module.exports = router;
