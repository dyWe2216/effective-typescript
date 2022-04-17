interface IStateWithPop extends TState {
    population: number;
}
type TStateWithPop = IState & { population: number };