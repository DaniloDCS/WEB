import express from "express"
import Account from "../../schema/Account"

const Router = express.Router()

Router.delete("/", async (req, res) => {
    const { userId } = req.body
    const account = await Account.deleteOne({ _id: userId })
    return res.send(account)
})

Router.delete("/course/", async (req, res) => {
    const { userId, courseId } = req.body

    const course = await Account.updateOne({
        _id: userId
    }, {
        $pull: {
            courses: {
                _id: courseId
            }
        }
    })

    if (!course) return res.json({ "message": "User not found" })
    return res.json(course)
})

Router.delete("/period", async (req, res) => {
    const { userId, periodId } = req.body

    const periods = await Account.updateOne({
        _id: userId
    }, {
        $pull: {
            periods: {
                _id: periodId
            }
        }
    })

    if (!periods) return res.json({ "message": "User not found" })
    return res.json(periods)
})

Router.delete("/discipline", async (req, res) => {
    const { userId, disciplineId } = req.body

    const discipline = await Account.updateOne({
        _id: userId
    }, {
        $pull: {
            disciplines: {
                _id: disciplineId
            }
        }
    })

    if (!discipline) return res.json({ "message": "User not found" })
    return res.json(discipline)
})

Router.delete("/evaluation", async (req, res) => {
    const { userId, evaluationId } = req.body

    const evaluation = await Account.updateOne({
        _id: userId
    }, {
        $pull: {
            evaluations: {
                _id: evaluationId
            }
        }
    })

    if (!evaluation) return res.json({ "message": "User not found" })
    return res.json(evaluation)
})

Router.delete("/task/create", async (req, res) => {
    const { userId, taskId } = req.body

    const task = await Account.updateOne({
        _id: userId
    }, {
        $pull: {
            tasks: {
                _id: taskId
            }
        }
    })

    if (!task) return res.json({ "message": "User not found" })
    return res.json(task)
})

Router.delete("/reminder", async (req, res) => {
    const { userId, reminderId } = req.body

    const reminder = await Account.updateOne({
        _id: userId
    }, {
        $pull: {
            reminders: {
                _id: reminderId
            }
        }
    })

    if (!reminder) return res.json({ "message": "User not found" })
    return res.json(reminder)
})

Router.delete("/annotation", async (req, res) => {
    const { userId, annotationId } = req.body

    const annotation = await Account.updateOne({
        _id: userId
    }, {
        $pull: {
            annotations: {
                _id: annotationId
            }
        }
    })

    if (!annotation) return res.json({ "message": "User not found" })
    return res.json(annotation)
})

export default Router