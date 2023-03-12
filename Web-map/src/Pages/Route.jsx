import { MapContainer, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import { Button, Grid, Typography } from "@mui/material";

function Routing() {
  const map = useMap();
  const handleRouting = () => {
    const waypoints = [L.latLng(-0.4172, 36.9508), L.latLng(57.6792, 11.949)];

    L.Routing.control({
      waypoints,
      routeWhileDragging: true,
      lineOptions: {
        styles: [
          {
            color: "black",
            opacity: 1,
            weight: 2,
          },
        ],
      },
    }).addTo(map);
  };

  return (
    <div className="routing-container">
      <Button
        variant="outlined"
        className="routing-button"
        onClick={handleRouting}
      >
        <Typography color="black" fontSize={8}>
          Get Route
        </Typography>
      </Button>
    </div>
  );
}

function Route() {
  return (
    <Grid container spacing={1} margin={2}>
      <Grid item xm={12} sm={12} md={3} lg={3} xl={3}>
        <Typography color="black" variant="body1">
          Routing refers to the process of calculating the optimal route <br />{" "}
          between two or more geographic locations on a map. This involves{" "}
          <br /> taking into account various factors, such as distance, traffic,
          and road conditions, in order to determine the most efficient route.
        </Typography>
      </Grid>
      <Grid item xm={12} sm={12} md={9} lg={9} xl={9}>
        <MapContainer
          center={[-0.4172, 36.9508]}
          zoom={13}
          className="mapContainer"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="© OpenStreetMap contributors"
          />
          <Routing />
        </MapContainer>
      </Grid>
    </Grid>
  );
}

export default Route;
