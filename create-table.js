import { sql } from './db.js'

sql`CREATE TABLE videos (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    duration INT
);`.then(() => {
    console.log('Tabela criada!')
})
