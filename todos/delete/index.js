let arc = require('@architect/functions')
let data = require('@begin/data')

exports.handler = async function destroy(req) {
  console.log('DELETE: ', req)
  let key = arc.http.helpers.bodyParser(req).key
  console.log('KEY: ', key)
  await data.destroy({
    table: 'todos',
    key
  })
  return {
    statusCode: 302,
    headers: {
      location: '/',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    }
  }
}
