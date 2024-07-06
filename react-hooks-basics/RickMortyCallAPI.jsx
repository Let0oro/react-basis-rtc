import Loading from "#src/components/Loading";
import React, { lazy, Suspense, useEffect, useMemo, useState } from "react";
// import Character from "./Character/Character";

const RickMortyCallAPI = () => {
  const [listItems, setListItems] = useState({});
  const [apiUrl, setApiUrl] = useState(
    "https://rickandmortyapi.com/api/character"
  );

  const Character = lazy(() => import("./Character/Character"));

  useEffect(() => {
    const fetchAPI = async (url) => {
      if (!url || !url.includes("/"))
        throw new Error("URL provided is not correct");
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (!response.ok || response.status > 300) throw new Error(data);

        // console.log(data);
        setListItems(data);
      } catch (error) {
        throw new Error(error.message);
      }
    };
    fetchAPI(apiUrl);
  }, [apiUrl]);

  const { results, info } = listItems;

  const listMapped = useMemo(
    () =>
      results?.map((character) => (
        <Suspense fallback={<Loading />} key={character.id}>
          <Character character={character} />
        </Suspense>
      )),
    [listItems]
  );

  return (
    <div>
      <h2>RickMortyCallAPI</h2>
      <div style={{  position: 'fixed', right: '2rem', top: '3rem', display: "flex", flexDirection: 'column', alignItems: "center", marginTop: "2rem", gap: "1rem"}}>
        <button onClick={() => {setApiUrl(url => info.prev || url.split('?')[0] + '?page=' + info.pages)}}>
          «
        </button>
        <span className="btn-span">page {Number(apiUrl.split('?page=')[1]) || 1}</span>
        <button onClick={() => {setApiUrl(url => info.next || url.split('?')[0])}}>
          »
        </button>
      </div>

      <h3>Characters</h3>
      {listMapped}
    </div>
  );
};

export default RickMortyCallAPI;
