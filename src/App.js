import React, { useMemo, useState, useEffect } from "react";
import axios from "axios";

import Table from "./Table";
import "./App.css";

function App() {
  const columns = useMemo(
    () => [
      {
        // first group - TV Show
        Header: "TV Show",
        // First group columns
        columns: [
          {
            Header: "Name",
            accessor: "show.name"
          },
          {
            Header: "Type",
            accessor: "show.type"
          }
        ]
      },
      {
        // Second group - Details
        Header: "Details",
        // Second group columns
        columns: [
          {
            Header: "Language",
            accessor: "show.language"
          },
          {
            Header: "Genre(s)",
            accessor: "show.genres"
          },
          {
            Header: "Runtime",
            accessor: "show.runtime"
          },
          {
            Header: "Status",
            accessor: "show.status"
          }
        ]
      }
    ],
    []
  );

  // data state to store the TV Maze API data. Its initial value is an empty array
  const [data, setData] = useState([]);

  // Using useEffect to call the API once mounted and set the data
  useEffect(() => {
    (async () => {
      const result = await axios("https://api.tvmaze.com/search/shows?q=snow");
      setData(result.data);
    })();
  }, []);

  return (
    <div className="App">
      <Table columns={columns} data={data} />
    </div>
  );
}

export default App;