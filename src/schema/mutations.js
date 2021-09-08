const { GraphQLObjectType } = require('graphql')
const employeeMutation = require('../model/employee/mutations')

module.exports = new GraphQLObjectType({
    name: 'RootMutationsType',
    fields: {
        addEmployee: customerMutation.addEmployee,
        updateEmployee: customerMutation.updateEmployee,
        deleteEmployee: customerMutation.deleteEmployee
    }
})
