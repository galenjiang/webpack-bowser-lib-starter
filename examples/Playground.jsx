import React, { useEffect } from 'react'
import hello from '../dist'

export function Playground() {
  useEffect(() => {
    hello()
  })
  return <div>hello my-lib</div>
}
