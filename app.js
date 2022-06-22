const express = require(`express`)
const morgan = require(`morgan`)
const router = require(`./routes/gift-exchange`)
const app = express();
const {NotFoundError} = require("./utils/errors")

module.exports = app;

app.use(morgan('tiny'))
app.use(express.json())
app.use("/gift-exchange", router)

app.get('/', async(req,res) => {
    res.status(200).json({"ping": "pong"})
})

//404 ERROR HANDLER
app.use((req,res,next) => {
    return next(new NotFoundError())
})

//GENERIC ERROR HANDLER
app.use((error,req,res,next) => {
    const status = error.status || 500
    const message = error.message || "Something went wrong in the application"

    return res.status(status).json({
        error: {message, status}
    })
})