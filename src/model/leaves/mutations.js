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

              id:  { type: new GraphQLNonNull(GraphQLID) },
                employeeId:  { type: new GraphQLNonNull(GraphQLID) },
                startDate:  { type: new GraphQLNonNull(GraphQLDate) },
                endDate:  { type: new GraphQLNonNull(GraphQLDate) },
                count:  { type: new GraphQLNonNull(GraphQLFloat) },
                  Year:  { type: new GraphQLNonNull(GraphQLString) },
                      dateOfEntry:  { type: new GraphQLNonNull(GraphQLDate) },
                      dateOfModify:  { type: new GraphQLNonNull(GraphQLDate) },
        },
        resolve: Leave.createEntry.bind(Leave)
    },
    updateLeave: {
        type,
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
