require("dotenv").config();
const express = require('express')
const bodyParser = require('body-parser')
const Routes = require('./routes')
const cors=require("cors")
const jwt = require('jsonwebtoken');

class App {

    /**
     *
     *
     * Sets the properties to be used by this class to create the server
     *
     */
    constructor() {
        this.expressApp = express()

        //Literal object containing the configurations
        this.configs = {
            get port() {
                return process.env.PORT || 4000
            }
        }
    }

    /**
     *
     *
     * Applies any middleware to be used by this app
     *
     */
    applyMiddleware() {
        //Allows the server to parse json
        this.expressApp.use(bodyParser.json())
        this.expressApp.use(cors())

        this.expressApp.use((req,res,next)=>{
            console.log("IN MIDDLEWARE")
            let token = req.headers["authorization"]
            if (token == '') {
                console.log("HEADER EMPTY")
                next();
            }
            else{
            jwt.verify(token,process.env.ACCESS_TOKEN,(err,user)=>{
                if(err) 
                {
                    console.log("FORBIDDEN")
                    res.sendStatus(401)
                }
                else { 
                    console.log("VERIFIED")
                    next();
                }
            })
        }
    })

        //Registers the routes used by the app
        new Routes(this.expressApp)
    }

    /**
     *
     *
     * Runs the app
     *
     */
    run() {
        this.expressApp.listen(this.configs.port, () => {
            console.log("Express server running project on port " + this.configs.port + ".")
            console.log(`Environment: ${process.env.STAGE || "development"}`)
        })
    }
}

//Runs the thing
const app = new App()

app.applyMiddleware()
app.run()
