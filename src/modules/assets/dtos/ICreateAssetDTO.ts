interface ICreateAssetDTO {
    name: string;
    description: string;
    model: string;
    owner: string;
    status: string;
    health: number;
    unit: string;
}
export { ICreateAssetDTO }