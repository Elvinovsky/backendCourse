import express from 'express'
const app = express()
const port = 3000

const jsonBodyMiddleware = express.json()
app.use(jsonBodyMiddleware)

const db = {
    courses: [{id: 1, title: 'front-end'},
        {id: 2, title: 'back-end'},
        {id: 3, title: 'automation qa'},
        {id: 4, title: 'devops'}]
}
app.get('/', (req, res) => {
    res.send({message: 'IT-INCUBATOR.RU'})
})
app.get('/courses', (req, res) => {
    let foundCourses = db.courses;
    if (req.query.title) {
        foundCourses = foundCourses
            .filter(c => c.title.indexOf(req.query.title as string) > -1)
    }

    res.json(foundCourses)
})
app.get('/courses/:id', (req, res) => {
    const foundCourse = db.courses.find(c => c.id === +req.params.id);

    if (!foundCourse) {
        res.sendStatus(404);
        return;
    }else {
        res.json(foundCourse)
    }
})
app.post('/courses', (req, res) => {
    if(!req.body.title) {
        res.sendStatus(400)
        return;
    }
    const createCourse = {
        id: +(new Date()),
        title: req.body.title
    };
    db.courses.push(createCourse)
    res.json(createCourse)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})