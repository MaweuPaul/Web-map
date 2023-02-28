import React, { useEffect, useState } from "react";
import {
  LayersControl,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import maplibreGl from "maplibre-gl";
import maplibregl from "maplibre-gl";
import { GeocodingControl } from "@maptiler/geocoding-control/maplibregl";
import "@maptiler/geocoding-control/style.css";
import { Typography } from "@mui/material";
import SimpleAccordion from "./Accordion";

export default function LeafletMap() {
  // for location
  const [showLocation, setShowLocation] = useState(false);
  const Allcenter = [-0.04830583139616625, 37.83410595020698];
  const apiKey = "XWgwvgf8UQRZ99UI0PR1";
  useEffect(() => {
    const map = new maplibreGl.Map({
      container: "map",
      style: "https://api.maptiler.com/maps/streets/style.json?key=" + apiKey,
      center: [16.3, 49.2],
      zoom: 7,
    });

    const gc = new GeocodingControl({ apiKey, maplibregl, zoom: 14 });

    map.addControl(gc);

    return () => {
      map.remove();
    };
  }, []);

  function LocationMarker({ showLocation }) {
    const [position, setPosition] = useState(null);
    const map = useMapEvents({
      locationfound(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, 18);
      },
    });

    useEffect(() => {
      if (showLocation) {
        map.locate();
      }
    }, [showLocation]);

    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    );
  }
  return (
    <div>
      <div>
        <SimpleAccordion />
      </div>
      <MapContainer
        center={Allcenter}
        zoom={10}
        className="mapContainer"
        id="map"
      >
        <LayersControl position="bottomright">
          <LayersControl.BaseLayer name="Map">
            <TileLayer
              attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
              url="https://api.maptiler.com/maps/openstreetmap/style.json?key=XWgwvgf8UQRZ99UI0PR1"
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Satellite">
            <TileLayer
              attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/about/" target="_blank">&copy; OpenStreetMap contributors</a>'
              url="https://api.maptiler.com/maps/hybrid/256/{z}/{x}/{y}.jpg?key=XWgwvgf8UQRZ99UI0PR1"
            />{" "}
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Streets">
            <TileLayer
              attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/about/" target="_blank">&copy; OpenStreetMap contributors</a>'
              url="https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}@2x.png?key=XWgwvgf8UQRZ99UI0PR1"
            />{" "}
          </LayersControl.BaseLayer>
          <LayersControl.Overlay name="Marker with popup">
            <Marker position={Allcenter}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </LayersControl.Overlay>
        </LayersControl>

        <button
          onClick={() => {
            setShowLocation(!showLocation);
          }}
          style={{
            position: "absolute",
            top: "80px",
            left: "10px",
            zIndex: "1000",
          }}
        >
          Find my location
        </button>

        <LocationMarker showLocation={showLocation} />
      </MapContainer>
    </div>
  );
}
