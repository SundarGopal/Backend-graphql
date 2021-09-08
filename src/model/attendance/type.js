let {
  GraphQLID,
  GraphQLString,
  GraphQLFloat,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLList,
  GraphQLNull
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
    inTimeDate:  { type: new GraphQLNonNull(GraphQLString) },
    outTime: { type: new GraphQLNonNull(GraphQLString) },
    totalHours: { type: new GraphQLNonNull(GraphQLFloat) },
  })
})
