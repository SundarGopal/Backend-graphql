const {
    GraphQLNonNull,
    GraphQLString,
    GraphQLList,
    GraphQLID,
    GraphQLFloat
} = require('graphql')
const type = require('./type')
const Attendance = require('./attendance')
var GraphQLDate = require('graphql-date');

// Defines the mutations
module.exports = {
    addAttendance: {
        type,
        args: {
          id: { type: new GraphQLNonNull(GraphQLID) },
          employeeId:  { type: new GraphQLNonNull(GraphQLID) },
          date:  { type: new GraphQLNonNull(GraphQLDate) },
          inTimeDate:  { type: new GraphQLNonNull(GraphQLDate) },
          outTime: { type: new GraphQLNonNull(GraphQLDate) },
          totalHours: { type: new GraphQLNonNull(GraphQLFloat) },

        },
        resolve: Attendance.createEntry.bind(Attendance)
    },
    updateAttendance: {
        type,
        args: {
            id: { type: new GraphQLNonNull(GraphQLString) },
            employeeId:  { type: new GraphQLNonNull(GraphQLID) },
            date:  { type: new GraphQLNonNull(GraphQLDate) },
            inTimeDate:  { type: new GraphQLNonNull(GraphQLDate) },
            outTime: { type: new GraphQLNonNull(GraphQLDate) },
            totalHours: { type: new GraphQLNonNull(GraphQLFloat) },
        },
        resolve: Attendance.updateEntry.bind(Attendance)
    },
    deleteAttendance: {
        type,
        args: {
            id:     { type: GraphQLID },
          },
        resolve: Attendance.deleteEntry.bind(Attendance)
    },


}
