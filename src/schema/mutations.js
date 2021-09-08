const { GraphQLObjectType } = require('graphql')
const employeeMutation = require('../model/employee/mutations')

module.exports = new GraphQLObjectType({
    name: 'RootMutationsType',
    fields: {
        addEmployee: employeeMutation.addEmployee,
        updateEmployee: employeeMutation.updateEmployee,
        deleteEmployee: employeeMutation.deleteEmployee
    }
})
