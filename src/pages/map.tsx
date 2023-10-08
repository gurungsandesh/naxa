import Map from "ol/Map";
import View from "ol/View";
import MVT from "ol/format/MVT";
import LayerGroup from "ol/layer/Group";
import VectorTileLayer from "ol/layer/VectorTile";
import "ol/ol.css";
import VectorTileSource from "ol/source/VectorTile";
import { useEffect, useState } from "react";

const MapComp = () => {
  const [mapType, setMapType] = useState<string>("province");

  useEffect(() => {
    const map = new Map({
      target: "map",
      view: new View({
        center: [9426958.407274716, 3286207.0666422946],
        zoom: 6.5,
      }),
    });

    const provinceTileLayer = new VectorTileLayer({
      source: new VectorTileSource({
        format: new MVT(),
        url: "https://vectortile.naxa.com.np/federal/province.mvt/?tile={z}/{x}/{y}",
      }),
      visible: mapType === "province" ? true : false,
    });

    const districtTileLayer = new VectorTileLayer({
      source: new VectorTileSource({
        format: new MVT(),
        url: "https://vectortile.naxa.com.np/federal/district.mvt/?tile={z}/{x}/{y}",
      }),
      visible: mapType === "district" ? true : false,
    });

    const municipalTileLayer = new VectorTileLayer({
      source: new VectorTileSource({
        format: new MVT(),
        url: "https://vectortile.naxa.com.np/federal/municipality.mvt/?tile={z}/{x}/{y}",
      }),
      visible: mapType === "municipality" ? true : false,
    });

    const baseLayerGroup = new LayerGroup({
      layers: [provinceTileLayer, districtTileLayer, municipalTileLayer],
    });

    map.addLayer(baseLayerGroup);

    return () => {
      map.setTarget(undefined);
    };
  }, [mapType]);

  const handleOptionChange = (event: any) => {
    setMapType(event.target.value);
  };

  return (
    <div className="m-5">
      <div>
        <p>Please select your favorite Web language:</p>
        <div className="flex gap-10">
          <div className="flex gap-2">
            <input
              type="radio"
              id="html"
              name="map_type"
              value="province"
              checked={mapType === "province"}
              onChange={handleOptionChange}
            />
            <label htmlFor="html">Province</label>
          </div>
          <div className="flex gap-2">
            <input
              type="radio"
              id="district"
              name="map_type"
              value="district"
              checked={mapType === "district"}
              onChange={handleOptionChange}
            />
            <label htmlFor="css">District</label>
          </div>

          <div className="flex gap-2">
            <input
              type="radio"
              id="municipality"
              name="map_type"
              value="municipality"
              checked={mapType === "municipality"}
              onChange={handleOptionChange}
            />
            <label htmlFor="javascript">Municipality</label>
          </div>
        </div>
      </div>

      <div id="map" className="w-1/1 h-[40vh]" />
    </div>
  );
};

export default MapComp;
