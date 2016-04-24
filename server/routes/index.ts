import { Express } from 'express';

export default function routes(app: Express) {

    app.get('/', (req, res) => {
        res.json({ test: "Hello World!!!" });
    });
}