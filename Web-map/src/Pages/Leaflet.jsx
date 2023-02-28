import React, { useState } from "react";
import {
  Circle,
  FeatureGroup,
  LayerGroup,
  LayersControl,
  MapContainer,
  Marker,
  Popup,
  Rectangle,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function LeafletMap() {
  const center = [-0.04830583139616625, 37.83410595020698];
  const rectangle = [
    [51.49, -0.08],
    [51.5, -0.06],
  ];

  function LocationMarker() {
    const [position, setPosition] = useState(null);
    const map = useMapEvents({
      click() {
        map.locate();
      },
      locationfound(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      },
    });

    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    );
  }

  return (
    <div>
      <MapContainer center={center} zoom={10} className="mapContainer">
        <LayersControl position="topright">
          <LayersControl.BaseLayer name="Map">
            <TileLayer
              attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
              url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=XWgwvgf8UQRZ99UI0PR1"
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
            <Marker position={center}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </LayersControl.Overlay>
          <LayersControl.Overlay checked name="Layer group with circles">
            <LayerGroup>
              <Circle
                center={center}
                pathOptions={{ fillColor: "blue" }}
                radius={200}
              />
              <Circle
                center={center}
                pathOptions={{ fillColor: "red" }}
                radius={100}
                stroke={false}
              />
              <LayerGroup>
                <Circle
                  center={[51.51, -0.08]}
                  pathOptions={{ color: "green", fillColor: "green" }}
                  radius={100}
                />
              </LayerGroup>
            </LayerGroup>
          </LayersControl.Overlay>
        </LayersControl>
        <button
          onClick={() => {
            map.locate();
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

        <LocationMarker />
      </MapContainer>
    </div>
  );
}
