const { GraphQLObjectType } = require('graphql')
const employeeQueries = require('../model/employee/queries')
const salariesQueries = require('../model/salaries/queries')
const leavesQueries = require('../model/leaves/queries')

module.exports = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        employer: employeeQueries.employer,
        employee: employeeQueries.employee,
        salaries: salariesQueries.salaries,
        leaves: leavesQueries.leaves
    }
})
