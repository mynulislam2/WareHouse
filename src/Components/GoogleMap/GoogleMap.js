import { XMapbox } from "elements-x/dist/mapbox";
import React from "react";
XMapbox.accessToken =
  "pk.eyJ1Ijoic2FoaWx0aGFrYXJlNTIxIiwiYSI6ImNrbjVvMTkzNDA2MXQydnM2OHJ6aHJvbXEifQ.z5aEqRBTtDMWoxVzf3aGsg";

const GoogleMap = () => {
    return (
        <div className="w-75 mt-5 mb-5 mx-auto" >
        <x-div >
          <x-mapbox >
            <x-marker id="marker" lnglat="Toronto, Canada" center>
Find us here
            </x-marker>
          </x-mapbox>
        </x-div>
      </div>
    );
};

export default GoogleMap;