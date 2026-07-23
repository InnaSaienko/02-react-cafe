export type VoteType = "good" | "neutral" | "bad";

export type Votes = Record<VoteType, number>;

export interface VoteOptionsProps {
    onVote: (vote: "good" | "neutral" | "bad") => void;
    onReset: () => void;
};