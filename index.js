/*!
 * only
 * Copyright (c) 2012 TJ Holowaychuk <tj@vision-media.ca>
 * MIT Licensed
 */

function only (source, keys) {
  source = source || {}

  if (typeof keys === 'string') {
    keys = keys.split(/ +/)
  }

  return keys.reduce(function (subset, key) {
    if (source[key] == null) {
      return subset
    }

    subset[key] = source[key]
    return subset
  }, {})
}

module.exports = only
