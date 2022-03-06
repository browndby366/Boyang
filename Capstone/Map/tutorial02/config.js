var config = {
    style: 'mapbox://styles/bd2598/cl0b7bp4o000c15s6t1ae4xl0',
    accessToken: 'pk.eyJ1IjoiYmQyNTk4IiwiYSI6ImNrd21lazRubTBnNHIybm1ycjN3ZjNtenQifQ.IVH82ltpIfki5WUUrX77MA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: true,
    title: 'NYC Building Energy Score Performance',
    subtitle: 'A Tale of Building Energy',
    byline: 'A Capstone',
    footer: 'Produced by Boyang Dan Style from Mapbox ',
    chapters: [
        {
            id: 'chapter-1',
            alignment: 'left',
            hidden: false,
            title: 'One NYC',
            image: 'http://1w3f31pzvdm485dou3dppkcq-wpengine.netdna-ssl.com/wp-content/uploads/2019/04/onenyc-2050-summary-image-800x550-c-default.jpg',
            description: 'There are a lot of trees in the world.',
            location: {
                center: [ -74.10000, 40.72000],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'mcda',
                     opacity: 0,
                     duration: 3000
                 },
                 {
                     layer:'mcda_under50',
                     opacity:0,
                     duration:3000,
                 },
                 {
                    layer:'building_distribution',
                    opacity:0,
                    duration:3000,
                },
                {
                    layer:'under50_points',
                    opacity:0,
                    duration:3000,
                },
                {
                    layer:'score_distribution',
                    opacity:0,
                    duration:3000,
                },
                {
                    layer: 'beej',
                    opacity: 0,
                    duration: 3000
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
            title: '纽约建筑排量大',
            image: 'https://user-images.githubusercontent.com/95707552/156633861-463cfe42-110e-4eb1-959b-3f87911c5dbf.jpg',
            description: 'There are a lot of trees in the world.',
            location: {
                center: [ -74.10000, 40.72000],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'mcda',
                     opacity: 0,
                     duration: 3000
                 },
                 {
                     layer:'mcda_under50',
                     opacity:0,
                     duration:3000,
                 },
                 {
                    layer:'building_distribution',
                    opacity:0,
                    duration:3000,
                },
                {
                    layer:'under50_points',
                    opacity:0,
                    duration:3000,
                },
                {
                    layer:'score_distribution',
                    opacity:0,
                    duration:3000,
                },
                {
                    layer: 'fordham',
                    opacity: 0,
                    duration: 3000
                },
                {
                    layer: 'beej',
                    opacity: 0,
                    duration: 3000
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
            id: 'chapter-3',
            alignment: 'left',
            hidden: false,
            title: 'Building Energy Score 是什么',
            image: 'https://user-images.githubusercontent.com/95707552/156633861-463cfe42-110e-4eb1-959b-3f87911c5dbf.jpg',
            description: 'There are a lot of trees in the world.',
            location: {
                center: [ -74.10000, 40.72000],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'mcda',
                     opacity: 0,
                     duration: 3000
                 },
                 {
                     layer:'mcda_under50',
                     opacity:0,
                     duration:3000,
                 },
                 {
                    layer:'building_distribution',
                    opacity:0,
                    duration:3000,
                },
                {
                    layer:'under50_points',
                    opacity:0,
                    duration:3000,
                },
                {
                    layer:'score_distribution',
                    opacity:0,
                    duration:3000,
                },
                {
                    layer: 'fordham',
                    opacity: 0,
                    duration: 3000
                },
                {
                    layer: 'beej',
                    opacity: 0,
                    duration: 3000
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
            id: 'chapter-4',
            alignment: 'left',
            hidden: false,
            title: 'Building Distribution',
            image: './path/to/image/source.png',
            description: 'NYC has lots of trees.',
            location: {
                center: [-74.10000, 40.72000],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'mcda',
                    opacity: 0,
                    duration: 3000
                },
                {
                    layer:'mcda_under50',
                    opacity:0,
                    duration:3000,
                },
                {
                   layer:'building_distribution',
                   opacity:1,
                   duration:3000,
               },
               {
                   layer:'under50_points',
                   opacity:0,
                   duration:3000,
               },
               {
                layer:'score_distribution',
                opacity:0,
                duration:3000,
              },
              {
                layer: 'fordham',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'beej',
                opacity: 0,
                duration: 3000
            }
            ],
            onChapterExit: []
        },
        {
            id: 'chapter-5',
            alignment: 'left',
            hidden: true,
            title: 'MCDA',
            description: 'Tutorial Created for Methods in Spatial Research, Spring 2022.',
            location: {
                center: [-74.10000, 40.72000],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'mcda',
                    opacity: 0,
                    duration: 3000
                },
                {
                    layer:'mcda_under50',
                    opacity:0,
                    duration:3000,
                },
                {
                   layer:'building_distribution',
                   opacity:0,
                   duration:3000,
               },
               {
                   layer:'under50_points',
                   opacity:0,
                   duration:3000,
               },
               {
                layer:'score_distribution',
                opacity:0,
                duration:3000,
               },
               {
                layer: 'fordham',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'beej',
                opacity: 0,
                duration: 3000
            }
            ],
            onChapterExit: []
        },
        {
            id:'chapter-6',
            alignment:'left',
            hidden:false,
            title:'Score Distribution',
            description:'In this dataset, there are areas with not so many trees...',
            location:{
                center:[-74.10000, 40.72000],
                zoom:10,
                pitch:0,
                bearing:0
            },
            mapAnimation:'flyTo',
            rotateAnimation:false,
            callback:'',
            onChapterEnter:[
                {
                    layer: 'mcda',
                    opacity: 0,
                    duration: 3000
                },
                {
                    layer:'mcda_under50',
                    opacity:0,
                    duration:3000,
                },
                {
                   layer:'building_distribution',
                   opacity:0,
                   duration:3000,
               },
               {
                   layer:'under50_points',
                   opacity:0,
                   duration:3000,
               },
               {
                layer:'score_distribution',
                opacity:1,
                duration:3000,
              },
              {
                layer: 'fordham',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'beej',
                opacity: 0,
                duration: 3000
            }
            ],
            onChapterExit:[]
        },
        {
            id: 'chapter-7',
            alignment: 'left',
            hidden: true,
            title: 'MCDA',
            description: 'Tutorial Created for Methods in Spatial Research, Spring 2022.',
            location: {
                center: [-74.10000, 40.72000],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'mcda',
                    opacity: 0,
                    duration: 3000
                },
                {
                    layer:'mcda_under50',
                    opacity:0,
                    duration:3000,
                },
                {
                   layer:'building_distribution',
                   opacity:0,
                   duration:3000,
               },
               {
                   layer:'under50_points',
                   opacity:0,
                   duration:3000,
               },
               {
                layer:'score_distribution',
                opacity:0,
                duration:3000,
               },
               {
                layer: 'fordham',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'beej',
                opacity: 0,
                duration: 3000
            }
            ],
            onChapterExit: []
        },
        {   
            id: 'chapter-8',
            alignment: 'left',
            hidden: false,
            title: 'Regression Analysis',
            description: 'And areas with lots of trees!',
            location: {
               center: [-74.10000, 40.72000],
               zoom: 10,
               pitch: 0,
               bearing: 0
                },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'mcda',
                    opacity: 0,
                    duration: 3000
                },
                {
                    layer:'mcda_under50',
                    opacity:0,
                    duration:3000,
                },
                {
                   layer:'building_distribution',
                   opacity:0,
                   duration:3000,
               },
               {
                   layer:'under50_points',
                   opacity:0,
                   duration:3000,
               },
               {
                layer:'score_distribution',
                opacity:1,
                duration:3000,
              },
              {
                layer: 'fordham',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'beej',
                opacity: 0,
                duration: 3000
            }
        ],
        onChapterExit: [
            {
                layer: 'mcda',
                opacity: 0,
                duration: 3000
            },
            {
                layer:'mcda_under50',
                opacity:0,
                duration:3000,
            },
            {
               layer:'building_distribution',
               opacity:0,
               duration:3000,
           },
           {
               layer:'under50_points',
               opacity:0,
               duration:3000,
           },
           {
            layer:'score_distribution',
            opacity:1,
            duration:3000,
          },
          {
            layer: 'fordham',
            opacity: 0,
            duration: 3000
        },
        {
            layer: 'beej',
            opacity: 0,
            duration: 3000
        }
        ]
        },
        {
            id: 'chapter-9',
            alignment: 'left',
            hidden: true,
            title: 'MCDA',
            description: 'Tutorial Created for Methods in Spatial Research, Spring 2022.',
            location: {
                center: [-74.10000, 40.72000],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'mcda',
                    opacity: 0,
                    duration: 3000
                },
                {
                    layer:'mcda_under50',
                    opacity:0,
                    duration:3000,
                },
                {
                   layer:'building_distribution',
                   opacity:0,
                   duration:3000,
               },
               {
                   layer:'under50_points',
                   opacity:0,
                   duration:3000,
               },
               {
                layer:'score_distribution',
                opacity:0,
                duration:3000,
               },
               {
                layer: 'fordham',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'beej',
                opacity: 0,
                duration: 3000
            }
            ],
            onChapterExit: []
        },
        {
            id: 'chapter-10',
            alignment: 'left',
            hidden: false,
            title: 'Building Energy Efficiency Justice Index (BEEJ)',
            image: '../data/calculate beej.png',
            description: 'Percentage of minority population is defined as non-white population divided by total population, and low income population is defined as the population income below 200% of the federal poverty level, divided by the total population for whom poverty status is determined.',
            location: {
                center: [-74.10000, 40.72000],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'mcda',
                    opacity: 0,
                    duration: 3000
                },
                {
                    layer:'mcda_under50',
                    opacity:0,
                    duration:3000,
                },
                {
                   layer:'building_distribution',
                   opacity:0,
                   duration:3000,
               },
               {
                   layer:'under50_points',
                   opacity:0,
                   duration:3000,
               },
               {
                layer:'score_distribution',
                opacity:0,
                duration:3000,
               },
               {
                layer: 'fordham',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'beej',
                opacity: 1,
                duration: 3000
            }
            ],
            onChapterExit: []
        },
        {
            id: 'chapter-11',
            alignment: 'left',
            hidden: true,
            title: 'MCDA',
            description: 'Tutorial Created for Methods in Spatial Research, Spring 2022.',
            location: {
                center: [-74.10000, 40.72000],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'mcda',
                    opacity: 0,
                    duration: 3000
                },
                {
                    layer:'mcda_under50',
                    opacity:0,
                    duration:3000,
                },
                {
                   layer:'building_distribution',
                   opacity:0,
                   duration:3000,
               },
               {
                   layer:'under50_points',
                   opacity:0,
                   duration:3000,
               },
               {
                layer:'score_distribution',
                opacity:0,
                duration:3000,
               },
               {
                layer: 'fordham',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'beej',
                opacity: 0,
                duration: 3000
            }
            ],
            onChapterExit: []
        },
        {
            id: 'chapter-12',
            alignment: 'left',
            hidden: false,
            title: 'Under 50 Points',
            image: './img/legend-block.png',
            description: 'Summarizing the tree data by block also allows us to view larger trends in tree cover in NYC. Greener blocks have higher average street tree diameters than lighter blocks.',
            location: {
                center: [-74.10000, 40.72000],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'mcda',
                    opacity: 0,
                    duration: 3000
                },
                {
                    layer:'mcda_under50',
                    opacity:0,
                    duration:3000,
                },
                {
                   layer:'building_distribution',
                   opacity:0,
                   duration:3000,
               },
               {
                   layer:'under50_points',
                   opacity:1,
                   duration:3000,
               },
               {
                layer:'score_distribution',
                opacity:0,
                duration:3000,
               },
               {
                layer: 'fordham',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'beej',
                opacity: 0,
                duration: 3000
            }
            ],
            onChapterExit: []
        },
        {
            id: 'chapter-13',
            alignment: 'left',
            hidden: true,
            title: 'MCDA',
            description: 'Tutorial Created for Methods in Spatial Research, Spring 2022.',
            location: {
                center: [-74.10000, 40.72000],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'mcda',
                    opacity: 0,
                    duration: 3000
                },
                {
                    layer:'mcda_under50',
                    opacity:0,
                    duration:3000,
                },
                {
                   layer:'building_distribution',
                   opacity:0,
                   duration:3000,
               },
               {
                   layer:'under50_points',
                   opacity:0,
                   duration:3000,
               },
               {
                layer:'score_distribution',
                opacity:0,
                duration:3000,
               },
               {
                layer: 'fordham',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'beej',
                opacity: 0,
                duration: 3000
            }
            ],
            onChapterExit: []
        },
        {
            id: 'chapter-14',
            alignment: 'left',
            hidden: false,
            title: 'Poor Building Energy Efficiency Performance Areas',
            image: '../data/describe.png',
            description: 'Summarizing the tree data by block also allows us to view larger trends in tree cover in NYC. Greener blocks have higher average street tree diameters than lighter blocks.',
            location: {
                center: [-74.10000, 40.72000],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'mcda',
                    opacity: 0,
                    duration: 3000
                },
                {
                    layer:'mcda_under50',
                    opacity:1,
                    duration:3000,
                },
                {
                   layer:'building_distribution',
                   opacity:0,
                   duration:3000,
               },
               {
                   layer:'under50_points',
                   opacity:0,
                   duration:3000,
               },
               {
                layer:'score_distribution',
                opacity:0,
                duration:3000,
            },
            {
                layer: 'fordham',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'beej',
                opacity: 0,
                duration: 3000
            }
            ],
            onChapterExit: []
        },
        {
            id: 'chapter-15',
            alignment: 'left',
            hidden: true,
            title: 'MCDA',
            description: 'Tutorial Created for Methods in Spatial Research, Spring 2022.',
            location: {
                center: [-74.10000, 40.72000],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'mcda',
                    opacity: 0,
                    duration: 3000
                },
                {
                    layer:'mcda_under50',
                    opacity:0,
                    duration:3000,
                },
                {
                   layer:'building_distribution',
                   opacity:0,
                   duration:3000,
               },
               {
                   layer:'under50_points',
                   opacity:0,
                   duration:3000,
               },
               {
                layer:'score_distribution',
                opacity:0,
                duration:3000,
               },
               {
                layer: 'fordham',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'beej',
                opacity: 0,
                duration: 3000
            }
            ],
            onChapterExit: []
        },
        {
            id: 'chapter-16',
            alignment: 'right',
            hidden: false,
            title: 'Fordhanm South',
            image: './img/legend-block.png',
            description: 'Summarizing the tree data by block also allows us to view larger trends in tree cover in NYC. Greener blocks have higher average street tree diameters than lighter blocks.',
            location: {
                center: [-73.89450, 40.85480],
                zoom: 14.8,
                pitch: 50,
                bearing: 30
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'mcda',
                    opacity: 0,
                    duration: 3000
                },
                {
                    layer:'mcda_under50',
                    opacity:1,
                    duration:3000,
                },
                {
                   layer:'building_distribution',
                   opacity:0,
                   duration:3000,
               },
               {
                   layer:'under50_points',
                   opacity:0,
                   duration:3000,
               },
               {
                layer:'score_distribution',
                opacity:0,
                duration:3000,
            },
            {
                layer: 'fordham',
                opacity: 1,
                duration: 3000
            },
            {
                layer: 'beej',
                opacity: 0,
                duration: 3000
            }
            ],
            onChapterExit: []
        },
        {
            id: 'chapter-17',
            alignment: 'left',
            hidden: true,
            title: 'MCDA',
            description: 'Tutorial Created for Methods in Spatial Research, Spring 2022.',
            location: {
                center: [-74.10000, 40.72000],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'mcda',
                    opacity: 0,
                    duration: 3000
                },
                {
                    layer:'mcda_under50',
                    opacity:0,
                    duration:3000,
                },
                {
                   layer:'building_distribution',
                   opacity:0,
                   duration:3000,
               },
               {
                   layer:'under50_points',
                   opacity:0,
                   duration:3000,
               },
               {
                layer:'score_distribution',
                opacity:0,
                duration:3000,
               },
               {
                layer: 'fordham',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'beej',
                opacity: 0,
                duration: 3000
            }
            ],
            onChapterExit: []
        },
        {
            id: 'chapter-18',
            alignment: 'center',
            hidden: false,
            title: 'See more detials', 
            image: './img/legend-block.png',
            description: 'Summarizing the tree data by block also allows us to view larger trends in tree cover in NYC. Greener blocks have higher average street tree diameters than lighter blocks.',
            location: {
                center: [-73.94834, 40.70899],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'mcda',
                    opacity: 0,
                    duration: 3000
                },
                {
                    layer:'mcda_under50',
                    opacity:1,
                    duration:3000,
                },
                {
                   layer:'building_distribution',
                   opacity:0,
                   duration:3000,
               },
               {
                   layer:'under50_points',
                   opacity:0,
                   duration:3000,
               },
               {
                layer:'score_distribution',
                opacity:0,
                duration:3000,
            },
            {
                layer: 'fordham',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'beej',
                opacity: 0,
                duration: 3000
            }
            ],
            onChapterExit: []
        },
    ]
};

