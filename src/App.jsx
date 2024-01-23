import { useEffect, useState } from "react";
import usePaginationFetch from "./usePaginationFetch";
import Card from "./Components/Card/card";
import Pagination from "./Components/Pagination/pagination";

const url = "/api/Programmer/programmers";

function App() {

  const [loading, data] = usePaginationFetch(url, 3)
  const [page, setPage] = useState(1)
  const [programmers, setProgrammers] = useState([])

  useEffect(() => {
    if (loading) {
      return
    }

    setProgrammers(data[page - 1])
  }, [loading , page])

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
            {programmers.map(({ id, ...i }) => {
              return (
                <div className="col-3" key={id}>
                  <Card {...i} />
                </div>
              )
            })}
          </div>
          <div className="row">
            <Pagination pages={data.length} setPage={setPage} activePage={page}/>
          </div>
        </>
      )}
    </div>
  )
}

export default App
