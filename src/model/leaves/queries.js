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

      id:  { type: new GraphQLNonNull(GraphQLID) },
                employeeId:  { type: new GraphQLNonNull(GraphQLID) },
                startDate:  { type: new GraphQLNonNull(GraphQLDate) },
                endDate:  { type: new GraphQLNonNull(GraphQLDate) },
                count:  { type: new GraphQLNonNull(GraphQLFloat) },
                  Year:  { type: new GraphQLNonNull(GraphQLString) },
                      dateOfEntry:  { type: new GraphQLNonNull(GraphQLDate) },
                      dateOfModify:  { type: new GraphQLNonNull(GraphQLDate) },
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
