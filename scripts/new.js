const sh = require('shelljs')
let name = process.argv.slice(2).join(' ')
// const year = new Date().getFullYear()

let dir = `./${name}`
console.log(`creating: ${dir}`)
sh.mkdir(dir)

// package.json
sh.cat(__dirname + '/defaults/package.json').to(dir + '/package.json')

// index.html
sh.cat(__dirname + '/defaults/index.html').to(dir + '/index.html')

// index.js
sh.cat(__dirname + '/defaults/index.js').to(dir + '/index.js')
//thumb.png
sh.cp(__dirname + '/defaults/index.js', dir)

// spencer.min.css
sh.mkdir(dir + '/assets')
sh.cp('./node_modules/spencer-css/builds/spencer.min.css', dir + '/assets')

sh.mkdir(dir + '/scripts')

// setTimeout(() => {
//   sh.exec(`rm -rf ${dir}`)
// }, 7000)
// sh.cd(dir)
