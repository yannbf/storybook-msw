import { Octokit } from '@octokit/rest';
import React, { useState, useEffect } from 'react'

const octokit = new Octokit();

export const Github  = ({ username = 'yannbf' }) => {
  const [data, setData] = useState({})
  const getData = async (username) => {
    const { data } = await octokit.request(`/users/${username}`);
    setData(data)
  }

  useEffect(() => {
    getData(username)
  }, [username])

  if (data.message) {
    return <div>Not found!</div>
  }

  if (!data.name) {
    return <div>Loading...</div>
  }

  return (
    <>
      <div
        style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
        onClick={() => getData('yannbf')}
      >
        <img
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '6rem',
            marginRight: '1rem',
          }}
          src={data.avatar_url}
          alt="avatar"
        />
        <h4>
          {data.name} - @{data.login}
        </h4>
      </div>

      <p>
        Request result:
        {JSON.stringify(data, null, 2)}
      </p>
    </>
  )
}
