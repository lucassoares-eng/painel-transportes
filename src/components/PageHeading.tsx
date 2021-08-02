import {
  CalendarIcon,
} from '@heroicons/react/solid'

type Props = {
  title?: string
  data?: string
  hora?: string
}

export default function PageHeading({ title = 'This is the default title', data, hora }: Props) {
  return (
    <div className="lg:flex lg:items-center lg:justify-between">
      <div className="flex-1 min-w-0">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">{ title }</h2>
        <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <CalendarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
            Atualizado em { data } às { hora }
          </div>
        </div>
      </div>
      <div className="mt-5 flex lg:mt-0 lg:ml-4">
        <span className="hidden sm:block">
          {/*Select box https://codesandbox.io/s/4y7bi*/}
        </span>
      </div>
    </div>
  )
}