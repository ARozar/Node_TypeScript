import { Express } from 'express';
import Files from './files';
import Person from './Person';

export default function routes(app: Express) {

    Person(app);
    Files(app);
}