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
