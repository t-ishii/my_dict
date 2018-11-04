
const getLocationHash = () => location.hash.replace('#', '').replace(/\?.+$/, '')

export default {
  getLocationHash
}
