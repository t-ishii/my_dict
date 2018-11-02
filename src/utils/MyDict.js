import firebase from 'firebase'
import 'firebase/database'

const MyDict = {
  listen(uid, callback) {
    firebase.database().ref(`dict/${uid}`).on('value', callback)
  },
  unListen(uid, callback) {
    firebase.database().ref(`dict/${uid}`).off('value', callback)
  },
  all(uid) {
    return firebase.database().ref(`dict/${uid}`).once('value')
  },
  insert(uid, dict) {
    return firebase.database().ref(`dict/${uid}/${dict.keyword}`).update(dict)
  },
  update(uid, dict) {
    return firebase.database().ref(`dict/${uid}/${dict.keyword}`).set(dict)
  },
  delete(uid, keyword) {
    return firebase.database().ref(`dict/${uid}/${keyword}`).remove()
  }
}

export default MyDict
