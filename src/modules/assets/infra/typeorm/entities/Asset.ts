import{ v4 as uuidV4 } from 'uuid'

class Asset {
    id: string;

    name: string;

    description: string;

    model: string;

    owner: string;

    status: string;

    health: number;

    unit: string;

    image: string;

    created_at: Date;

    constructor() {
        if(!this.id){
            this.id = uuidV4();
        }
    }
}

export { Asset }