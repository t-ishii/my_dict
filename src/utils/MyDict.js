import firebase from 'firebase'
import 'firebase/database'

const MyDict = {
  listen(uid, callback) {
    firebase.database().ref(`dict/${uid}`).on('value', callback)
  },
  limitToFirst(uid, size) {
    return firebase.database().ref(`dict/${uid}`).limitToFirst(size)
  },
  limitToLast(uid, size) {
    return firebase.database().ref(`dict/${uid}`).limitToLast(size)
  }
}

export default MyDict
