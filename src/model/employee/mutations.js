const {
    GraphQLNonNull,
    GraphQLString,
    GraphQLList,
    GraphQLID,
    GraphQLFloat
} = require('graphql')
const type = require('./type')
const Attendance = require('./attendance')
var GraphQLDate = require('graphql-date');

// Defines the mutations
module.exports = {
    addAttendance: {
        type,
        args: {
          id: { type: new GraphQLNonNull(GraphQLString) },
          email: { type: new GraphQLNonNull(GraphQLString) },
          address: { type: new GraphQLNonNull(GraphQLString) },
          dateOfBirth:  { type: new GraphQLNonNull(GraphQLDate) },
          dateOfJoining:  { type: new GraphQLNonNull(GraphQLDate) },
          education: { type: new GraphQLNonNull(GraphQLString) },
          type: { type: new GraphQLNonNull(GraphQLString) },
          role: { type: new GraphQLNonNull(GraphQLString) },
          password: { type: new GraphQLNonNull(GraphQLString) },
          dateOfEntry:  { type: new GraphQLNonNull(GraphQLDate) },
          dateOfModify:  { type: new GraphQLNonNull(GraphQLDate) },

        },
        resolve: Employee.createEntry.bind(Employee)
    },
    updateEmployee: {
        type,
        args: {
            id:     { type: GraphQLID },
            name: { type: new GraphQLNonNull(GraphQLString) },
            email: { type: new GraphQLNonNull(GraphQLString) },
            address: { type: new GraphQLNonNull(GraphQLString) },
            dateOfBirth:  { type: new GraphQLNonNull(GraphQLDate) },
            dateOfJoining:  { type: new GraphQLNonNull(GraphQLDate) },
            education: { type: new GraphQLNonNull(GraphQLString) },
            type: { type: new GraphQLNonNull(GraphQLString) },
            role: { type: new GraphQLNonNull(GraphQLString) },
            password: { type: new GraphQLNonNull(GraphQLString) },
            dateOfEntry:  { type: new GraphQLNonNull(GraphQLDate) },
            dateOfModify:  { type: new GraphQLNonNull(GraphQLDate) },
        },
        resolve: Employee.updateEntry.bind(Employee)
    },
    deleteEmployee: {
        type,
        args: {
            id:     { type: GraphQLID },
          },
        resolve: Customer.deleteEntry.bind(Customer)
    },


}
