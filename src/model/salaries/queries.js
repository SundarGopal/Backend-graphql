const {
  GraphQLList,
  GraphQLID,
  GraphQLString,
  GraphQLFloat,

} = require('graphql')
const type = require('./type')
const mutation = require('./mutations')
const Salary = require('./salaries')
var GraphQLDate = require('graphql-date');

// Defines the queries
module.exports = {
  salaries: {
    type: new GraphQLList(type),
    args: {

      id:  { type: GraphQLID },
                employeeId:  { type: GraphQLID },
                  monthYear:  { type: GraphQLString },
                    basic:  { type: GraphQLFloat },
                      hra:  { type: GraphQLFloat },
                      lta:  { type: GraphQLFloat },
                      variable:  { type: GraphQLFloat },
                      bonus:  { type: GraphQLFloat },
                      TDS:  { type: GraphQLFloat },
                      tax:  { type: GraphQLFloat },
                      total:  { type: GraphQLFloat },
                      workingDaysInMonth:  { type: GraphQLFloat },
                      dateOfEntry:  { type: GraphQLDate },
                      dateOfModify:  { type: GraphQLDate },
    },
    resolve: Salary.findMatching.bind(Salary)
  },
  salary: {
    type,
    args: {
      id: {
        type: GraphQLID
      }
    },
    resolve: Salary.getByID.bind(Salary)
  }
}
