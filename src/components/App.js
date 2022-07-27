import React,{ useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Container from './Container.js';
import Header from './Header.js';
import Converter from './Converter.js';
import ExchangeRate from './ExchangeRate';
import Wrapper from './Wrapper.js';
import { useFetchCurrencyQuery } from '../Redux-toolkit/currencyApi';
import { setBuyUsd, setBuyEur, setSaleUsd, setSaleEur } from '../Redux-toolkit/reduxSlice';

const App = () => {

  const { data=[], isLoading } = useFetchCurrencyQuery()
  const dispatch = useDispatch()

  useEffect(() => {
    if( !isLoading ) {
      data.map(curr => {
        if(curr.ccy === "USD") {
          dispatch(setBuyUsd(Number(curr.buy)))
          dispatch(setSaleUsd(Number(curr.sale)))
        }
        if(curr.ccy === "EUR") {
          dispatch(setBuyEur(Number(curr.buy)))
          dispatch(setSaleEur(Number(curr.sale)))
        }
      })
    }
  }, [data])

  return (
    <Container>
      <Wrapper>
        <Header/>
        <ExchangeRate/>
        <Converter/>
      </Wrapper>
    </Container>
  )
}

export default App;

