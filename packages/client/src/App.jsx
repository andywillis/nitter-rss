import { useEffect, useState } from 'react';
// import { useSetRecoilState } from 'recoil';

import Footer from './components/Footer';
import Main from './components/Main';
import Header from './components/Header';

import {} from './store/atoms';

/**
 * App
 *
 * @return {object} JSX
 */
function App() {

  const [ feed, setFeed ] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await fetch('/feed');
      if (res.ok) {
        const data = await res.json();
        setFeed(data);
      }
    }
    getData();
  }, []);

  return (
    <>
      <Header />
      <Main feed={feed} />
      <Footer />
    </>
  );
}

export default App;
