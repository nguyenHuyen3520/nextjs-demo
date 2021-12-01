import { InferGetStaticPropsType, GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
type product = {
    id: number,
    name: string,
    price: number,
}

type params = {
    id: number
}

function Product({ product }: InferGetStaticPropsType<typeof getStaticProps>) {
    const data: product = product

    return (
        <div>
            <div>{ data.name } </div> 
            <div>{data.price}</div>    
        </div>
    )
}



export const getStaticPaths: GetStaticPaths= async() => {

  const res = await fetch(`${process.env.API_URL}`)
  const products: product[] = await res.json()


  const paths = products.map((product) => ({
    params: { id: product.id.toString() }
  }))

  return { paths, fallback: false }
}


export async function getStaticProps({ params}: any) {

  const res = await fetch(`${process.env.API_URL}`)
  const product = await res.json()
  var result: product = product.find(({ p }: product) => {
    if (p.id) {
      return p.id === params.id
    }
    return { id: 99, name: "false"}
  })

  return { props: { result } }
}

export default Product

