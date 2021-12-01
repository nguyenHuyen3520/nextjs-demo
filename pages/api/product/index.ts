var Mock = require('mockjs')
var Random = Mock.Random
export default function handler(req: any, res: any) {
  var data = Mock.mock({
    'list': [
      {
        'id': 1,
        'name': "quan tay",
        'price': "11000"
      },
      {
        'id': 2,
        'name': "ao thun",
        'price': "15000"
      },
      {
        'id': 3,
        'name': "ao thun",
        'price': "150003"
      },
      {
        'id': 4,
        'name': "ao thun",
        'price': "150004"
      }
    ]
  })
  if (req.method === 'GET') {
    res.status(200).json(data.list)
  } else {
    // Handle any other HTTP method
  }
}