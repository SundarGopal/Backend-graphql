const { GraphQLObjectType } = require('graphql')
const employeeMutation = require('../model/employee/mutations')
const salariesMutation = require('../model/salaries/mutations')
const leavesMutation = require('../model/leaves/mutations')
const attendancesMutation = require('../model/attendance/mutations')

module.exports = new GraphQLObjectType({
    name: 'RootMutationsType',
    fields: {
        addEmployee: employeeMutation.addEmployee,
        updateEmployee: employeeMutation.updateEmployee,
        deleteEmployee: employeeMutation.deleteEmployee,
        addSalary: salariesMutation.addSalary,
        updateSalary:salariesMutation.updateSalary,
        deleteSalary:salariesMutation.deleteSalary,
        addLeave: leavesMutation.addLeave,
        updateLeave: leavesMutation.updateLeave,
        deleteLeave: leavesMutation.deleteLeave,
        addAttendance: attendancesMutation.addAttendance,
        updateAttendance: attendancesMutation.updateAttendance,
        deleteAttendance: attendancesMutation.deleteAttendance

    }
})
