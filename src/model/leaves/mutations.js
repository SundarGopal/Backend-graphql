const {
    GraphQLNonNull,
    GraphQLString,
    GraphQLList,
    GraphQLID,
    GraphQLFloat
} = require('graphql')
const type = require('./type')
const Leave = require('./leaves')
var GraphQLDate = require('graphql-date');

// Defines the mutations
module.exports = {
    addLeave: {
        type,
        args: {

                employeeId:  { type: new GraphQLNonNull(GraphQLID) },
                startDate:  { type: new GraphQLNonNull(GraphQLDate) },
                endDate:  { type: new GraphQLNonNull(GraphQLDate) },
                count:  { type: new GraphQLNonNull(GraphQLFloat) },
                  year:  { type: new GraphQLNonNull(GraphQLString) }
        },
        resolve: Leave.createEntry.bind(Leave)
    },
    updateLeave: {
        type,
        args: {
          id:  { type: GraphQLID },
          employeeId:  { type: new GraphQLNonNull(GraphQLID) },
          startDate:  { type: new GraphQLNonNull(GraphQLDate) },
          endDate:  { type: new GraphQLNonNull(GraphQLDate) },
          count:  { type: new GraphQLNonNull(GraphQLFloat) },
            year:  { type: new GraphQLNonNull(GraphQLString) },
        },
        resolve: Leave.updateEntry.bind(Leave)
    },
    deleteLeave: {
        type,
        args: {
            id:     { type: GraphQLID },
          },
        resolve: Leave.deleteEntry.bind(Leave)
    },


}
