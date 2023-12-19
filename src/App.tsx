/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import requestData from './api/requestData';
import Dropdown from './components/Dropdown/Dropdown';
import Table from './components/Table/Table';
import { changeIsLoading } from './store/apiSlice';
import { updateData } from './store/dataSlice';
import { useAppDispatch, useAppSelector } from './store/hooks';

function App() {
  const isLoading = useAppSelector((state) => state.apiChoice.isLoading);
  const apiData = useAppSelector((state) => state.dataSlice.data);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getData = async () => {
      dispatch(changeIsLoading(true));
      const data = await requestData('location');

      dispatch(updateData(data.results));
      dispatch(changeIsLoading(false));
    };
    if (apiData.length < 1) {
      getData();
    }
  }, []);

  return (
    <main>
      {isLoading ? (
        <p>loading...</p>
      ) : (
        <>
          <Dropdown />
          {apiData.length > 0 && <Table data={apiData} />}
        </>
      )}
    </main>
  );
}

export default App;
