import React from 'react';
import FirebaseApi from './api.js';
import {config} from './constants-test.js';

let fb = new FirebaseApi(config);
let examplePerson = {
  firstName: 'Ryan',
  lastName: 'Conaway'
}

it('adds a person with an autogen key to the database ', async () => {
  let {key, person} = await fb.addPerson(examplePerson);

  expect.assertions(2);
  expect(key).toBeTruthy();
  expect(person).toEqual(examplePerson);
});

it('Can obtain a person by key', async () => {
  let {key:origKey, person:origPerson} = await fb.addPerson(examplePerson);

  let actual = await fb.getPerson(origKey);
  expect.assertions(1);
  expect(actual).toEqual(examplePerson);
})
