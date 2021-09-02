import express from "express"
import Account from "../../schema/Account"

const Router = express.Router()

Router.post("/", async (req, res) => {
    const account = await Account.create(req.body)
    account.password = "***********"
    return res.send(account)
})

Router.post("/course", async (req, res) => {
    const { userId, name, level, institution, startsIn } = req.body

    const course = await Account.updateOne({ _id: userId }, { $push: { courses: { name, level, institution, startsIn } } })

    if (!course) return res.json({ "message": "User not found" })
    return res.json(course)
})

Router.post("/period", async (req, res) => {
    const { userId, period, startsIn, courseId } = req.body

    const periods = await Account.updateOne({ _id: userId }, { $push: { periods: { period, startsIn, courseId } } })

    if (!periods) return res.json({ "message": "User not found" })
    return res.json(periods)
})

Router.post("/discipline", async (req, res) => {
    const { userId, disciplineTitle, teacher, startsIn, periodId, courseId } = req.body

    const discipline = await Account.updateOne({ _id: userId }, { $push: { disciplines: { disciplineTitle, teacher, startsIn, periodId, courseId } } })

    if (!discipline) return res.json({ "message": "User not found" })
    return res.json(discipline)
})

Router.post("/evaluation", async (req, res) => {
    const { userId, courseId, periodId, disciplineId, titleEvaluate, note, questions, date } = req.body

    const evaluation = await Account.updateOne({ _id: userId }, { $push: { evaluations: { courseId, periodId, disciplineId, titleEvaluate, note, questions, date } } })

    if (!evaluation) return res.json({ "message": "User not found" })
    return res.json(evaluation)
})

Router.post("/reminder", async (req, res) => {
    const { userId, reminderTitle, reminderDescription, priority, dataReminder } = req.body

    const reminder = await Account.updateOne({ _id: userId }, { $push: { reminders: { reminderTitle, reminderDescription, priority, dataReminder } } })

    if (!reminder) return res.json({ "message": "User not found" })
    return res.json(reminder)
})

Router.post("/annotation", async (req, res) => {
    const { userId, courseId, noteTitle, note, dateNote } = req.body

    const annotation = await Account.updateOne({ _id: userId }, { $push: { annotationGenerally: { courseId, noteTitle, note, dateNote } } })

    if (!annotation) return res.json({ "message": "User not found" })
    return res.json(annotation)
})

Router.post("/task/create", async (req, res) => {
    const { userId, titleTask, date, deliveryDate, priority, disciplineId, courseId, periodId, questions } = req.body

    const task = await Account.updateOne({ _id: userId }, { $push: { tasks: { titleTask, date, deliveryDate, priority, disciplineId, courseId, periodId, questions } } })

    if (!task) return res.json({ "message": "User not found" })
    return res.json(task)
})

export default Router