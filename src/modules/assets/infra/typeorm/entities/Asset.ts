import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, ObjectIdColumn} from 'typeorm';
import { Unit } from '../../../../unit/infra/typeorm/entities/Unit'
import{ v4 as uuidV4 } from 'uuid'


@Entity('assets')
class Asset {
    @ObjectIdColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    model: string;

    @Column()
    owner: string;

    @Column()
    status: string;

    @Column()
    health: number;

    @Column()
    image: string;

    @Column()
    unit_id: string;

    // @ManyToOne(() => Unit)
    // @JoinColumn({name: 'unit_id'})
    // unit: Unit;

    @CreateDateColumn()
    created_at: Date;
}

export { Asset }