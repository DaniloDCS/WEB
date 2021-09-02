import jwt from "jsonwebtoken"
import auth from "../config/auth.json"

export default (req, res, next) => {
    const authHeader = req.headrs.authorization

    if (!authHeader) return res.send("Nao tem token")

    const parts = authHeader.split(" ")

    // if (!parts.length === 2) return res.send("error: token invalid")

    const { scheme, token } = parts

    if (!/^Bearer$/i.test(scheme)) return res.send("Token mau formatado")

    jwt.verify(token, auth.secret, (err, decoded) => {
        if (err) return res.send("Error token invaalidoooo")

        req.userId = decoded.id
        req.app.set({ "token": token, "account": account })


        return next()
    })

}