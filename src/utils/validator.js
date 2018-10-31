const validateEmpty = (rule, value, callback) => {
  if (value === '') {
    callback(new Error(`Please input the ${rule.field}`))
  }
  callback()
}

export default {
  validateEmpty
}
