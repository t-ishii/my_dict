import firebase from 'firebase'
import 'firebase/database'

const database = () => firebase.database()

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
    return database().ref(`dict/${uid}/${dict.keyword}`).update(dict)
  },
  update(uid, dict) {
    return database().ref(`dict/${uid}/${dict.keyword}`).set(dict)
  },
  delete(uid, keyword) {
    return database().ref(`dict/${uid}/${keyword}`).remove()
  }
}

export default MyDict
