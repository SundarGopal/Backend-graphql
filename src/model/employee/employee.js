const DAO = require('../../lib/dao')
const mySQLWrapper = require('../../lib/mysqlWrapper')

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
    static async createEntry(_, {name,email,address,dateOfBirth,dateOfJoining,education,type,role,password,dateOfEntry,dateOfModify}) {
        const connection = await mySQLWrapper.getConnectionFromPool()
        try {
            let _result = await this.insert(connection, {
                data: {
                    name,email,address,dateOfBirth,dateOfJoining,education,type,role,password,dateOfEntry,dateOfModify
                }
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
    static async updateEntry(_, {id, name,email,address,dateOfBirth,dateOfJoining,education,type,role,password,dateOfEntry,dateOfModify}) {
        const connection = await mySQLWrapper.getConnectionFromPool()
        try {

            await this.update(connection, {
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

}

module.exports = Customer
