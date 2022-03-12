import { connect } from 'mongoose';

export default async (): Promise<void> => {
  await connect(
    'mongodb+srv://duduvillar10:test@tractian-database.pn7y1.mongodb.net/tractian-database?retryWrites=true&w=majority',
  );
};
