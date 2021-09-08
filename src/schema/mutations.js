const { GraphQLObjectType } = require('graphql')
const customerMutation = require('../model/customer/mutations')

module.exports = new GraphQLObjectType({
    name: 'RootMutationsType',
    fields: {
        addCustomer: customerMutation.addCustomer,
        updateCustomer: customerMutation.updateCustomer,
        deleteCustomer: customerMutation.deleteCustomer
    }
})
