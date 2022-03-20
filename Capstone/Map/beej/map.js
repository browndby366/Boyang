mapboxgl.accessToken = 'pk.eyJ1IjoiYmQyNTk4IiwiYSI6ImNrd21lazRubTBnNHIybm1ycjN3ZjNtenQifQ.IVH82ltpIfki5WUUrX77MA'

const map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/bd2598/cl0yiq211000d15jz55y4xi5b' // replace this with your style URL
  });

  // Add the control to the map.
   map.addControl(
       new MapboxGeocoder({
          accessToken: mapboxgl.accessToken,
          mapboxgl: mapboxgl
  })
  );

  map.on('load', () => {
    // the rest of the code will go in here
    const layers = [
        /*' 0 - 20172',
        ' 20172 - 44502',
        ' 44502 - 75136',
        ' 75136 - 107088',
        ' 107088 - 143942',
        ' 143942 - 185951',
        ' 185951 - 234300',
        ' 234300 - 295488',
        ' 295488 - 401544',
        ' 401544 - 628571',*/
      ];
      const colors = [
        /*'#ffb600',
        '#ffaa00',
        '#ff9e00',
        '#ff9100',
        '#ff8500',
        '#ff7900',
        '#ff6d00',
        '#ff6000',
        '#ff5400',
        '#fc2f00'*/
      ];
      // create legend
      const legend = document.getElementById('legend');

      layers.forEach((layer, i) => {
      const color = colors[i];
      const item = document.createElement('div');
      const key = document.createElement('span');
      key.className = 'legend-key';
      key.style.backgroundColor = color;

      const value = document.createElement('span');
      value.innerHTML = `${layer}`;
      item.appendChild(key);
      item.appendChild(value);
      legend.appendChild(item);
      });
      map.on('mousemove', (event) => {
        const beej = map.queryRenderedFeatures(event.point, {
          layers: ['beej']
        });
        document.getElementById('pd').innerHTML = beej.length
          ? `<h4>Census Tract: <em>${beej[0].properties.boroct2020}</em></h4><h4>NTA: <em>${beej[0].properties.nta2020}</em></h4><h4>Borough: <em>${beej[0].properties.boroname}</em></h4><h4>BEEJ: <em>${beej[0].properties.BEEJ}</em></h4><h4>Mean Energy Score: <em>${beej[0].properties.NO_meanSco}</em></h4><h4>Low Income Population Ratio: <em>${beej[0].properties.LowRatio}</em></h4><h4>Non-white Population Ratio: <em>${beej[0].properties.NO_nonWhit}</em></h4>`
          : `<br></br><br></br><br></br><br></br><br></br><p><a id='button' href="https://browndby366.github.io/FirstGit/Capstone/Home/index.html">Home</a></p>`;
      });
      map.getCanvas().style.cursor = 'default';
  });
