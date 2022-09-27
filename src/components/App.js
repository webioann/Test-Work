import React,{ useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from './Container.js';
import { useLazyFetchServerDataQuery } from '../Redux-toolkit/serverApi'
import { setPageNamber } from '../Redux-toolkit/reduxSlice.js';
import '../CSS/app.scss'

const App = () => {

  const [ setPege,{ data=[] }] = useLazyFetchServerDataQuery()
  const dispatch = useDispatch()
  const pageNamber = useSelector(state => state.redux.page)

  useEffect(() => {
    setPege(pageNamber)
  }, [pageNamber])

  return (
    <Container>
      <h1 className='header'>Test work by Alexander Veles</h1>
      <ul className='users-list'>
        {data.map(user => (
          <li className='user' key={user.id}>
            <div className="avatar">
              <img src={user.avatar} alt="user avatar"/>
            </div>
            <h3 className="name">
                {user.first_name} {user.last_name}
            </h3>
            <div className='email-box'>
              <p className="email-label">Email:</p>
              <p className="email">{user.email}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className='pagination'>
        <span onClick={() => dispatch(setPageNamber(1))}>1</span>
        <span onClick={() => dispatch(setPageNamber(2))}>2</span>
      </div>
    </Container>
  )
}

export default App;

