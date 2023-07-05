import React, { memo, useEffect, useRef, useState } from 'react'
import RepositoryItem from './RepositoryItem'
import { ItemInterface } from '../../features/search/interface'
import { ReactComponent as ArrowDown } from '../../../src/assets/svg/arrowDown.svg'
import { useFetchRepository } from '../../features/repository/useFetchRepository'

interface UserItemInterface {
  dataUser: ItemInterface
}

const UserItem = ({ dataUser }: UserItemInterface) => {
  const [show, setShow] = useState(false)
  const content = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState('0px')

  const { data: dataRepo, isInitialLoading, refetch } = useFetchRepository(dataUser.login)

  function toggleAccordion() {
    setShow(!show)
    setHeight(show ? '0px' : `${content.current?.scrollHeight}px`)
  }

  useEffect(() => {
    if (show && !dataRepo) {
      refetch()
    }
    setHeight(show ? `${content.current?.scrollHeight}px` : '0px')
  }, [show, refetch, dataRepo])

  let repoContent = null
  if (isInitialLoading) {
    repoContent = 'Loading...'
  } else if (dataRepo && dataRepo.length > 0) {
    repoContent = dataRepo.map((e, index) => <RepositoryItem key={index} data={e} />)
  } else {
    repoContent = 'Repository not found'
  }

  return (
    <div className="flex flex-col gap-3">
      <div
        className="flex cursor-pointer justify-between bg-slate-200 px-3 py-2 text-center"
        onClick={toggleAccordion}
      >
        {dataUser.login}
        <div
          className={`flex transform items-center transition-transform duration-100 ease-in-out ${
            show ? 'rotate-180' : 'rotate-0'
          }`}
        >
          <ArrowDown />
        </div>
      </div>
      <div
        ref={content}
        className={`flex flex-col gap-3 overflow-hidden transition-all duration-500`}
        style={{ maxHeight: `${height}` }}
      >
        {repoContent}
      </div>
    </div>
  )
}

export default memo(UserItem)
