import firebase from 'firebase';

export default class FirebaseApi {
    constructor(config) {
      firebase.initializeApp(config);
      this.db = firebase.database();
    };


    addPerson(person){
      return this.db.ref('people').push(person).once('value')
      .then(snapShot => {
        let ele = {
          key: snapShot.key,
          person: snapShot.val(),
        }
        return ele;
      })
    };

    getPerson(key){
      return this.db.ref('people/'+key).once('value')
      .then(snapshot => {
        return snapshot.val();
      })
    }


}
