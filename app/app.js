import React from 'react'
import ReactDom from 'react-dom'
import App from './App.jsx'

// ReactDom.hydrate(
// 		<App/>,
// 		document.getElementById('root')
// )
console.log(module.hot)
ReactDom.render(
		<App/>,
		document.getElementById('root')
)