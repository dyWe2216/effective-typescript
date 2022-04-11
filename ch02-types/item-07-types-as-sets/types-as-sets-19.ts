type T = Exclude(string|Date, string|number);
type NonZeroNums = Exclude<number, 0>;