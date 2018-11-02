import firebase from 'firebase'
import 'firebase/database'

const getNewKey = (uid) => {
  return firebase.database().ref().child(`dict/${uid}`).push().key
}

const MyDict = {
  listen(uid, callback) {
    firebase.database().ref(`dict/${uid}`).on('value', callback)
  },
  unListen(uid, callback) {
    firebase.database().ref(`dict/${uid}`).on('value', callback)
  },
  all(uid) {
    return firebase.database().ref(`dict/${uid}`).once('value')
  },
  insert(uid, dict) {
    const newKey = getNewKey(uid)
    dict.id = newKey
    return firebase.database().ref(`dict/${uid}/${newKey}`).update(dict)
  },
  update(uid, dict) {
    return firebase.database().ref(`dict/${uid}/${dict.id}`).set(dict)
  },
  delete(uid, id) {
    return firebase.database().ref(`dict/${uid}/${id}`).remove()
  }
}

export default MyDict
