const DAO = require('../../lib/dao')
const mySQLWrapper = require('../../lib/mysqlWrapper')
const crypto = require('crypto')
const jwt = require('jsonwebtoken');

require("dotenv").config();

function hashing(password){

const hash = crypto.createHash('md5').update(password).digest("hex");
console.log(hash)
return hash
}

class Employee extends DAO {

    /**
     * Overrides TABLE_NAME with this class' backing table at MySQL
     */
    static get TABLE_NAME() {
        return 'employee'
    }

    /**
     * Returns a bacon by its ID
     */
    static async getByID(_, {id}) {
        return await this.find(id)
    }

    /**
     * Returns a list of bacons matching the passed fields
     * @param {*} fields - Fields to be matched
     */
    static async findMatching(_, fields) {
        // Returns early with all bacons if no criteria was passed
        if (Object.keys(fields).length === 0) return this.findAll()

        // Find matching bacons
        return this.findByFields({
            fields
        })
    }

    /**
     * Creates a new bacon
     */
    static async createEntry(_, {name,email,address,dateOfBirth,dateOfJoining,education,type,role,password}) {
        const connection = await mySQLWrapper.getConnectionFromPool()
        try {
           
            let _result = await this.insert(connection, {
                data: {
                    name,email,address,dateOfBirth,dateOfJoining,education,type,role,password:hashing(password)
                },
                dateOfEntry:new Date(Date.now()).toISOString(),
                dateOfModify: "1970-01-01T00:00:00.000Z"

            })

            return this.getByID(_, {id: _result.insertId})
        } finally {
            // Releases the connection
            if (connection != null) connection.release()
        }
    }

    /**
     * Updates a bacon
     */
    static async updateEntry(_, {id, name,email,address,dateOfBirth,dateOfJoining,education,type,role,password}) {
        const connection = await mySQLWrapper.getConnectionFromPool()
        try {

            await this.update(connection, {
                id,
                data: {
                  name,email,address,dateOfBirth,dateOfJoining,education,type,role,password:hashing(password)
                },
                dateOfModify:new Date(Date.now()).toISOString()
            })

            return this.getByID(_, {id})
        } finally {
            // Releases the connection
            if (connection != null) connection.release()
        }
    }
    static async deleteEntry(_, {id,name,email,address,dateOfBirth,dateOfJoining,education,type,role,password,dateOfEntry,dateOfModify}) {
        const connection = await mySQLWrapper.getConnectionFromPool()
        try {

            await this.delete(connection, {
                id,
                data: {
                    name,email,address,dateOfBirth,dateOfJoining,education,type,role,password,dateOfEntry,dateOfModify
                }
            })

            return this.getByID(_, {id})
        } finally {
            // Releases the connection
            if (connection != null) connection.release()
        }
    }
    static async signIn(_,fields) {//email,role,password

        const connection = await mySQLWrapper.getConnectionFromPool()
        //var fields = {email :email,role : role,password : hashing(password)} 
        console.log(fields)
        
        fields.password = hashing(fields.password)

        if (Object.keys(fields).length === 0){console.log("ERROR EMPTY");return 0;}
      
        try {
            const user = await this.findByFields({fields})
            //console.log(user)
            
            if(user==''){
                return [{id:'Invalid'}]
            }
            console.log("CREATING HASH")

            console.log("THE KEY "+process.env.ACCESS_TOKEN)
            
            return [{id:jwt.sign({email: user.email,password:user.password},""+process.env.ACCESS_TOKEN)}]
        
        } finally {
            // Releases the connection
            if (connection != null) connection.release()
        }
        
    }
    
}

module.exports = Employee


/* PREVIOUS SIGNIN
static async signIn(_,fields) {//email,role,password

        const connection = await mySQLWrapper.getConnectionFromPool()
        //var fields = {email :email,role : role,password : hashing(password)} 
        console.log(fields)
        
        fields.password = hashing(fields.password)

        if (Object.keys(fields).length === 0){console.log("ERROR EMPTY");return 0;}
      
        try {
            const user = await this.findByFields({fields})
            console.log(user)
            
            if(user==''){
                return [{id:'Failed Authentication'}]
            }
            console.log("CREATING HASH")
            let hash = jwt.sign({},"" + process.env.JWT_KEY)
            let val = {hash}
            return [{id:jwt.sign({email: user.email },"" + process.env.JWT_KEY)}]
        
        } finally {
            // Releases the connection
            if (connection != null) connection.release()
        }
        
    }  */