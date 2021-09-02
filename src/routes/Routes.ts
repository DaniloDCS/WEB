import express from "express"
import Account from "../../schema/Account"
const Router = express.Router()

Router.get("/", (req, res) => { return res.render("pages/welcome") })

Router.get("/signin", (req, res) => { return res.render("pages/signin") })

Router.get("/signup", (req, res) => { return res.render("pages/signup") })

Router.get("/forgout", (req, res) => { return res.render("pages/forgout") })

Router.get("/dashboard", async (req, res) => { 
    return res.render("pages/dashboard") 
})

export default Router