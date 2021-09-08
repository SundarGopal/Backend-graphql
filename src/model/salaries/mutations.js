const {
    GraphQLNonNull,
    GraphQLString,
    GraphQLList,
    GraphQLID,
    GraphQLFloat
} = require('graphql')
const type = require('./type')
const Salary = require('./salaries')
var GraphQLDate = require('graphql-date');

// Defines the mutations
module.exports = {
    addSalary: {
        type,
        args: {

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
                      workingDaysInMonth:  { type: new GraphQLNonNull(GraphQLFloat) }
        },
        resolve: Salary.createEntry.bind(Salary)
    },
    updateSalary: {
        type,
        args: {
          id:  { type: GraphQLID },
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
                workingDaysInMonth:  { type: new GraphQLNonNull(GraphQLFloat) }

        },
        resolve: Salary.updateEntry.bind(Salary)
    },
    deleteSalary: {
        type,
        args: {
            id:     { type: GraphQLID },
          },
        resolve: Salary.deleteEntry.bind(Salary)
    },


}
