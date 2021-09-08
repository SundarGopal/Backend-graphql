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
  name: 'Employee',
  description: 'A employee',
  fields:{
    id: {
      type: new GraphQLNonNull(GraphQLID)
    },name: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
    address: { type: new GraphQLNonNull(GraphQLString) },
    dateOfBirth:  { type: new GraphQLNonNull(GraphQLDate) },
    dateOfJoining:  { type: new GraphQLNonNull(GraphQLDate) },
    education: { type: new GraphQLNonNull(GraphQLString) },
    type: { type: new GraphQLNonNull(GraphQLString) },
    role: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) },
    dateOfEntry:  { type: new GraphQLNonNull(GraphQLDate) },
    dateOfModify:  { type: new GraphQLNonNull(GraphQLDate) }
  })
})
