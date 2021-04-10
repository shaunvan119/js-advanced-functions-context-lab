/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}


function createEmployeeRecord(employee) {
    const [firstName, familyName, title, payPerHour] = employee
    return {
        firstName,
        familyName,
        title,
        payPerHour,
        timeInEvents: [],
        timeOutEvents: []
    }
    
}


function createEmployeeRecords(employees) {
    return employees.map(employee => createEmployeeRecord(employee))
}

function createTimeInEvent( dateStamp) {
    const type = 'TimeIn'
    const [date, hour] = dateStamp.split(' ')
    this.timeInEvents.push({type, date, hour: parseInt(hour) })
    return this 
}
function createTimeOutEvent( dateStamp) {
    const type = 'TimeOut'
    const [date, hour] = dateStamp.split(' ')
    this.timeOutEvents.push({type, date, hour: parseInt(hour) })
    return this 
}

function hoursWorkedOnDate(dateStamp) {
    const clockIn = this.timeInEvents.find(event => event.date == dateStamp).hour
    const clockOut = this.timeOutEvents.find(event => event.date == dateStamp).hour
    return (clockOut - clockIn)/100
}

function wagesEarnedOnDate(date) {
    return this.payPerHour * hoursWorkedOnDate.call(this, date)
}

function calculatePayroll(employees) {
    return employees.reduce((accu, employee) => accu + allWagesFor.call(employee), 0)
}

function findEmployeeByFirstName(employees, query) {
    return employees.find(e => e.firstName == query)

}