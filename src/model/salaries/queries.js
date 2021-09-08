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

      id:  { type: new GraphQLID },
                employeeId:  { type: new GraphQLID },
                  monthYear:  { type: new GraphQLString },
                    basic:  { type: new GraphQLFloat},
                      hra:  { type: new GraphQLFloat },
                      lta:  { type: new GraphQLFloat},
                      variable:  { type: new GraphQLFloat},
                      bonus:  { type: new GraphQLFloat },
                      TDS:  { type: new GraphQLFloat },
                      tax:  { type: new GraphQLFloat },
                      total:  { type: new GraphQLFloat },
                      workingDaysInMonth:  { type: new GraphQLFloat },
                      dateOfEntry:  { type: new GraphQLDate },
                      dateOfModify:  { type: new GraphQLDate },
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
