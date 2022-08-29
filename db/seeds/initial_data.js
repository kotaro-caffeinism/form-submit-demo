/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("data").del();
  await knex.schema.raw("SELECT SETVAL ('data_id_seq', 1, false)");
  await knex("data").insert([
    { id: 1, contents: "hogehoge" },
    { id: 2, contents: "fugafuga" },
    { id: 3, contents: "piyopiyo" },
  ]);
};
