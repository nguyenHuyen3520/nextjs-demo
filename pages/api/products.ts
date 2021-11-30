// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Product = {
    name: string,
    price: number,
}

const products: Product[] = [
    {
        name: 'ao 1',
        price: 10000,
    },
    {
        name: 'ao 2',
        price: 20000,
    },
    {
        name: 'ao 3',
        price: 30000,
    },
    {
        name: 'ao 4',
        price: 40000,
    },
    {
        name: 'ao 5',
        price: 50000,
    }
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<products>
) {
  res.status(200).json({ name: 'John Doe' })
}
