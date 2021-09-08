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
          employeeId:  { type: new GraphQLNonNull(GraphQLID) },
          date:  { type: new GraphQLNonNull(GraphQLDate) },
          inTimeDate:  { type: new GraphQLNonNull(GraphQLString) },
          outTime: { type: new GraphQLNonNull(GraphQLString) },
          totalHours: { type: new GraphQLNonNull(GraphQLFloat) },

        },
        resolve: Attendance.createEntry.bind(Attendance)
    },
    updateAttendance: {
        type,
        args: {
            id:     { type:  GraphQLID },
            employeeId:  { type: new GraphQLNonNull(GraphQLID) },
            date:  { type: new GraphQLNonNull(GraphQLDate) },
            inTimeDate:  { type: new GraphQLNonNull(GraphQLString) },
            outTime: { type: new GraphQLNonNull(GraphQLString) },
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
