const Router = require('express');
const Courses = require('../controllers/courses');

const router = Router();

router.get('/', Courses.getCourses)
router.post('/', Courses.saveCourse);

module.exports = router;