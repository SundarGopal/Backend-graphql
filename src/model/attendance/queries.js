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
  attendances: {
    type: new GraphQLList(type),
    args: {

      id: { type: GraphQLID },
      employeeId:  { type: GraphQLID },
      date:  { type: GraphQLDate },
      inTimeDate:  { type: GraphQLString },
      outTime: { type: GraphQLString},
      totalHours: { type: GraphQLFloat },
    },
    resolve: Attendance.findMatching.bind(Attendance)
  },
  attendance: {
    type,
    args: {
      employeeId: {
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
