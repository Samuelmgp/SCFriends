import type { dataSnapshot } from "../types";
import { toSnapshot } from "./parseFriends";

type props = {
    jsonFile: File;
    onParsed: (data: dataSnapshot) => void;
}

export function parseJSON({jsonFile, onParsed}: props): void{
    const reader = new FileReader();
    
    reader.onload = () => {
        try {
            const parsed = JSON.parse(reader.result as string);
        
            const dataSnapshot: dataSnapshot = toSnapshot(jsonFile.name, parsed);

            onParsed(dataSnapshot);
        }catch (error) {
            console.warn('Could not parse: ', error);
            return {name: "Unaccessible", created: "Unknown", Friends: [], Blocked: [], Deleted: [], Pending: []} as dataSnapshot;
        }
    }

    reader.readAsText(jsonFile);
};