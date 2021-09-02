import express from "express"
import Account from "../../schema/Account"

const Router = express.Router()

Router.put("/", async (req, res) => {
    const { userId, name, username, email } = req.body
    const account = await Account.updateOne({ _id: userId }, { name, username, email })
    return res.send(account)
})

Router.put("/course/", async (req, res) => {
    const { userId, courseId, name, level, institution, startsIn } = req.body
    const course = await Account.updateOne({
        _id: userId,
        "courses._id": courseId
    }, {
        $set: {
            "courses.$.name": name,
            "courses.$.level": level,
            "courses.$.institution": institution,
            "courses.$.startsIn": startsIn
        }
    })

    if (!course) return res.json({ "message": "User not found" })
    return res.json(course)
})

Router.put("/period", async (req, res) => {
    const { userId, courseId, periodId, period, startsIn } = req.body

    const periods = await Account.updateOne({
        _id: userId,
        "periods._id": periodId
    }, {
        $set: {
            "period.$.period": period,
            "period.$.startsIn": startsIn,
            "periods.$.courseId": courseId
        }
    })

    if (!periods) return res.json({ "message": "User not found" })
    return res.json(periods)
})

Router.put("/discipline", async (req, res) => {
    const { userId, disciplineId, disciplineTitle, teacher, startsIn, periodId, courseId } = req.body

    const discipline = await Account.updateOne({
        _id: userId,
        "disciplines._id": disciplineId
    }, {
        $set: {
            "disciplines.$.disciplineTitle": disciplineTitle,
            "disciplines.$.teacher": teacher,
            "disciplines.$.startsIn": startsIn,
            "disciplines.$.periodId": periodId,
            "disciplines.$.courseI": courseId
        }
    })

    if (!discipline) return res.json({ "message": "User not found" })
    return res.json(discipline)
})

//TODO: Falta altualizar as questoes
Router.put("/evaluation", async (req, res) => {
    const { userId, evaluationId, courseId, periodId, disciplineId, titleEvaluate, note, date } = req.body

    const evaluation = await Account.updateOne({
        _id: userId,
        "evaluations._id": evaluationId
    }, {
        $set: {
            "evaluations.$.courseId": courseId,
            "evaluations.$.periodId": periodId,
            "evaluations.$.disciplineId": disciplineId,
            "evaluations.$.titleEvaluate": titleEvaluate,
            "evaluations.$.note": note,
            "evaluations.$.date": date
        }
    })

    if (!evaluation) return res.json({ "message": "User not found" })
    return res.json(evaluation)
})

//TODO: Falta altualizar as questoes
Router.put("/task/create", async (req, res) => {
    const { userId, taskId, titleTask, date, deliveryDate, priority, disciplineId, courseId, periodId } = req.body

    const task = await Account.updateOne({
        _id: userId,
        "tasks._id": titleTask
    }, {
        $set: {
            "tasks.$.titleTask": titleTask,
            "tasks.$.date": date,
            "tasks.$.deliveryDate": deliveryDate,
            "tasks.$.priority": priority,
            "tasks.$.disciplineId": disciplineId,
            "tasks.$.courseId": courseId,
            "tasks.$.periodId": periodId
        }
    })

    if (!task) return res.json({ "message": "User not found" })
    return res.json(task)
})

Router.put("/reminder", async (req, res) => {
    const { userId, reminderId, reminderTitle, reminderDescription, priority, dataReminder } = req.body

    const reminder = await Account.updateOne({
        _id: userId,
        "reminders._id": reminderId
    }, {
        $set: {
            "reminders.$.reminderTitle": reminderTitle,
            "reminders.$.reminderDescription": reminderDescription,
            "reminders.$.priority": priority,
            "reminders.$.dataReminde": dataReminder
        }
    })

    if (!reminder) return res.json({ "message": "User not found" })
    return res.json(reminder)
})

Router.put("/annotation", async (req, res) => {
    const { userId, annotationId, courseId, noteTitle, note, dateNote } = req.body

    const annotation = await Account.updateOne({
        _id: userId,
        "annotations._id": annotationId
    }, {
        $set: {
            "annotationGenerally.$.courseId": courseId,
            "annotationGenerally.$.noteTitle": noteTitle,
            "annotationGenerally.$.note": note,
            "annotationGenerally.$.dateNot": dateNote
        }
    })

    if (!annotation) return res.json({ "message": "User not found" })
    return res.json(annotation)
})

export default Router