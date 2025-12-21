import type { Friend } from "../types";

export default function search(term: string, friends: Friend[], setDisplaying: (friends: Friend[]) => void): void {
    const filtered = friends.filter(friend =>
        friend.username.toLowerCase().includes(term.toLowerCase()) ||
        friend.displayName.toLowerCase().includes(term.toLowerCase())
    );
    setDisplaying(filtered);
}