const { GraphQLObjectType } = require('graphql')
const employeeQueries = require('../model/employee/queries')
const salariesQueries = require('../model/salaries/queries')
const leavesQueries = require('../model/leaves/queries')
const attendanceQueries = require('../model/attendance/queries')

module.exports = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        employer: employeeQueries.employer,
        employee: employeeQueries.employee,
        salaries: salariesQueries.salaries,
        salary: salariesQueries.salary,
        leaves: leavesQueries.leaves,
        leave:leavesQueries.leave,
        attendances:attendanceQueries.attendances,
        attendance:attendanceQueries.attendance
    }
})
