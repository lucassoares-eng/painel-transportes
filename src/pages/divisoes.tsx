import { GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import PageHeading from '../components/PageHeading'
import TabelaDivisoes from '../components/TabelaDivisoes'
import { Divisao } from '../interfaces/divisoes'

export interface DivisaoProps {
  divisao: Divisao
  date: string
}

function painelDivisoes ({ divisao, date }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <PageHeading title = "Produtos em Divisão" data = { date }/>
      <TabelaDivisoes divisao = { divisao }/>
    </div>
  )
}

export const getStaticProps: GetStaticProps<DivisaoProps> = async (
    context: GetStaticPropsContext
  ) => {
  const url = process.env.URL_API_CC
  const res = await fetch(`${url}divisoes`)
  const data = await res.json()

  return {
    props: {
      divisao: data,
      date: new Date().toLocaleString(),
    },
    revalidate: 300
  }
}

export default painelDivisoes