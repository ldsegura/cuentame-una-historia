interface IHistory {
    id: number;
    title: string;
    resumen: string;
    history: string;
    categories: Array<ICategory>,
    autor: User,
    aproved_at: Date;
    state: IStateHistory | null;
}


interface IStateHistory {
    id: number;
    name: string;
}