import { useEffect, useState } from 'react';
import { Api } from './API/Api';
import { Navigate } from './Navigate/Navigate';
import { Convert } from './Convert/Convert';
export const App = () => {
  const [arrayMoney, setArrayMoney] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    Api()
      .then(data => {
        setArrayMoney(data.filter(item => item.base_ccy === 'UAH'));
        setLoader(true);
      })
      .catch(alert);
  }, []);
  return (
    <>
      {loader && (
        <>
          <Navigate arrayMoney={arrayMoney}></Navigate>
          <Convert arrayMoney={arrayMoney}></Convert>
        </>
      )}
    </>
  );
};
