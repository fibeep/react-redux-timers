import React from 'react'
import { useSelector } from 'react-redux'
import { selectTimer } from '../actions'

export default function ListTimers() {
  const timers = useSelector((state) => state.timers);

  return (
    <div>
      {timers.map((timer, i) => {
        // Here the render method maps `this.props.timers` to:
        return (
          <div>
            <h2>{timer.name}</h2>
            <h1>{timer.time}</h1>
            <button>Start</button>
          </div>
        );
      })}
    </div>
  );
}