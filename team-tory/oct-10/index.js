const somehow = require('somehow')

let w = somehow({
  height: 200,
  aspect: 'widescreen'
})

w.line().set([[1, 20], [2, 25], [3, 22]])
w.fit()

let el = document.querySelector('#stage')
el.innerHTML = w.build()
