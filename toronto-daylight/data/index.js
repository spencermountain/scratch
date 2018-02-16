let months = [
  require('./1'),
  require('./2'),
  require('./3'),
  require('./4'),
  require('./5'),
  require('./6'),
  require('./7'),
  require('./8'),
  require('./9'),
  require('./10'),
  require('./11'),
  require('./12'),
]

let all = []
months.forEach((month) => {
  month.forEach((day) => {
    if (day[8]) {
      all.push({
        sunrise: day[8], //civil twilight
        sunset: day[9],
      })
    }
  })
})

console.log(JSON.stringify(all, null, 2))
// console.log(all.length)
