import React from "react";
import PropTypes from "prop-types";
import GifGridItem from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

// http://api.giphy.com/v1/gifs/search?q=Madrid&limit=10&api_key=y4CMGcCyGDtjxjh5wzS58q85BWrA0d5W

const GifGrid = ({ categoria }) => {
  const { data: gifs, loading } = useFetchGifs(categoria);

  return (
    <>
      <h3 className="animate__animated animate__fadeIn">{categoria}</h3>
      {loading && (
        <p className="animate__animated animate__flash animate__repeat-1">
          Cargando...
        </p>
      )}
      <div className="card-grid">
        {gifs.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  categoria: PropTypes.string.isRequired,
};

export default GifGrid;
