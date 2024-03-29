const conn = require('./connection');

const findAll = () => conn.execute('SELECT * FROM tasks');

const findById = (id) => conn.execute('SELECT * FROM tasks WHERE id = ?', [id]);

const insert = ({ nome, descricao }) => 
  conn.execute(
    `INSERT INTO tasks 
  (nome, descricao) VALUES(?, ?)`,
    [nome, descricao],
  );

const update = (id, { nome, descricao }) =>
  conn.execute('UPDATE tasks SET nome = ?, descricao = ? WHERE id = ?', [
    nome,
    descricao,
    id,
  ]);

const remove = (id) => conn.execute('DELETE FROM tasks WHERE id = ?', [id]);

module.exports = {
  insert,
  update,
  remove,
  findAll,
  findById,
};
