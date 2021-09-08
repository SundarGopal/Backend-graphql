const DAO = require('../../lib/dao')
const mySQLWrapper = require('../../lib/mysqlWrapper')

class Salaries extends DAO {

    /**
     * Overrides TABLE_NAME with this class' backing table at MySQL
     */
    static get TABLE_NAME() {
        return 'salaries'
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
    static async createEntry(_, {id,employeeId,monthYear,basic,hra,lta,variable,bonus,TDS,tax,total,workingDaysInMonth}) {
        const connection = await mySQLWrapper.getConnectionFromPool()
        try {
            let _result = await this.insert(connection, {
                data: {
                    id,employeeId,monthYear,basic,hra,lta,variable,bonus,TDS,tax,total,workingDaysInMonth
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
    static async updateEntry(_, {id,employeeId,monthYear,basic,hra,lta,variable,bonus,TDS,tax,total,workingDaysInMonth}) {
        const connection = await mySQLWrapper.getConnectionFromPool()
        try {

            await this.update(connection, {
                id,
                data: {
                    employeeId,monthYear,basic,hra,lta,variable,bonus,TDS,tax,total,workingDaysInMonth
                },
                dateOfModify:new Date(Date.now()).toISOString()
            })

            return this.getByID(_, {id})
        } finally {
            // Releases the connection
            if (connection != null) connection.release()
        }
    }
    static async deleteEntry(_, {id,employeeId,monthYear,basic,hra,lta,variable,bonus,TDS,tax,total,workingDaysInMonth,dateOfEntry,dateOfModify}) {
        const connection = await mySQLWrapper.getConnectionFromPool()
        try {

            await this.delete(connection, {
                id,
                data: {
                    employeeId,monthYear,basic,hra,lta,variable,bonus,TDS,tax,total,workingDaysInMonth,dateOfEntry,dateOfModify
                }
            })

            return this.getByID(_, {id})
        } finally {
            // Releases the connection
            if (connection != null) connection.release()
        }
    }

}

module.exports = Salaries
