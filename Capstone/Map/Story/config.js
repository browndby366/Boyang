var config = {
    style: 'mapbox://styles/bd2598/cl0b7bp4o000c15s6t1ae4xl0',
    accessToken: 'pk.eyJ1IjoiYmQyNTk4IiwiYSI6ImNrd21lazRubTBnNHIybm1ycjN3ZjNtenQifQ.IVH82ltpIfki5WUUrX77MA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: true,
    title: 'NYC Building Energy Score Performance Analysis',
    subtitle: 'A Tale of Building Energy Efficiency in NYC',
    byline: '',
    footer: 'A Town + Gown Capstone',
    footerAttribution: '<a href="https://browndby366.github.io/FirstGit/Capstone/landing/index.html">Home</a>',
    chapters: [
        {
            id: 'chapter-1',
            alignment: 'center',
            hidden: false,
            title: 'One NYC',
            image: 'http://1w3f31pzvdm485dou3dppkcq-wpengine.netdna-ssl.com/wp-content/uploads/2019/04/onenyc-2050-summary-image-800x550-c-default.jpg',
            imageCredit: '<a style="text-decoration: none;" href="https://onenyc.cityofnewyork.us/">One NYC</a>',
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
                },
                {
                    layer: 'mostpoor',
                    opacity: 0,
                    duration: 3000
                },
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
            alignment: 'center',
            hidden: false,
            title: 'Buildings Emissions Is Huge',
            image: '../data/new-york-1745089_1920-1-630x200.jpg',
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
                },
                {
                    layer: 'mostpoor',
                    opacity: 0,
                    duration: 3000
                },
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
            alignment: 'center',
            hidden: false,
            title: 'Building Energy Efficiency Rating',
            image: '../data/buildings_energyefficiency_rating54.jpg',
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
                },
                {
                    layer: 'mostpoor',
                    opacity: 0,
                    duration: 3000
                },
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
            },
            {
                layer: 'mostpoor',
                opacity: 0,
                duration: 3000
            },
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
            },
            {
                layer: 'mostpoor',
                opacity: 0,
                duration: 3000
            },
            ],
            onChapterExit: []
        },
        {
            id:'chapter-6',
            alignment:'left',
            hidden:false,
            title:'Distribution of Building Energy Scores',
            description:'As per Local Law 95 of 2019, grades based on Energy Star energy efficiency scores will be assigned as A, B, C and D classes. A score of 50 is the average score for comparable similar buildings in similar climates. A score below 50 means energy efficiency performance is below the average for comparable buildings.',
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
            },
            {
                layer: 'mostpoor',
                opacity: 0,
                duration: 3000
            },
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
            },
            {
                layer: 'mostpoor',
                opacity: 0,
                duration: 3000
            },
            ],
            onChapterExit: []
        },
        {   
            id: 'chapter-8',
            alignment: 'center',
            hidden: false,
            title: 'Related Factors',
            image: '../data/Capstone_Regression analysis_Boyang Dan.jpg',
            description: 'A regression model shows that he relationship between building energy score and energy use, household median income, percentage of non-white population and some building types (residential, hotel, hospital, retail and office) is significant, where the lower the building energy use, the higher the energy score; the higher the household median income, the higher the energy score; the lower the percentage of non-white population, the higher the energy score; if the building is hotel, hospital or retail building, it may have a higher building energy score.',
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
            },
            {
                layer: 'mostpoor',
                opacity: 0,
                duration: 3000
            },
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
        },
        {
            layer: 'mostpoor',
            opacity: 0,
            duration: 3000
        },
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
            },
            {
                layer: 'mostpoor',
                opacity: 0,
                duration: 3000
            },
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
            },
            {
                layer: 'mostpoor',
                opacity: 0,
                duration: 3000
            },
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
            },
            {
                layer: 'mostpoor',
                opacity: 0,
                duration: 3000
            },
            ],
            onChapterExit: []
        },
        {
            id: 'chapter-12',
            alignment: 'center',
            hidden: false,
            title: 'But BEEJ may not tell the whole story',
            description: 'Even though some census tracts received high BEEJ scores, they had very few buildings with energy scores below 50, which means that BEEJ does not indicate that this census is less energy efficient in buildings than other census tracts, and their high BEEJ scores are mainly due to higher minority populations and higher low-income populations. For example, in that QN10 Park-Howard Beach, it has a BEEJ score of 172062, which is a score above the 4th percentile, but it has only one building with a score below 50.',
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
            },
            {
                layer: 'mostpoor',
                opacity: 0,
                duration: 3000
            },
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
            },
            {
                layer: 'mostpoor',
                opacity: 0,
                duration: 3000
            },
            ],
            onChapterExit: []
        },
        {
            id: 'chapter-14',
            alignment: 'left',
            hidden: false,
            title: 'Distribution of buildings with scores less than 50',
            image: '../data/微信图片_20220311113433.png',
            description: 'This heat map shows that the poor energy efficiency performance buildings, which is less than 50 points,  mainly concentrated in Bronx and Manhattan. A score below 50 means energy efficiency performance is below the average for comparable buildings.',
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
            },
            {
                layer: 'mostpoor',
                opacity: 0,
                duration: 3000
            },
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
            },
            {
                layer: 'mostpoor',
                opacity: 0,
                duration: 3000
            },
            ],
            onChapterExit: []
        },
        {
            id: 'chapter-16',
            alignment: 'left',
            hidden: false,
            title: 'Poor Building Energy Efficiency Performance Areas',
            image: '../data/describe.png',
            description: 'This map shows the areas in urgent need of our attention where buildings are underperforming in terms of building energy efficiency. That is, these red areas receive the highest BEEJ scores and have the highest number of buildings with below-average energy efficiency performance. The number of buildings scoring below 50 is combined with the BEEJ score to calculate the score using the MCDA methodology (multiple-criteria decision analysis), where the BEEJ weight is 3 (including energy score, minority population and low-income population) and the number of buildings scoring below 50 is weighted 1.',
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
            },
            {
                layer: 'mostpoor',
                opacity: 0,
                duration: 3000
            },
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
            },
            {
                layer: 'mostpoor',
                opacity: 0,
                duration: 3000
            },
            ],
            onChapterExit: []
        },
        {
            id: 'chapter-18',
            alignment: 'left',
            hidden: false,
            title: 'Most Poor Areas',
            description: 'There are 35 census tracts with the most poor building energy performance, 33 of which are in the Bronx and 2 in the Queens. Mount Eden-Claremontand Fordhanm Heights are the two NTAs with the largest number of poor building energy efficiency performance census tracts.',
            location: {
                center: [-73.95000, 40.82000],
                zoom: 11,
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
                    opacity:0.4,
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
            },
            {
                layer: 'mostpoor',
                opacity: 1,
                duration: 3000
            },
            ],
            onChapterExit: []
        },
        {
            id: 'chapter-19',
            alignment: 'left',
            hidden: true,
            title: 'MCDA',
            description: 'Tutorial Created for Methods in Spatial Research, Spring 2022.',
            location: {
                center: [-73.95000, 40.82000],
                zoom: 11,
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
            },
            {
                layer: 'mostpoor',
                opacity: 0,
                duration: 3000
            },
            ],
            onChapterExit: []
        },
        {
            id: 'chapter-20',
            alignment: 'right',
            hidden: false,
            title: 'One Example: Fordhanm Heights',
            image: '../data/Monroe_Coll_Walton_Fordham_jeh.jpg',
            description: 'Fordham is a neighborhood located in the western Bronx. According to 2018 Community  Health  Profiles, an estimated 34% of Fordham South residents lived in poverty, compared to 25% in all of the Bronx and 20% in all of New York City. Percentage of non-white population is 68%.',
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
            },
            {
                layer: 'mostpoor',
                opacity: 0,
                duration: 3000
            },
            ],
            onChapterExit: []
        },
        {
            id: 'chapter-21',
            alignment: 'left',
            hidden: true,
            title: 'MCDA',
            description: 'Tutorial Created for Methods in Spatial Research, Spring 2022.',
            location: {
                center: [-73.89450, 40.85480],
                zoom: 14.8,
                pitch: 50,
                bearing: 30
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
            },
            {
                layer: 'mostpoor',
                opacity: 0,
                duration: 3000
            },
            ],
            onChapterExit: []
        },
        {
            id: 'chapter-22',
            alignment: 'center',
            hidden: false,
            title: 'See more detials', 
            image: '../data/image问问.jpg',
            description: 'Please see more details in the anaysis page.',
            location: {
                center: [-73.89450, 40.85480],
                zoom: 14.8,
                pitch: 50,
                bearing: 30
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
            },
            {
                layer: 'mostpoor',
                opacity: 0,
                duration: 3000
            },
            ],
            onChapterExit: []
        },
    ]
};

