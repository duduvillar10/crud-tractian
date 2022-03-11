import { Column, CreateDateColumn, Entity, ObjectIdColumn } from 'typeorm';

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

export { Asset };
