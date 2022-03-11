import{ v4 as uuidV4 } from 'uuid'

class Asset {
    id: string;

    name: string;

    description: string;

    model: string;

    status: string;

    health: number;

    constructor() {
        if(!this.id){
            this.id = uuidV4();
        }
    }
}

export { Asset }