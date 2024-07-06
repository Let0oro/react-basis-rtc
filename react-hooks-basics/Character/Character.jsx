import React, { memo, useState } from "react";
import "./Character.css";

const Character = memo(({ character }) => {
  const [isReversed, setIsReversed] = useState(false);
  const {
    id,
    image,
    name,
    status,
    species,
    type,
    gender,
    origin,
    location,
    episode,
    url,
    created,
  } = character;

  return (
    <section key={id} style={{ marginTop: "2rem" }}>
      <h2 style={{textDecoration: 'underline'}}>{`${name} (${gender}/${species}${!!type ? `/${type}` : ""})`}</h2>
      <img src={image} alt={`Image of ${name}`}
      className={isReversed ? 'rev' : 'ort'} 
      onClick={
        () => setIsReversed(rev => !rev)
        // ({target}) => target.style.transform = (target.style.transform.includes('180') ? 'rotateZ(0deg)' : 'rotateZ(180deg)')
      }
      // style={{transform: isReversed ? ('rotateZ(180deg)') : ''}}
      />
      <p>
        {`${Intl.DateTimeFormat("es-ES").format(new Date(created))}`} (
        <a href={origin.link}>{origin.name}</a>) - {status} (
        <a href={location.link}>{location.name}</a>)
      </p>
      <p
        style={{
          lineHeight: "2rem",
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "5px",
        }}
      >
        It's possible to view at episodes{" "}
        { episode.map((url, i, arr) => (
          <a
            key={url + i}
            style={{
              display: "inline-block",
              fontSize: "1.1rem",
              height: "1.8rem",
              width: "1.8rem",
              border: "1px solid currentColor",
              borderRadius: "4px",
            }}
            href={url}
          >
            {url.split("/").at(-1)}
          </a>
        ))}
      </p>
      <a href={url}></a>
    </section>
  );
});

export default Character;
