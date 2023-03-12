import React, { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import { Grid, Typography } from "@mui/material";
import { width } from "@mui/system";

const key = "XWgwvgf8UQRZ99UI0PR1";

export default function Map() {
  const mapContainer = useRef(null);

  useEffect(() => {
    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${key}`,
      center: [16.62662018, 49.2125578],
      zoom: 14,
    });

    const queryForPlaces = async (lngLat) => {
      const response = await fetch(
        `https://api.maptiler.com/geocoding/${lngLat.lng},${lngLat.lat}.json?key=${key}`
      );
      const data = await response.json();
      return data;
    };

    map.on("load", () => {
      map.addSource("search-results", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [],
        },
      });
      map.addLayer({
        id: "point-result",
        type: "circle",
        source: "search-results",
        paint: {
          "circle-radius": 2,
          "circle-color": "#B42222",
          "circle-opacity": 0.5,
        },
        filter: ["==", "$type", "Point"],
      });
    });
    map.on("click", async (e) => {
      const results = await queryForPlaces(e.lngLat);
      const map = e.target;
      map.getSource("search-results").setData(results);
      const bounds = results.features.reduce(function (bounds, feature) {
        return bounds.extend(feature.bbox);
      }, new maplibregl.LngLatBounds(results.features[0].bbox));
      map.fitBounds(bounds);
    });
    map.on("click", async (e) => {
      const results = await queryForPlaces(e.lngLat);
      const map = e.target;
      map.getSource("search-results").setData(results);
      const bounds = results.features.reduce(function (bounds, feature) {
        return bounds.extend(feature.bbox);
      }, new maplibregl.LngLatBounds(results.features[0].bbox));
      map.fitBounds(bounds);
      const resultList = results.features.map((feature) => {
        return `<li onClick="map.fitBounds([${feature.bbox}], {maxZoom: 19})">${feature.place_name}</li>`;
      });
      document.getElementById("search-results").innerHTML = resultList.join("");
    });

    // return a cleanup function to remove the map when the component unmounts
    return () => map.remove();
  }, []);

  return (
    <Grid container margin={2}>
      <Grid item xm={12} sm={12} md={3} lg={3} xl={3}>
        <Typography variant="subtitle1" color="green">
          About Reverse Geocoding
        </Typography>
        <Typography color="black">
          Reverse geocoding is the process of converting a geographic location
          (latitude and longitude) into a human-readable address or place name.
          It is the opposite of geocoding, which involves converting a
          human-readable address into a geographic location.
        </Typography>
      </Grid>
      <Grid item xm={12} sm={12} md={9} lg={9} xl={9} mt={2}>
        <Typography color="black" textAlign="center">
          {" "}
          click anywhere
        </Typography>
        <div ref={mapContainer} style={{ height: "350px", width: "95%" }} />
        <div id="results">
          <ul id="search-results"></ul>
        </div>
      </Grid>
    </Grid>
  );
}
