const { getCourses, saveCourse} = require('../queries/courses')

exports.getCourses = (req, res, next) => {
    try {
        getCourses().then( courses => {
            res.status(200).json({courses: courses})
        })
    } catch (error) {
        res.status(500).json({
            messags: 'Error ocurred',
            error
        })
    }
}

exports.saveCourse = (req, res, next) => {
    try {

        saveCourse(req.body)
        .then( course => {
            res.status().json({
                message: "Course added succesfully",
                newId: course.id
            })
        }).catch(err => res.status(401).json({ err }));
    } catch (error) {
        res.status(500).json({
            messags: 'Error ocurred',
            error
        })
    }
}

