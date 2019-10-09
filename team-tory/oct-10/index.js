const somehow = require('somehow')
// const color = require('spencer-color')
// const colors = [].concat(
//   color.combos.ken,
//   color.combos.palmer,
//   color.combos.roma,
//   color.combos.dupont,
//   color.combos.barrow
// )
// console.log(JSON.stringify(colors))

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

const bump = {
  'Frances Nunziata': 1,
  'Gary Crawford': 2,
  'Brad Bradford': -3,
  'Paul Ainslie': -2,
  'Cynthia Lai': -2,
  'Jim Karygiannis': 2,
  'Paula Fletcher': -2,
  'Shelley Carroll': -1,
  'Anthony Perruzza': -2,
  'Denzil Minnan-Wong': -2,
  'Mike Layton': 2,
  'Kristyn Wong-Tam': 1,
  'Jaye Robinson': -2
}

const moveUp = {
  'Gary Crawford': true,
  // 'Paul Ainslie': true
  'Michael Thompson': true,
  'Jaye Robinson': true,
  'Jim Karygiannis': true,
  'Kristyn Wong-Tam': true
}

data.council.forEach((person, p) => {
  let line = w
    .snake()
    .straight()
    .width(6)
    .grow(true)
  if (moveUp[person.name]) {
    line.dy(-0.4)
  }
  let sum = 50
  let votes = person.votes.map((vote, i) => {
    if (vote === 'Yes') {
      sum += 1
    } else {
      sum -= 1
    }
    return [data.votes[i].date, sum]
  })
  // remove multiple votes per day
  votes = votes.filter((v, i) => {
    if (votes[i + 1] && votes[i + 1][0] === v[0]) {
      return false
    }
    return true
  })

  line.set(votes)
  // line.set([[1, 20], [2, Math.random() * 100], [3, 22]])
  line.color(person.color)
  let y = -3
  if (bump[person.name] !== undefined) {
    y += bump[person.name]
  }
  w.text(person.name)
    .after(votes[votes.length - 1][0], sum)
    .size(2)
    .dy(y)
    .color(person.color)
})

w.yAxis.suffix('%')
w.y.fit(35, 95)
w.x.fit()

let el = document.querySelector('#stage')
el.innerHTML = w.build()
