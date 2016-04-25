import { Express } from 'express';
import { FileLoader } from '../helpers';
import { Person } from '../models';

export default function Files(app: Express) {

    app.get('/people-file', async (req, res) => {

        try {
            var fileLoader = new FileLoader();

            let people = await fileLoader.getPeople()

            res.json(people);
        }
        catch (e) {//todo create error middleware
            res.json({error: e});
        }
    });
}