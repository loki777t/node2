const { users } = require('./data');

function getAllUsers() {
  if (users.length === 0) {
    throw new Error('Пользователей еще нет');
  }
  return users;
}

function getUserById(id) {
  const user = users.find(u => u.id === Number(id));
  if (!user) {
    throw new Error('Пользователь не найден');
  }
  return user;
}

function getUserByLogin(login) {
  const user = users.find(u => u.login === login);
  if (!user) {
    throw new Error('Пользователь не найден');
  }
  return user;
}

function deleteUserById(id) {
  const index = users.findIndex(u => u.id === Number(id));
  if (index === -1) {
    throw new Error('Пользователь не найден');
  }
  const deletedUser = users.splice(index, 1)[0];
  return `Пользователь ${deletedUser.login} успешно удален`;
}

module.exports = {
  getAllUsers,
  getUserById,
  getUserByLogin,
  deleteUserById
};
