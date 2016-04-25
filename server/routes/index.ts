import { Express } from 'express';
import { FileLoader } from '../helpers';
import { Person } from '../models';

export default function routes(app: Express) {

    app.get('/people', (req, res) => {
        
        var fileLoader = new FileLoader();
        
        fileLoader.getPeople()
        .then((people:Person[])=>res.json(people))
        .catch((message: string) =>{res.json({error:message})});
    });
}