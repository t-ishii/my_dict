import firebase from 'firebase'
import 'firebase/database'

const database = () => firebase.database()

const getNextKey = (uid) => {
  return database().ref().child(`dict/${uid}`).push().key
}

const MyDict = {
  listen(uid, callback) {
    database().ref(`dict/${uid}`).orderByKey().on('value', callback)
  },
  unListen(uid, callback) {
    database().ref(`dict/${uid}`).off('value', callback)
  },
  all(uid) {
    return database().ref(`dict/${uid}`).once('value')
  },
  insert(uid, dict) {
    dict.id = getNextKey(uid)
    return database().ref(`dict/${uid}/${dict.id}`).update(dict)
  },
  update(uid, dict) {
    return database().ref(`dict/${uid}/${dict.id}`).set(dict)
  },
  delete(uid, id) {
    return database().ref(`dict/${uid}/${id}`).remove()
  }
}

export default MyDict
