var config = {
    style: 'mapbox://styles/bd2598/cl0b7bp4o000c15s6t1ae4xl0',
    accessToken: 'pk.eyJ1IjoiYmQyNTk4IiwiYSI6ImNrd21lazRubTBnNHIybm1ycjN3ZjNtenQifQ.IVH82ltpIfki5WUUrX77MA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: true,
    title: 'NYC Building Energy Score Performance',
    subtitle: 'A Tale of Many Trees',
    byline: 'By Boyang Dan',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'chapter-1',
            alignment: 'left',
            hidden: false,
            title: 'Building Energy Score in US',
            image: './path/to/image/source.png',
            description: 'There are a lot of trees in the world.',
            location: {
                center: [ -98.75939, 40.11066],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'blocks-joined-trees-um',
                     opacity: 0,
                     duration: 3000
                 },
                 {
                     layer:'2015-street-tree-census-subset',
                     opacity:0,
                     duration:3000,
                 }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'chapter-2',
            alignment: 'left',
            hidden: false,
            title: 'New York City',
            image: './path/to/image/source.png',
            description: 'NYC has lots of trees.',
            location: {
                center: [-73.94834, 40.70000],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    
                    opacity:1,
                    duration:3000,
                }
            ],
            onChapterExit: []
        },
        {
            id:'chapter-3',
            alignment:'left',
            hidden:false,
            title:'Not So many trees',
            description:'In this dataset, there are areas with not so many trees...',
            location:{
                center:[-73.94834, 40.80899],
                zoom:18.75,
                pitch:60,
                bearing:-60
            },
            mapAnimation:'flyTo',
            rotateAnimation:false,
            callback:'',
            onChapterEnter:[],
            onChapterExit:[]
        },
        {   
            id: 'chapter-4',
            alignment: 'right',
            hidden: false,
            title: 'Many Trees',
            description: 'And areas with lots of trees!',
            location: {
               center: [-73.96059, 40.80322],
               zoom: 19,
               pitch: 60,
               bearing: 15
                },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                   layer: 'blocks-joined-trees-um',
                   opacity: 0,
                   duration: 3000,
              },
             {
                layer: '2015-street-tree-census-subset',
                opacity: 1,
            }
        ],
        onChapterExit: []
        },
        {
            id: 'chapter-5',
            alignment: 'right',
            hidden: false,
            title: 'Block Summary',
            image: './img/legend-block.png',
            description: 'Summarizing the tree data by block also allows us to view larger trends in tree cover in NYC. Greener blocks have higher average street tree diameters than lighter blocks.',
            location: {
                center: [-73.94834, 40.80899],
                zoom: 15,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'blocks-joined-trees-um',
                    opacity: 1,
                    duration: 3000,
                },
                {
                    layer: '2015-street-tree-census-subset',
                    opacity: 1,
                }
            ],
            onChapterExit: []
        },
        {
            id: 'chapter-6',
            alignment: 'left',
            hidden: false,
            title: 'The End',
            description: 'Tutorial Created for Methods in Spatial Research, Spring 2022.',
            location: {
                center: [-73.96089, 40.80827],
                zoom: 19,
                pitch: 30,
                bearing: 115
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'blocks-joined-trees-um',
                    opacity: 0,
                    duration: 3000,
                },
                {
                    layer: '2015-street-tree-census-subset',
                    opacity: 0,
                    duration: 3000,
                }
            ],
            onChapterExit: []
        }
    ]
};

