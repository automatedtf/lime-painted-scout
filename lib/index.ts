import firstAdjectives from "./first-adjectives";
import secondAdjectives from "./second-adjectives";
import nouns from "./nouns";

function hashCode(str: String) {
    let hash = 0;
    if (str.length === 0) return hash;

    for (let i = 0; i < str.length; i++) {
        let chr = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }

    return hash;
};

export default function tf2Hash(input) {
    const hash = hashCode(input);
    const firstAdjective = firstAdjectives[hash % firstAdjectives.length];
    const secondAdjective = secondAdjectives[hash % secondAdjectives.length];
    const noun = nouns[hash % nouns.length];

    return `${firstAdjective}-${secondAdjective}-${noun}`;
}