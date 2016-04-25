
import * as  mongoose from 'mongoose';

export interface Person extends mongoose.Document{
     eyeColor:string;
     name:string;
     gender: string;
     company: string;
     email: string;
     phone: string;    
}

var personSchema = new mongoose.Schema({
    name: String,
    eyeColor: String,
    gender: String,
    company: String,
    email: String,
    phone: String
});

export const PersonRecord = mongoose.model<Person>('Person', personSchema);