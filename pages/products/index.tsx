import { InferGetStaticPropsType, GetStaticProps } from 'next'
type Product = {
    name: string,
    price: number,
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://.../posts')
  const products: Product[] = await res.json()

  return {
    props: {
      products,
    },
  }
}

const Product = ({ products }: InferGetStaticPropsType<typeof getStaticProps />) => {
    return (
        <div>
            Enter
        </div>
    );
}

export default Product;