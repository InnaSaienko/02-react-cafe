import css from "./VoteOptions.module.css";
import type {VoteOptionsProps, VoteType} from "../../types/votes.ts";
import type {ReactElement} from "react";

const VoteOptions = ({onVote, onReset}: VoteOptionsProps): ReactElement => {
    const options: VoteType[] = ["good", "neutral", "bad"];

    return (
        <div className={css.container}>
            {options.map(option => (
                <button
                    key={option}
                    className={css.button}
                    onClick={() => onVote(option)}
                >
                    {option}
                </button>
            ))}
            <button className={`${css.button} ${css.reset}`} onClick={onReset}>Reset</button>
        </div>
    )
}

export default VoteOptions;