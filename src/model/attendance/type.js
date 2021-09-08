let {
  GraphQLID,
  GraphQLString,
  GraphQLFloat,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLList,
  GraphQLNull,GraphQLDate
} = require('graphql')
var GraphQLDate = require('graphql-date')

// Defines the type
module.exports = new GraphQLObjectType({
  name: 'Attendance',
  description: 'attendance',
  fields:()=>( {
    id: { type: new GraphQLNonNull(GraphQLID) },
    employeeId:  { type: new GraphQLNonNull(GraphQLID) },
    date:  { type: new GraphQLNonNull(GraphQLDate) },
    inTimeDate:  { type: new GraphQLNonNull(GraphQLDate) },
    outTime: { type: new GraphQLNonNull(GraphQLDate) },
    totalHours: { type: new GraphQLNonNull(GraphQLFloat) },
  })
})
