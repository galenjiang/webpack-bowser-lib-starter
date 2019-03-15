import React from 'react'
import { render } from 'react-dom'
import { Playground } from './Playground'
const body = document.body
const root = document.createElement('div')
document.body.insertBefore(root, body.children[0])

render(<Playground />, root)
