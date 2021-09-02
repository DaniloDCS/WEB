import express from "express"
import Account from "../../schema/Account"

const Router = express.Router()

Router.get("/all/users", async (req, res) => {
    const allAccounts = await Account.find().select("name username email")
    if (!allAccounts) res.json("Has no registered users!")
    return res.json(allAccounts)
})

Router.get("/all/courses", async (req, res) => {
    const allAccounts = await Account.find().select("username courses")
    if (!allAccounts) res.json("Has no registered users!")
    return res.json(allAccounts)
})

export default Router