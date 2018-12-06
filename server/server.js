const express = require('express')
const ReactSSR = require('react-dom/server')
const path = require('path')
const fs = require('fs')
const serverEntry = require('../dist/server-entry').default

const template = fs.readFileSync(path.join(__dirname,'../dist/index.html'),'utf-8')

const app = express()
//这里不写 === 会报doctyoe html 那里的错误
app.use('/public', express.static(path.join(__dirname, '../dist')))
console.log(serverEntry)

app.get('*',function(req,res){
	const appString = ReactSSR.renderToString(serverEntry)
	
	res.send(template.replace('<app></app>',appString))
})

app.listen(3333,function(){
	console.log('listening 3333')
})