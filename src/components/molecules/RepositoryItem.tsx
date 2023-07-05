import React from 'react'
import { ReactComponent as Star } from '../../../src/assets/svg/star-fill.svg'
import { RepositoryInterface } from '../../features/repository/interface'
import { limitCharacters } from '../../utils/limitCharacters'

interface RepositoryItemInterface {
  data: RepositoryInterface
}

const RepositoryItem = ({ data }: RepositoryItemInterface) => (
  <div className="ml-3 flex flex-col gap-1 bg-slate-300 px-3 py-2 text-sm">
    <div className="flex items-center justify-between text-slate-900">
      <strong>{data.name}</strong>
      <div className="flex items-center gap-1">
        {data.stargazers_count} <Star width={15} height={15} />
      </div>
    </div>
    <p className="w-full">{data.description ? limitCharacters(data.description, 50) : '-'}</p>
  </div>
)

export default RepositoryItem
