import { useGetUserByIdQuery, useUpdateUserMutation } from '@/redux/services/users'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'


const BittaUser = () => {
  const router = useRouter()
  const userId = router.query.id
  const { data, isLoading, error } = useGetUserByIdQuery(userId)
  const [updateUser] = useUpdateUserMutation();

  function Update(e) {
    e.preventDefault();
    updateUser({
      id: userId,
      name: e.target[0].value,
      image: e.target[1].value,
      price: e.target[2].value,
    }).unwrap()
  }

  return (
    <div>
      <Head>
        <title>
          {data?.name} | {data?.id}
        </title>
      </Head>
      <form onSubmit={Update}>
        <input defaultValue={data?.name} type="text" placeholder='name' required />
        <input defaultValue={data?.image} type="text" placeholder='image' required />
        <input defaultValue={data?.price} type="number" placeholder='yoshini yoz' required />
        <input type="submit" />
      </form>
      <div>
        {error ? (
          <h1>XXX!!!</h1>
        ) : isLoading ? (
          <h1>Loading...</h1>
        ) : data ? (
          <div className='wrapper'>
            <div className='card'>

              <div className="card_on">
                <h1>Barberton Daisy</h1>
                <b>$119.00</b>
                <img src="/g1.png" alt="" />
              </div>
              <img src={data.image} alt='' />
              <h1>{data?.name}</h1>
            </div>
          </div>
        ) : null}
      </div>
      User!


    </div>
  )
}

export default BittaUser