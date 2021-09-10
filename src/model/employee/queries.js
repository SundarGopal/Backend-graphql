const {
  GraphQLList,
  GraphQLID,
  GraphQLString,
  GraphQLFloat,
} = require("graphql");
const type = require("./type");
const mutation = require("./mutations");
const Employee = require("./employee");
var GraphQLDate = require("graphql-date");

// Defines the queries
module.exports = {
  employee: {
    type: new GraphQLList(type),
    args: {
      id:  { type: GraphQLID },
      name: {
        type: GraphQLString,
      },
      email: {
        type: GraphQLString,
      },
      address: {
        type: GraphQLString,
      },
      dateOfBirth: {
        type: GraphQLDate,
      },
      dateOfJoining: {
        type: GraphQLDate,
      },
      education: {
        type: GraphQLString,
      },
      type: {
        type: GraphQLString,
      },
      role: {
        type: GraphQLString,
      },
      password: {
        type: GraphQLString,
      },
      dateOfEntry: {
        type: GraphQLDate,
      },
      dateOfModify: {
        type: GraphQLDate,
      },
    },
    resolve: Employee.findMatching.bind(Employee),
  },
  employer: {
    type,
    args: {
      id: {
        type: GraphQLID,
      },
    },
    resolve: Employee.getByID.bind(Employee),
  },

  signIn:{
    type : new GraphQLList(type),
    args: {
        email: { type: GraphQLString,},
        password:{type:GraphQLString,},
        role:{type:GraphQLString,}
    },
    resolve: Employee.signIn.bind(Employee)
}
};
