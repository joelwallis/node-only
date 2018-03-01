# @joelwallis/only

Return whitelisted properties of an object.

## Installation

```
$ npm install @joelwallis/only
```

## API

An array or space-delimited string may be given:

```js
var obj = {
  name: 'tobi',
  last: 'holowaychuk',
  email: 'tobi@learnboost.com',
  _id: '12345'
}

var user = only(obj, 'name last email')
```

You can also use array form:

```js
var user = only(obj, ['name', 'last', 'email'])
```

yields:

```js
{
  name: 'tobi',
  last: 'holowaychuk',
  email: 'tobi@learnboost.com'
}
```

## License

[MIT](License)
