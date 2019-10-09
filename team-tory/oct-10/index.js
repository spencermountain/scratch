const somehow = require('somehow')
const color = require('spencer-color')
const colors = [].concat(
  color.combos.ken,
  color.combos.palmer,
  color.combos.roma,
  color.combos.dupont,
  color.combos.barrow
)
const data = require('./data/votes')

let w = somehow({
  height: 400,
  aspect: '4:3'
})

w.line()
  .dotted(true)
  .width(2)
  .color('lighter')
  .set([[data.votes[0].date, 50], [data.votes[data.votes.length - 1].date, 50]])

// w.line()
//   .dotted(true)
//   .width(2)
//   .color('lighter')
//   .set([['march 7th 2019', 35], ['march 7th 2019', 90]])

w.text(['13 items', 'March 7th'])
  .color('light')
  .dx(-3)
  .before('march 7th', 45)

data.council.forEach((person, p) => {
  let line = w
    .line()
    .straight()
    .width(5)
  let sum = 50
  let votes = person.votes.map((vote, i) => {
    if (vote === 'Yes') {
      sum += 1
    } else {
      sum -= 1
    }
    return [data.votes[i].date, sum]
  })
  line.set(votes)
  // line.set([[1, 20], [2, Math.random() * 100], [3, 22]])
  line.color(colors[p])
  w.text(person.name)
    .after(votes[votes.length - 1][0], sum)
    .font(6)
    .dy(-7)
    .color(colors[p])
})

w.y.fit(35, 95)
w.x.fit()

let el = document.querySelector('#stage')
el.innerHTML = w.build()
