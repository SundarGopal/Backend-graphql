const {
  GraphQLList,
  GraphQLID,
  GraphQLString,
  GraphQLFloat,

} = require('graphql')
const type = require('./type')
const mutation = require('./mutations')
const Customer = require("./customer")
var GraphQLDate = require('graphql-date');

// Defines the queries
module.exports = {
  customers: {
    type: new GraphQLList(type),
    args: {

      name: {
        type: GraphQLString
      },
      address: {
        type: GraphQLString
      },
      email: {
        type: GraphQLString
      },
      phone: {
        type: GraphQLString
      },
      dob: {
        type: GraphQLDate
      }
    },
    resolve: Customer.findMatching.bind(Customer)
  },
  customer: {
    type,
    args: {
      id: {
        type: GraphQLID
      }
    },
    resolve: Customer.getByID.bind(Customer)
  }
}
