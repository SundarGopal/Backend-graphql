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
  name: 'Salary',
  description: 'salary',
  fields:()=>( {
    id:  { type: new GraphQLNonNull(GraphQLID) },
    employeeId:  { type: new GraphQLNonNull(GraphQLID) },
      monthYear:  { type: new GraphQLNonNull(GraphQLString) },
        basic:  { type: new GraphQLNonNull(GraphQLFloat) },
          hra:  { type: new GraphQLNonNull(GraphQLFloat) },
          lta:  { type: new GraphQLNonNull(GraphQLFloat) },
          variable:  { type: new GraphQLNonNull(GraphQLFloat) },
          bonus:  { type: new GraphQLNonNull(GraphQLFloat) },
          TDS:  { type: new GraphQLNonNull(GraphQLFloat) },
          tax:  { type: new GraphQLNonNull(GraphQLFloat) },
          total:  { type: new GraphQLNonNull(GraphQLFloat) },
          workingDaysInMonth:  { type: new GraphQLNonNull(GraphQLFloat) },
          dateOfEntry:  { type: new GraphQLNonNull(GraphQLDate) },
          dateOfModify:  { type: new GraphQLNonNull(GraphQLDate) },
  })
})
