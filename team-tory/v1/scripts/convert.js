const fs = require('fs')
const colors = [
  '#cc7066',
  '#2D85A8',
  '#c67a53',
  '#8BA3A2',
  '#dfb59f',
  '#C4ABAB',
  '#cc7066',
  '#335799',
  '#7f9c6c',
  '#F2C0BB',
  '#9c896c',
  '#2D85A8',
  '#8a849a',
  '#b5b0bf',
  '#D68881',
  '#d7d5d2',
  '#8BA3A2',
  '#C4ABAB',
  '#6accb2',
  '#705E5C',
  '#cc8a66',
  '#cc7066',
  '#7f9c6c',
  '#6699cc',
  '#914045',
  '#cc7066',
  '#cc8a66',
  '#603a39',
  '#705E5C',
  '#8BA3A2'
]

let arr = fs
  .readFileSync('./data/spreadsheet.tsv')
  .toString()
  .split('\n')
arr = arr.map(str => str.split('\t'))

arr = arr.map((a, i) => {
  return {
    name: a[1],
    title: a[2],
    ford2014: a[3],
    tory2018: a[4],
    i: i,
    color: colors[i],
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
