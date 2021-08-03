import { Divisao } from '../interfaces/divisoes';

export default function TabelaDivisoes( { divisao } ) {
  return (
    <div className="box-border h-screen-90 flex flex-col overflow-auto">
      <div className="-my-2">
        <div className="py-2 align-middle inline-block">
          <div className="shadow border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="sticky top-0 bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Data
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Produto
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    UF
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Centro
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Divisão
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Pedidos Abertos
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Em Pedido
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Remessas
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Em Remessa
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {divisao.map((item: Divisao) => (
                  <tr key={ item.data_divisao }>
                    <td className="px-4 py-2 w-10 whitespace-nowrap text-sm text-gray-500">{ item.data_divisao }</td>
                    <td className="px-6 py-2 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{ item.cdgproduto }</div>
                          <div className="text-xs text-gray-500">{ item.produto }</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500">{ item.uf }</td>
                    <td className="px-6 py-2 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{ item.cdgcentrobi }</div>
                      <div className="text-xs text-gray-500">{ item.centro }</div>
                    </td>
                    <td className="px-6 py-2 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{ item.qtd_divisao.toLocaleString() }</div>
                      <div className="text-sm text-gray-500" title="Ordem de Atendimento">{ item.ordem_atendimento }</div>
                    </td>
                    <td className="px-6 py-2 whitespace-normal text-sm text-gray-500">{ item.pedidos }</td>
                    <td className="px-6 py-2 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{ item.qtd_a_fornecer.toLocaleString() }</div>
                      <div className={`text-xs font-bold ${ (item.perc_pedidos < 1) ? 'text-red-400' : 'text-green-400' }`}>{ (item.perc_pedidos * 100).toLocaleString(undefined, { maximumFractionDigits: 1}) }%</div>
                    </td>
                    <td className="px-6 py-2 whitespace-normal text-sm text-gray-500">{ item.remessas }</td>
                    <td className="px-6 py-2 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{ item.qtd_remessa.toLocaleString() }</div>
                      <div className={`text-xs font-bold ${ (item.perc_remessas > 0.97 && item.perc_remessas < 1.03) ? 'text-green-400' : 'text-red-400' }`}>{ (item.perc_remessas * 100).toLocaleString(undefined, { maximumFractionDigits: 1}) }%</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}