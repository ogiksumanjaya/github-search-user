import { memo, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import InputText from '../../components/atoms/InputText'
import Button from '../../components/atoms/Button'
import UserItem from '../../components/molecules/UserItem'
import { useFetchSearchUser } from '../../features/search'

export type SearchInputType = {
  search: string
}

const Homepage = () => {
  const [keyword, setKeyword] = useState<string>()
  const { data: dataUsers, isInitialLoading } = useFetchSearchUser(keyword)
  const { register, handleSubmit } = useForm<SearchInputType>()

  const onSubmit: SubmitHandler<SearchInputType> = async (data) => {
    setKeyword(data.search)
  }

  return (
    <div className="mx-auto flex w-full max-w-full flex-col gap-3 p-3 md:max-w-md">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <InputText placeholder="Enter username" inputName="search" register={register} required />
        <Button type="submit" variant="primary" disabled={isInitialLoading}>
          Search
        </Button>
      </form>
      {isInitialLoading && <p>Loading..</p>}
      {keyword && !isInitialLoading && <p>Showing users for &quot;{keyword}&quot;</p>}
      <div className="flex flex-col gap-3">
        {dataUsers?.items.map((e, index) => (
          <UserItem key={index} dataUser={e} />
        ))}
      </div>
    </div>
  )
}

export default memo(Homepage)
