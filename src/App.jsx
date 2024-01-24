import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import Card from "./Components/Card/card";
import Pagination from "./Components/Pagination/pagination";

const url = "/api/Programmer/sieve";
const pageSize = 2;

function App() {

  const [page, setPage] = useState(1)
  const [loading, programmers] = useFetch(url, {page , pageSize})

  return (
    <div className="container pt-5">
      {loading && (
        <div className="d-flex justify-content-center">
          <div className="spinner-border"></div>
        </div>
      )}

      {!loading && (
        <>
          <div className="row d-flex justify-content-center">
            {programmers.data.map(({ id, ...i }) => {
              return (
                <div className="col-3" key={id}>
                  <Card {...i} />
                </div>
              )
            })}
          </div>
          <div className="row">
            <Pagination pages={Math.ceil(programmers.totalRecords / pageSize)} setPage={setPage} activePage={page}/>
          </div>
        </>
      )}
    </div>
  )
}

export default App
