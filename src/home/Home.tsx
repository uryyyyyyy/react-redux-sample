import * as React from 'react'
const styles = require('./style.scss')

export function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p className={styles.App}>{"it's home."}</p>
    </div>
  )
}
