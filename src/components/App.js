import React,{ useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setPageNamber } from '../Redux-toolkit/reduxSlice.js';
import Container from './Container.js';
import { useLazyFetchServerDataQuery } from '../Redux-toolkit/serverApi'
import '../CSS/app.scss'

const App = () => {

  const dispatch = useDispatch()
  const pageNumber = useSelector(state => state.redux.page)
  const [setPege, { data=[] }] = useLazyFetchServerDataQuery(1)

  useEffect(() => {
    pageNumber !== null ? setPege(pageNumber) : setPege(1)
  }, [pageNumber])

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

