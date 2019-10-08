const fs = require('fs')

let arr = fs
  .readFileSync('./data/spreadsheet.tsv')
  .toString()
  .split('\n')
arr = arr.map(str => str.split('\t'))

arr = arr.map(a => {
  return {
    name: a[1],
    title: a[2],
    votes: a.slice(5)
  }
})

let votes = arr[2].votes.map((o, i) => {
  return {
    date: arr[0].votes[i],
    category: arr[1].votes[i],
    desc: arr[2].votes[i],
    title: arr[3].votes[i]
  }
})
arr = arr.slice(5)

let result = {
  votes: votes,
  council: arr
}
fs.writeFileSync('./data/votes.json', JSON.stringify(result, null, 2))
