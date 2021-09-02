import express from "express"
import Account from "../../schema/Account"

const Router = express.Router()

Router.post("/courses", async (req, res) => {
    const { userId } = req.body

    const course = await Account.findOne({ _id: userId }).select("courses")

    if (!course) return res.json({ "message": "User not found" })
    return res.json(course)
})

Router.post("/periods", async (req, res) => {
    const { userId } = req.body

    const period = await Account.findOne({ _id: userId }).select("periods")

    if (!period) return res.json({ "message": "User not found" })
    return res.json(period)
})

Router.post("/disciplines", async (req, res) => {
    const { userId } = req.body

    const discipline = await Account.findOne({ _id: userId }).select("disciplines")

    if (!discipline) return res.json({ "message": "User not found" })
    return res.json(discipline)
})

Router.post("/tasks", async (req, res) => {
    const { userId } = req.body

    const task = await Account.findOne({ _id: userId }).select("tasks")

    if (!task) return res.json({ "message": "User not found" })
    return res.json(task)
})

Router.post("/evaluations", async (req, res) => {
    const { userId } = req.body

    const evaluation = await Account.findOne({ _id: userId }).select("evaluations")

    if (!evaluation) return res.json({ "message": "User not found" })
    return res.json(evaluation)
})

Router.post("/annotations", async (req, res) => {
    const { userId } = req.body

    const annotation = await Account.findOne({ _id: userId }).select("annotationGenerally")

    if (!annotation) return res.json({ "message": "User not found" })
    return res.json(annotation)
})

Router.post("/reminders", async (req, res) => {
    const { userId } = req.body

    const reminder = await Account.findOne({ _id: userId }).select("reminders")

    if (!reminder) return res.json({ "message": "User not found" })
    return res.json(reminder)
})

export default Router