const {
  GraphQLList,
  GraphQLID,
  GraphQLString,
  GraphQLFloat,

} = require('graphql')
const type = require('./type')
const mutation = require('./mutations')
const Leave = require('./leaves')
var GraphQLDate = require('graphql-date');

// Defines the queries
module.exports = {
  leaves: {
    type: new GraphQLList(type),
    args: {

      id:  { type: new GraphQLID },
                employeeId:  { type:  GraphQLID },
                startDate:  { type:  GraphQLDate },
                endDate:  { type: GraphQLDate },
                count:  { type:  GraphQLFloat },
                  Year:  { type: GraphQLString },
                      dateOfEntry:  { type:  GraphQLDate },
                      dateOfModify:  { type: GraphQLDate },
    },
    resolve: Leave.findMatching.bind(Leave)
  },
  leave: {
    type,
    args: {
      id: {
        type: GraphQLID
      }
    },
    resolve: Leave.getByID.bind(Leave)
  }
}
