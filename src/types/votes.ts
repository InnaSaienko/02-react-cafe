export type VoteType = "good" | "neutral" | "bad";

export type Votes = Record<VoteType, number>;

export interface VoteOptionsProps {
    onVote: (vote: VoteType) => void;
    onReset: () => void;
};

export interface VoteStatsProps {
    votes: Votes;
    totalVotes: number;
    positiveRate: number;
}