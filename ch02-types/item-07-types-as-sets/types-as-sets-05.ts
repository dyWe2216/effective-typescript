type AB = 'A' | 'B';
type AB12 = 'A' | 'B' | 12;

const ab: AB = Math.random() < 0.5 ? 'A' : 'B';
const ab12: AB12 = ab;

declare let twelve1: AB12;
const back: AB = twelve1;