import Map from "ol/Map";
import View from "ol/View";
import MVT from "ol/format/MVT";
import VectorTileLayer from "ol/layer/VectorTile";
import "ol/ol.css";
import VectorTileSource from "ol/source/VectorTile";
import { useEffect } from "react";

const MapComp = () => {
  useEffect(() => {
    // Create a new map
    const map = new Map({
      target: "map",
      layers: [
        // Add your vector tile layers here
      ],
      view: new View({
        center: [0, 0], // Set the initial center coordinates
        zoom: 1, // Set the initial zoom level
      }),
    });

    // Add a vector tile layer (example with a Mapbox source)
    const vectorTileLayer = new VectorTileLayer({
      source: new VectorTileSource({
        format: new MVT(), // Specify the format of your vector tiles
        url: "https://vectortile.naxa.com.np/federal/province.mvt/?tile={z}/{x}/{y}", // Replace with your tile server URL
      }),
    });

    map.addLayer(vectorTileLayer);

    // Clean up when the component unmounts
    return () => {
      map.setTarget(null);
    };
  }, []);

  return <div id="map" style={{ width: "100%", height: "400px" }}></div>;
};

export default MapComp;
