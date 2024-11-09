import * as React from 'react'
import { db_firestore } from './firebase/config'
import { collection, onSnapshot } from 'firebase/firestore'
export default function App() {
  const [data, setData] = React.useState({});
  React.useEffect(() => {
    const unsubscribe = onSnapshot(collection(db_firestore, 'demo'), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setData(data[0]);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className='flex justify-content-center align-items-center' style={{ height: '100vh' }}>
    <div className='basis-3/4'>
     <img
     className='w-full h-full object-cover'
      src={data?.nfcToken}
      alt='placeholder' />
    </div>
    <div className='basis-1/4'>
      <img
      className='w-full h-full object-cover' 
      src={data?.gif} 
      alt='placeholder' />
    </div>

  </div>
  )
}
