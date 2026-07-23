import css from "./VoteOptions.module.css";
import type {VoteOptionsProps} from "../../types/votes.ts";
import type {ReactElement} from "react";


const VoteOptions = ({onVote, onReset}: VoteOptionsProps): ReactElement => {
    return (
        <div className={css.container}>
            <button className={css.button} onClick={() => onVote("good")}>Good</button>
            <button className={css.button} onClick={() => onVote("neutral")}>Neutral</button>
            <button className={css.button} onClick={() => onVote("bad")}>Bad</button>
            <button className={css.button} onClick={onReset}>Reset</button>
        </div>
    )
}

export default VoteOptions;