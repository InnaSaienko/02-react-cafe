import css from './App.module.css'
import {useState} from "react";
import type {Votes} from "../../types/votes.ts";
import CafeInfo from "../CafeInfo/CafeInfo.tsx";

const DEFAULT_VOTES = {
  good: 0,
  neutral: 0,
  bad: 0,
}

function App() {
  const [votes, setVotes] = useState<Votes>(DEFAULT_VOTES)
  const totalVotes = votes.good + votes.neutral + votes.bad;

  return (
    <div className={css.app}>
      {totalVotes}
      <CafeInfo />
    </div>
  )
}

export default App
