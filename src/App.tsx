/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import requestData from './api/requestData';
import styles from './app.module.css';
import ApiChoice from './components/ApiChoice/ApiChoice';
import Pagination from './components/Pagination/Pagination';
import Table from './components/Table/Table';
import { changeIsLoading } from './store/apiSlice';
import { updateData } from './store/dataSlice';
import { useAppDispatch, useAppSelector } from './store/hooks';
import Skeleton from './components/Skeleton/Skeleton';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  const isLoading = useAppSelector((state) => state.apiChoice.isLoading);
  const apiData = useAppSelector((state) => state.dataSlice.shownData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getData = async () => {
      dispatch(changeIsLoading(true));
      const data = await requestData('location');

      if (!data) return;

      dispatch(updateData(data));
      dispatch(changeIsLoading(false));
    };
    if (apiData.length < 1) {
      getData();
    }
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {isLoading ? (
          <Skeleton />
        ) : (
          <>
            <div className={styles.tableControls}>
              <SearchBar />
              <ApiChoice />
            </div>
            {apiData.length > 0 && (
              <div className={styles.tableContainer}>
                <Table data={apiData} />
                <Pagination />
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
}

export default App;
