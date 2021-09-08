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
                employeeId:  { type: new GraphQLID },
                startDate:  { type: new GraphQLDate },
                endDate:  { type: new GraphQLDate },
                count:  { type: new GraphQLFloat },
                  Year:  { type: new GraphQLString },
                      dateOfEntry:  { type: new GraphQLDate },
                      dateOfModify:  { type: new GraphQLDate },
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
