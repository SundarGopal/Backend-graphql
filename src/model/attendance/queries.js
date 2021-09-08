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

      id: { type: new GraphQLID },
      employeeId:  { type: new GraphQLID },
      date:  { type: new GraphQLDate },
      inTimeDate:  { type: new GraphQLDate },
      outTime: { type: new GraphQLDate},
      totalHours: { type: new GraphQLFloat },
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
