import { randomUUID } from 'node:crypto'
import { sql } from './db.js'
import { title } from 'node:process'

export class DatabasePostgres {

    async list(search) {
        let videos

        if (search) {
            videos = await sql`select * from videos where title ilike ${'%' + search + '%'}`
        } else {
            videos = await sql`select * from videos`
        }

        return videos
    }

    async create(video) {

        const videoId = randomUUID()

        const { title, description, duration } = video

        await sql`insert into videos (id, title, description, duration) VALUES (${videoId}, ${title}, ${description}, ${duration})`
    }

    async update(id, video) {

        const videoId = id

        const { title, description, duration } = video

        await sql`update videos set title = ${title}, description = ${description}, duration = ${duration} where id = ${videoId}`

    }

    async delete(id) {

        const videoId = id

        await sql`delete from videos where id = ${videoId}`

    }
}