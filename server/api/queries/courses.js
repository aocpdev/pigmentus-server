const { pool } = require('../../config/database');

const getCourses = function () {
    return pool.query('SELECT * FROM courses');
}

const saveCourse = function (course) {
    return pool.query('INSERT INTO courses (name, description, price, enabled) VALUES ($1, $2, $3, $4)',
    [
        course.name,
        course.description,
        course.price,
        course.enabled
    ])
}

module.exports = {
    getCourses,
    saveCourse
}