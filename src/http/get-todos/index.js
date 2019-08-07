const data = require('@begin/data')

exports.handler = async function todos (req) {
  console.log(req)
  let todos = await data.get({
    table: 'todos'
  })

  return {
    status: 201,
    type: 'application/json; charset=utf8',
    body: JSON.stringify({
      todos
    })
  }
}
