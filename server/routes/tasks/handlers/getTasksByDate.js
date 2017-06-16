const Task = require('../../../models/Task')
const moment = require('moment')

function getTasksByDate (req, res) {
  let { timestamp: dayToLocate } = req.params
  formattedDayToLocate = moment(+dayToLocate).format('DD/MM/YYYY')

  // const dayAfter = moment(dayToLocate).add(1, 'day').valueOf() + 1

  // console.log('dayToLocate => ' + dayToLocate);
  // console.log('dayAfter => ' + dayAfter);

  const query = {
    'dateRealized': formattedDayToLocate
  }
  Task.find(query)
    .then(task => {
      res.json(task)
    })
}

module.exports = getTasksByDate
