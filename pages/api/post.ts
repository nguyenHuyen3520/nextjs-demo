var Mock = require('mockjs')
var Random = Mock.Random
export default function handler(req: any, res: any) {
  var data = Mock.mock({    
    'post|1-10': [{        
      'id|+1': 1,
      'name': Random.name(),
    }]
})
  if (req.method === 'GET') {
    res.status(200).json(data.post)
  } else {
    // Handle any other HTTP method
  }
}