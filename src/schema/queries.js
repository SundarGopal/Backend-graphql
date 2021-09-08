const { GraphQLObjectType } = require('graphql')
const customerQueries = require('../model/customer/queries')

module.exports = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        customer: customerQueries.customer,
        customers: customerQueries.customers
    }
})
