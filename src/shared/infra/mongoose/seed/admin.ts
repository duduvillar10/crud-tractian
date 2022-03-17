import { hash } from 'bcrypt';
import { User } from '../../../../modules/users/infra/entities/User';
import createConnection from '../index';

async function create() {
  createConnection();

  const password = await hash('admin', 8);

  const user = await User.create({
    name: 'Admin',
    email: 'admin@admin.com',
    password,
    isAdmin: true,
    cpf: '0000000000',
    company: '000000000000',
  });

  await user.save();
}

create().then(() => console.log('User admin created!'));
