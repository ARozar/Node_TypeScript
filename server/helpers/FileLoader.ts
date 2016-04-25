import * as fs from 'fs';
import * as Path from 'path';
import { Person } from '../models';
import { getServerRoot } from '../helpers';

export class FileLoader {

    getPeople = () => new Promise<Person[]>(this.readFileAsync);

    applyHandleFileResponse =
    (resolve: (value?: Person[] | PromiseLike<Person[]>) => void, reject: (reason?: string) => void) =>
        (err: NodeJS.ErrnoException, data: string) => {
            //todo use string constant
            if (err && err.code && "ENOENT" === err.code) {
                reject("File does not exist");
                
            } else {
                
                var people: Person[] = JSON.parse(data);

                resolve(people);
            }
        }

    private readFileAsync = (resolve: (value?: any | PromiseLike<Person>) => void, reject: (reason?: string) => void): void => {

        var seperator = Path.sep;

        var filePath = `${getServerRoot()}${seperator}data${seperator}people.json`;

        fs.readFile(filePath, 'utf-8', this.applyHandleFileResponse(resolve, reject));
    }
}