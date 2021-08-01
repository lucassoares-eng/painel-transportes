import { GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { Divisoes } from '../interfaces/divisoes'

const painelDivisoes = ({ divisao }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <h1>Painel de Divisões</h1>
)

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const res = await fetch('http://localhost/teste-api?base=divisoes')
  const data: Divisoes[] = await res.json()

  return {
    props: {
      divisao: data,
    },
  }
}
  
export default painelDivisoes