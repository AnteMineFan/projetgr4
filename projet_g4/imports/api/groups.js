//Import des méthodes
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Groups = new Mongo.Collection('groups');

//méthodes

Meteor.methods({
    'groups.create'(idUt){
        check(idUt, String);
        Groups.insert({
            admin:idUt,
            isCreated: true,
            name: 'Mon groupe',
        });
    }
})