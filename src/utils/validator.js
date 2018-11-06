const validateEmpty = (rule, value, callback) => {
  if (value === '') {
    callback(new Error(`Please input the ${rule.field}`))
  }
  callback()
}

const validateProhibitedChar = (rule, value, callback) => {
  const chars = [
    '\\u002e', // .
    '\\u0024', // $
    '\\u0023', // #
    '\\u005b', // [
    '\\u005d', // ]
    '\\u002f'  // /
  ]
  if (new RegExp(`[${chars.join('')}]`).test(value)) {
    callback(new Error(`Invalid character in ${rule.field}. ".$#[]/"`))
  }
  callback()
}

export default {
  validateEmpty,
  validateProhibitedChar
}
