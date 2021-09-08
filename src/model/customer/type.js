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
  name: 'Customer',
  description: 'A customer',
  fields:()=>( {
    id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    address: {
      type: new GraphQLNonNull(GraphQLString)
    },
    email: {
      type: new GraphQLNonNull(GraphQLString)
    },
    phone: {
      type: new GraphQLNonNull(GraphQLString)
    },
    dob: {
      type: new GraphQLNonNull(GraphQLDate)
    }
  })
})
