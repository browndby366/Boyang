mapboxgl.accessToken = 'pk.eyJ1IjoiYmQyNTk4IiwiYSI6ImNrd21lazRubTBnNHIybm1ycjN3ZjNtenQifQ.IVH82ltpIfki5WUUrX77MA'

const map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/bd2598/cl0yqstjg000o14oabzgru2uv' // replace this with your style URL
  });

  map.addControl(
    new MapboxGeocoder({
       accessToken: mapboxgl.accessToken,
       mapboxgl: mapboxgl
})
);

  map.on('load', () => {
    // the rest of the code will go in here
    const layers = [
        /*' 4 ',
        ' 6',
        ' 8',
        ' 10',
        ' 12',
        ' 14',
        ' 16',
        ' 18',
        ' 20',*/
      ];
      const colors = [
        /*'#55a630',
        '#80bc34',
        '#aad338',
        '#d5e93b',
        '#ffff3f',
        '#fccf39',
        '#f99f34',
        '#f66e2e',
        '#f22626',*/
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
        const mcda = map.queryRenderedFeatures(event.point, {
          layers: ['mcda']
        });
        document.getElementById('pd').innerHTML = mcda.length
          ? `<h4>Census Tract: <em>${mcda[0].properties.boroct2020}</em></h4><h4>NTA: <em>${mcda[0].properties.nta2020}</em></h4><h4>Borough: <em>${mcda[0].properties.boroname}</em></h4><h4>MCDA Score: <em>${mcda[0].properties.mcda_under}</em></h4><h4>Mean Energy Score: <em>${mcda[0].properties.NO_meanSco}</em></h4><h4>Low Income Population Ratio: <em>${mcda[0].properties.LowRatio}</em></h4><h4>Non-white Population Ratio: <em>${mcda[0].properties.NO_nonWhit}</em></h4><h4>Counts of D Score Buildings: <em>${mcda[0].properties.Count_}</em></h4>`
          : `<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><p><a id='button' href="https://browndby366.github.io/FirstGit/Capstone/Map/beej/index.html">BEEJ</a></p>`;
      });
      map.getCanvas().style.cursor = 'default';
  });
