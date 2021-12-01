import { InferGetServerSidePropsType } from 'next'

type Data = {
    name: string
 }

export const getServerSideProps = async () => {
  const res = await fetch('https://localhost:3000/api/post')
  const data: Data = await res.json()

  return {
    props: {
      data,
    },
  }
}

function Post({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    console.log(data);
    
    
}

export default Post