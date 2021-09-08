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
  name: 'Leave',
  description: 'leave',
  fields:()=>( {
    id:  { type: new GraphQLNonNull(GraphQLID) },
                employeeId:  { type: new GraphQLNonNull(GraphQLID) },
                startDate:  { type: new GraphQLNonNull(GraphQLDate) },
                endDate:  { type: new GraphQLNonNull(GraphQLDate) },
                count:  { type: new GraphQLNonNull(GraphQLFloat) },
                  Year:  { type: new GraphQLNonNull(GraphQLString) },
                      dateOfEntry:  { type: new GraphQLNonNull(GraphQLDate) },
                      dateOfModify:  { type: new GraphQLNonNull(GraphQLDate) },
  })
})
