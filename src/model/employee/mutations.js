const {
    GraphQLNonNull,
    GraphQLString,
    GraphQLList,
    GraphQLID,
    GraphQLFloat
} = require('graphql')
const type = require('./type')
const Employee = require('./employee')
var GraphQLDate = require('graphql-date');

// Defines the mutations
module.exports = {
    addEmployee: {
        type,
        args: {
          name: { type: new GraphQLNonNull(GraphQLString) },
          email: { type: new GraphQLNonNull(GraphQLString) },
          address: { type: new GraphQLNonNull(GraphQLString) },
          dateOfBirth:  { type: new GraphQLNonNull(GraphQLDate) },
          dateOfJoining:  { type: new GraphQLNonNull(GraphQLDate) },
          education: { type: new GraphQLNonNull(GraphQLString) },
          type: { type: new GraphQLNonNull(GraphQLString) },
          role: { type: new GraphQLNonNull(GraphQLString) },
          password: { type: new GraphQLNonNull(GraphQLString) }

        },
        resolve: Employee.createEntry.bind(Employee)
    },
    updateEmployee: {
        type,
        args: {
            id:     { type:  GraphQLID },
            name: { type: new GraphQLNonNull(GraphQLString) },
            email: { type: new GraphQLNonNull(GraphQLString) },
            address: { type: new GraphQLNonNull(GraphQLString) },
            dateOfBirth:  { type: new GraphQLNonNull(GraphQLDate) },
            dateOfJoining:  { type: new GraphQLNonNull(GraphQLDate) },
            education: { type: new GraphQLNonNull(GraphQLString) },
            type: { type: new GraphQLNonNull(GraphQLString) },
            role: { type: new GraphQLNonNull(GraphQLString) },
            password: { type: new GraphQLNonNull(GraphQLString) }
        },
        resolve: Employee.updateEntry.bind(Employee)
    },
    deleteEmployee: {
        type,
        args: {
            id:     { type: GraphQLID },
          },
        resolve: Employee.deleteEntry.bind(Employee)
    },


}
