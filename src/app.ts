import express from "express"
import cors from "cors"
import layouts from "express-ejs-layouts"
import mongoose from "mongoose"
import Create from "./routes/Create"
import Update from "./routes/Update"
import Delete from "./routes/Delete"
import Auth from "./routes/Auth"
import Admin from "./routes/Admin"
import Search from "./routes/Search"
import Routes from "./routes/Routes"
import middlewaresAtuh from "../middlewares/authConfig"

class App {
    public express: express.Application

    public constructor() {
        this.express = express()
        this.middleware()
        this.database()
        this.routes()
    }

    private middleware(): void {
        this.express.use(express.json())
        this.express.use(express.urlencoded({ extended: true }))
        this.express.use(cors())
        this.express.set("view engine", "ejs")
        this.express.use(layouts)


    }

    private database(): void {
        mongoose.connect("mongodb://localhost:27017/stuudy", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
            .then(result => console.log("Success connection on database!"))
            .catch(err => console.log("Error connection on database!"))
    }

    private routes(): void {
        this.express.use("/account/create/", Create)
        this.express.use("/account/config/update/", Update)
        this.express.use("/account/config/delete/", Delete)
        this.express.use("/atuh/", Auth)
        this.express.use("/admin/", Admin)
        this.express.use("/my/", Search)
        this.express.use("/", Routes)
    }
}

export default new App().express