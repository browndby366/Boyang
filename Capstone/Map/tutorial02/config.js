var config = {
    style: 'mapbox://styles/bd2598/cl0b7bp4o000c15s6t1ae4xl0',
    accessToken: 'pk.eyJ1IjoiYmQyNTk4IiwiYSI6ImNrd21lazRubTBnNHIybm1ycjN3ZjNtenQifQ.IVH82ltpIfki5WUUrX77MA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: true,
    title: 'NYC Building Energy Score Performance Analysis',
    subtitle: 'A Tale of Building Energy',
    byline: '',
    footer: 'A Town + Gown Capstone',
    chapters: [
        {
            id: 'chapter-1',
            alignment: 'left',
            hidden: false,
            title: 'One NYC',
            image: 'http://1w3f31pzvdm485dou3dppkcq-wpengine.netdna-ssl.com/wp-content/uploads/2019/04/onenyc-2050-summary-image-800x550-c-default.jpg',
            description: 'New York City is leading the trend in reducing greenhouse gas emissions. New York City is consistent with the Paris Climate Agreement and has taken a series of measures in various aspects to reduce greenhouse gas emissions (GHG). According to OneNYC 2050 , official strategic plan of New York City for development based on "principles of growth, equity, sustainability, and resiliency", the city is committed to achieving carbon neutrality by 2050 and zero GHG emissions.',
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
            title: 'Buildings Emissions Is Huge',
            image: 'https://thermolitewindows.com/wp-content/uploads/2019/10/new-york-1745089_1920-1-630x200.jpg',
            description: 'Buildings account for two-thirds of New York City’s GHG emissions. Most of the emissions come from electricity and fuel used for heating, cooling and power, and also from inefficient energy systems. Due to inefficiency and energy waste, many buildings use more energy than they actually need. Energy efficiency is one of the simplest ways to eliminate energy waste and reduce energy cost.',
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
            title: 'Building Energy Efficiency Rating',
            image: 'https://images.squarespace-cdn.com/content/v1/5d8d0727a966fa1d97ea86aa/1614703795924-UBSPA7CTOCC6X2XANBIF/buildings_energyefficiency_rating.jpg?format=1500w',
            description: 'An energy efficiency score is the Energy Star Rating that a building earns using the United States Environmental Protection Agency online benchmarking tool to compare building energy performance to similar buildings in similar climates, where the higher the score, the better the energy performance of the building.',
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
            title: 'Distribution of Buildings Receiving Energy Ratings',
            image: '',
            description: 'This heat map shows the distribution of buildings receiving a energy efficiency score. Local Law 84 requires owners of buildings over 50,000 square feet to report annual benchmarking data, aiming to bring transparency for energy and water usage. Local Law 33 requires owners of buildings over 25,000 square feet to obtain the Building Energy Efficiency Rating labels and display them near public entrances.',
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
            title:'Distribution of Building Energy Scores',
            description:'In this dataset, there are areas with not so many trees...',
            image: '../data/微信图片_20220306204400.png',
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
            title: 'Related Factors',
            image: '../data/Capstone_Regression analysis_Boyang Dan.jpg',
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
            image: '../data/微信图片_20220306221244.png',
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
            //image: './img/legend-block.png',
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
            image: '../data/下载.png',
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
            image: '../data/image问问.jpg',
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

