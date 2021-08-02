import { GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import PageHeading from '../components/PageHeading'
import TabelaDivisoes from '../components/TabelaDivisoes'
import { Divisao } from '../interfaces/divisoes'

export interface DivisaoProps {
  divisao: Divisao
}

function painelDivisoes ({ divisao }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <PageHeading title = "Atendimento das Divisões" data = "02/08/2021" hora = "13:55"/>
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
    },
  }
}

export default painelDivisoes