import { useEffect, useMemo, useState } from "react";
import "./App.css";

import ReactIntro from "../react-basis/ReactIntro.jsx";

const maxPages = 1;
const pagesByNumber = [ReactIntro];

function App() {
  const [currentPageNumber, setCurrentPageNumber] = useState(0);
  let ImportedPage;

  useEffect(() => {
    const currentPage = localStorage.getItem("pageNumber");
    ImportedPage = pagesByNumber[currentPage];
  }, []);

  useMemo(() => {
    localStorage.setItem("pageNumber", currentPageNumber);
    ImportedPage = pagesByNumber[currentPageNumber];
  }, [currentPageNumber]);

  return (
    <>
      {ImportedPage && <ImportedPage />}
      <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem", gap: "1rem"}}>
        <button onClick={() => setCurrentPageNumber((current) => (current - 1 < 0) ? maxPages - 1 : current - 1)}>
          «
        </button>
        <button onClick={() => setCurrentPageNumber((current) => (current + 1 >= maxPages) ? 0 : current + 1)}>
          »
        </button>
      </div>
    </>
  );
}

export default App;
