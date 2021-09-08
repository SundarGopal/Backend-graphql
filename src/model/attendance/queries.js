const {
  GraphQLList,
  GraphQLID,
  GraphQLString,
  GraphQLFloat,

} = require('graphql')
const type = require('./type')
const mutation = require('./mutations')
const Attendance = require('./attendance')
// const Employee = require("./employee")
var GraphQLDate = require('graphql-date');

// Defines the queries
module.exports = {
  attendance: {
    type: new GraphQLList(type),
    args: {

      id: { type: new GraphQLNonNull(GraphQLID) },
      employeeId:  { type: new GraphQLNonNull(GraphQLID) },
      date:  { type: new GraphQLNonNull(GraphQLDate) },
      inTimeDate:  { type: new GraphQLNonNull(GraphQLDate) },
      outTime: { type: new GraphQLNonNull(GraphQLDate) },
      totalHours: { type: new GraphQLNonNull(GraphQLFloat) },
    },
    resolve: Attendance.findMatching.bind(Attendance)
  },
  attendance: {
    type,
    args: {
      id: {
        type: GraphQLID
      }
    },
    resolve: Attendance.getByID.bind(Attendance)
  }
}
//   employer: {
//     type,
//     args: {
//       id: {
//         type: GraphQLID
//       }
//     },
//     resolve: Employee.getByID.bind(Employee)
//   }
// }
