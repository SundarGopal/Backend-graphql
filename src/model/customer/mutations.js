const {
    GraphQLNonNull,
    GraphQLString,
    GraphQLList,
    GraphQLID,
    GraphQLFloat
} = require('graphql')
const type = require('./type')
const Customer = require('./customer')
var GraphQLDate = require('graphql-date');

// Defines the mutations
module.exports = {
    addCustomer: {
        type,
        args: {

              name:  { type: new GraphQLNonNull(GraphQLString) },
                address:  { type: new GraphQLNonNull(GraphQLString) },
                  email:  { type: new GraphQLNonNull(GraphQLString) },
                    phone:  { type: new GraphQLNonNull(GraphQLString) },
                      dob:  { type: new GraphQLNonNull(GraphQLDate) },
        },
        resolve: Customer.createEntry.bind(Customer)
    },
    updateCustomer: {
        type,
        args: {
            id:     { type: GraphQLID },
            name:  { type: new GraphQLNonNull(GraphQLString) },
              address:  { type: new GraphQLNonNull(GraphQLString) },
                email:  { type: new GraphQLNonNull(GraphQLString) },
                  phone:  { type: new GraphQLNonNull(GraphQLString) },
                    dob:  { type: new GraphQLNonNull(GraphQLDate) },
        },
        resolve: Customer.updateEntry.bind(Customer)
    },
    deleteCustomer: {
        type,
        args: {
            id:     { type: GraphQLID },
          },
        resolve: Customer.deleteEntry.bind(Customer)
    },


}
