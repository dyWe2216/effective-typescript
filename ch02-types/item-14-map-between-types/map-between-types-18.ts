interface Options {
    width: number;
    height: number;
    color: string;
    labe: string;
}
interface OptionsUpdate {
    width?: number;
    height?: number;
    color?: string;
    labe?: string;
}
class UIWidget {
    constructor(init: Options) {}
    update(options: OptionsUpdate);
}