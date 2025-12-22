import { useState } from "react";
import type { Friend, dataSnapshot } from "../types";
import { FRIENDS, BLOCKED, REMOVED, PENDING } from "../enums";

const [parsedJSON, setParsedJSON] = useState<dataSnapshot | null>(null)

export default function search(term: string, friends: Friend[], setDisplaying: (friends: Friend[]) => void): void {
    const filtered = friends.filter(friend =>
        friend.username.toLowerCase().includes(term.toLowerCase()) ||
        friend.displayName.toLowerCase().includes(term.toLowerCase())
    );
    setDisplaying(filtered);
}

export function filterByGroup(enum_group: string, all: Friend[], 
                            setDisplaying: (friends: Friend[]) => void){
    
    const filtered = 

}