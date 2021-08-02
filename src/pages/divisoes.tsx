import { GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import TabelaDivisoes from '../components/TabelaDivisoes'
import { Divisao } from '../interfaces/divisoes'

export interface DivisaoProps {
  divisao: Divisao
}

function painelDivisoes ({ divisao }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <TabelaDivisoes/>
    </div>
  )
}

export const getStaticProps: GetStaticProps<DivisaoProps> = async (
    context: GetStaticPropsContext
  ) => {
  const res = await fetch('http://localhost/teste-api?base=divisoes')
  const data = await res.json()

  return {
    props: {
      divisao: data,
    },
  }
}
  
export default painelDivisoes