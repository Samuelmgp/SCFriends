import type { dataSnapshot, Friend } from '../types';

export function parseJSON(jsonFile: File): dataSnapshot | null {
    const reader = new FileReader();
    
    reader.onload = () => {
        try {
            console.log(reader.result);
            const parsed = JSON.parse(reader.result as string);

            return parsed;
        }catch (error) {
            console.warn('Could not parse: ', error);
        }
    }

    reader.readAsText(jsonFile);
    return null;
};