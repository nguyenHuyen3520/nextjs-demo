var Mock = require('mockjs')
var Random = Mock.Random
export default function handler(req: any, res: any) {
  var data = Mock.mock({    
    'list|1-10': [{        
      'id|+1': 1,
      'name': Random.name(),
      'price': Random.integer(10000,100000)
    }]
})
  if (req.method === 'GET') {
    res.status(200).json(data.list)
  } else {
    // Handle any other HTTP method
  }
}