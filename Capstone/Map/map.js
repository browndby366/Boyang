console.log('Hello,world!')

'use strict'

console.log('Loaded map.js')
mapboxgl.accessToken = 'pk.eyJ1IjoiYmQyNTk4IiwiYSI6ImNrd21lazRubTBnNHIybm1ycjN3ZjNtenQifQ.IVH82ltpIfki5WUUrX77MA'

var map = new mapboxgl.Map({
    container: 'map',
    style:'mapbox://styles/mapbox/basic-v9',
    center:[-73.93324, 40.80877],
    zoom:14,

})

var blocks_url = './data/blocks_joined_trees_um.geojson'

map.on('load',function(){
    map.addSource('blocks_data',{
        'type':'geojson',
        'data':blocks_url,
    })
    map.addLayer({
        'id':'blocks',
        'type':'fill',
        'source':'blocks_data',
        'paint':{
            'fill-color':'#ffffff',
            'fill-outline-color':'#000000',
            'fill-opacity':0.5
        }
    })
});