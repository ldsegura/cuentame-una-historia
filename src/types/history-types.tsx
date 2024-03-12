interface IHistory {
    id: number;
    title: string;
    resumen: string;
    history: string;
    categories: Array<ICategory>,
    autor: User,
    created_at: Date;
}