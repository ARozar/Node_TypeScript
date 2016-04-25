import { Express } from 'express';
import { PersonRecord } from '../models';

export default function Person(app: Express) {


    app.get('/Person', async(req, res) => {
        var people = await PersonRecord.find({});
        
        res.json(people);
    });
    /* Create */
    app.post('/Person', (req, res) => {
        var newPerson = new PersonRecord(req.body);
        newPerson.save(function (err) {
            if (err) {
                res.json({ info: 'error during Person create', error: err });
                return;
            };
            res.json({ info: 'person created successfully' });
        });
    });
}