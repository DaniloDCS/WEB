import express from "express"
import Account from "../../schema/Account"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import hash from "../../config/auth.json"

const Router = express.Router()

Router.post("/account/authenticate", async (req, res) => {
    const { username, email, password } = req.body
    const account = await Account.findOne({ username }).select("password")

    if (!account) return res.json({ "Error": "User not found" })

    if (!await bcrypt.compare(password, account.password)) return res.redirect("/signin")
    
    const token = jwt.sign({ id: account._id }, hash.secret, {
        expiresIn: 86400
    })
    
    return res.redirect("/dashboard")
})

export default Router