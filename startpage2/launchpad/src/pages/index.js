import * as React from "react"
import '../sass/index.scss'
import { Temporal, toTemporalInstant } from "@js-temporal/polyfill"
Date.prototype.toTemporalInstant = toTemporalInstant;

export default function Home() {

  const name = 'Yuno';
  return (
  <div id='content'>
    <div id='left-half'>
      <h1 id='clock'>{now()}</h1>
      <h2 id='greeting'>Hello, {name}</h2>
      <h2>{time}</h2>
      <h2>{}</h2>
    </div>
    <div id='right-half'>
    </div>
  </div>
  )
}

const now = () => {
  // TODO
  return Temporal.Now.plainTimeISO().toString;
}

const UpdateTodo = () => {
  // TODO
  return;
}