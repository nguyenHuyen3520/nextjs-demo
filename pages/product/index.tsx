import { InferGetStaticPropsType } from 'next'

type Product = {
  id: number,
  name: string
  price: number
}

export const getStaticProps = async (context: any) => {
  require('dotenv').config()
  console.log(context);
  // const res = await fetch(`${process.env.API_URL}`)
  const res = await fetch("http://localhost:3000/api/product")
  const products: Product[] = await res.json()
  return {
    props: {
      products,
    },
    revalidate: 5,
  }
}

function Products({ products }: InferGetStaticPropsType<typeof getStaticProps>) {
  const data: Product[] = products

  return (
    <div>
      <ul>
        {
          products.map((item, index) => (
            <li key={index}> {item.name} - { item.price} </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Products