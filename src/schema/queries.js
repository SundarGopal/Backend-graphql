const { GraphQLObjectType } = require('graphql')
const employeeQueries = require('../model/employee/queries')

module.exports = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        employer: customerQueries.employer,
        employee: customerQueries.employee
    }
})
