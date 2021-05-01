
var submitBtn = document.querySelector('.submit');
var cityOnePoi = document.querySelector('#one');
var cityTwoPoi = document.querySelector('#two');


// this creates a variable and states that this is an array for storying multiple values, strings or objects
var findCountry = []
// This preserve the array upon refresh, nolonger starting with an empty array from the findCountry = []
var findCountry = JSON.parse(localStorage.getItem('City')) || [];

// Begin fuction to search for city
submitBtn.onclick = findCity;
function findCity(event) {
    event.preventDefault();
    var citySearch = document.querySelector('#search').value
    console.log(citySearch)
    
    // We are puhsing the user input search value from city Search into the findCountry array
    findCountry.push(citySearch)
    // We are now storing that array variable and all it's values in local storage
    localStorage.setItem('City', JSON.stringify(findCountry));

    var seventh = findCountry[findCountry.length - 4];
    var eigth = findCountry[findCountry.length - 3];
    var ninth = findCountry[findCountry.length - 2];
    var tenth = findCountry[findCountry.length - 1];
    var both = [tenth, ninth, eigth, seventh]
    console.log(ninth);
    console.log(tenth);
    console.log(both)
    console.log(ninth + tenth)
    
    localStorage.setItem('Key', JSON.stringify(both));

    // this fetch searches by country or cities. Searching by country find attribute captical of country - for a map view with wiki articles and images of laction.  Searching by city will list suburbes and list out images
    fetch('https://www.triposo.com/api/20210317/location.json?part_of=' + citySearch + '&account=6OIHILXY&token=cd6hxbcw7b7ujjuv48p0pjiqo5bb2zp3')



    .then(function(response) {
        return response.json();   
    })
    .then(function(response) {
        console.log(response);
        
    // Country search, Cities, points of interest images
        // First City, Points of interest and image
        var cityOneName = document.querySelector('#city-one-name')
        var cityOneResponseName = response.results[0].name;
        cityOneName.textContent = cityOneResponseName;

        var cityOneImageTitle = document.querySelector('#city-one-image-title')
        var cityOneKnowFor = response.results[0].snippet;
        cityOneImageTitle.textContent = cityOneKnowFor;

        var cityOneImagePhoto = document.querySelector('.city-one-image')
        var cityOneResponsePhoto = response.results[0].images[0].source_url;
        cityOneImagePhoto.setAttribute('src', cityOneResponsePhoto);
        
        // Second City, Points of interest and image
        var cityTwoName = document.querySelector('#city-two-name')
        var cityTwoResponseName = response.results[1].name;
        cityTwoName.textContent = cityTwoResponseName;

        var cityTwoImageTitle = document.querySelector('#city-two-image-title')
        var cityTwoKnowFor = response.results[1].snippet;
        cityTwoImageTitle.textContent = cityTwoKnowFor;

        var cityTwoImagePhoto = document.querySelector('.city-two-image')
        var cityTwoResponsePhoto = response.results[1].images[0].source_url;
        cityTwoImagePhoto.setAttribute('src', cityTwoResponsePhoto);

        // Third City, Points of interest and image
        var cityThreeName = document.querySelector('#city-three-name')
        var cityThreeResponseName = response.results[2].name;
        cityThreeName.textContent = cityThreeResponseName;

        var cityThreeImageTitle = document.querySelector('#city-three-image-title')
        var cityThreeKnowFor = response.results[2].snippet;
        cityThreeImageTitle.textContent = cityThreeKnowFor;

        var cityThreeImagePhoto = document.querySelector('.city-three-image')
        var cityThreeResponsePhoto = response.results[2].images[0].source_url;
        cityThreeImagePhoto.setAttribute('src', cityThreeResponsePhoto);

        // Forth City, Points of interest and image
        var cityFourName = document.querySelector('#city-four-name')
        var cityFourResponseName = response.results[3].name;
        cityFourName.textContent = cityFourResponseName;

        var cityFourImageTitle = document.querySelector('#city-four-image-title')
        var cityFourKnowFor = response.results[3].snippet;
        cityFourImageTitle.textContent = cityFourKnowFor;

        var cityFourImagePhoto = document.querySelector('.city-four-image')
        var cityFourResponsePhoto = response.results[3].images[0].source_url;
        cityFourImagePhoto.setAttribute('src', cityFourResponsePhoto);

        // Fifth City, Points of interest and image
        var cityFiveName = document.querySelector('#city-five-name')
        var cityFiveResponseName = response.results[4].name;
        cityFiveName.textContent = cityFiveResponseName;

        var cityFiveImageTitle = document.querySelector('#city-five-image-title')
        var cityFiveKnowFor = response.results[4].snippet;
        cityFiveImageTitle.textContent = cityFiveKnowFor;

        var cityFiveImagePhoto = document.querySelector('.city-five-image')
        var cityFiveResponsePhoto = response.results[4].images[0].source_url;
        cityFiveImagePhoto.setAttribute('src', cityFiveResponsePhoto);

        // Sixth City, Points of interest and image
        var citySixName = document.querySelector('#city-six-name')
        var citySixResponseName = response.results[5].name;
        citySixName.textContent = citySixResponseName;

        var citySixImageTitle = document.querySelector('#city-six-image-title')
        var citySixKnowFor = response.results[5].snippet;
        citySixImageTitle.textContent = citySixKnowFor;

        var citySixImagePhoto = document.querySelector('.city-six-image')
        var citySixResponsePhoto = response.results[5].images[0].source_url;
        citySixImagePhoto.setAttribute('src', citySixResponsePhoto);

        // Seventh City, Points of interest and image
        var citySevenName = document.querySelector('#city-seven-name')
        var citySevenResponseName = response.results[6].name;
        citySevenName.textContent = citySevenResponseName;

        var citySevenImageTitle = document.querySelector('#city-seven-image-title')
        var citySevenKnowFor = response.results[6].snippet;
        citySevenImageTitle.textContent = citySevenKnowFor;

        var citySevenImagePhoto = document.querySelector('.city-seven-image')
        var citySevenResponsePhoto = response.results[6].images[0].source_url;
        citySevenImagePhoto.setAttribute('src', citySevenResponsePhoto);

        // Eighth City, Points of interest and image
        var cityEightName = document.querySelector('#city-eight-name')
        var cityEightResponseName = response.results[7].name;
        cityEightName.textContent = cityEightResponseName;

        var cityEightImageTitle = document.querySelector('#city-eight-image-title')
        var cityEightKnowFor = response.results[7].snippet;
        cityEightImageTitle.textContent = cityEightKnowFor;

        var cityEightImagePhoto = document.querySelector('.city-eight-image')
        var cityEightResponsePhoto = response.results[7].images[0].source_url;
        cityEightImagePhoto.setAttribute('src', cityEightResponsePhoto);

        // Nineth City, Points of interest and image
        var cityNineName = document.querySelector('#city-nine-name')
        var cityNineResponseName = response.results[8].name;
        cityNineName.textContent = cityNineResponseName;

        var cityNineImageTitle = document.querySelector('#city-nine-image-title')
        var cityNineKnowFor = response.results[8].snippet;
        cityNineImageTitle.textContent = cityNineKnowFor;

        var cityNineImagePhoto = document.querySelector('.city-nine-image')
        var cityNineResponsePhoto = response.results[8].images[0].source_url;
        cityNineImagePhoto.setAttribute('src', cityNineResponsePhoto);

        // Tenth City, Title, Points of interest and image
        var cityTenName = document.querySelector('#city-ten-name')
        var cityTenResponseName = response.results[9].name;
        cityTenName.textContent = cityTenResponseName;

        var cityTenImageTitle = document.querySelector('#city-ten-image-title')
        var cityTenKnowFor = response.results[9].snippet;
        cityTenImageTitle.textContent = cityTenKnowFor;

        var cityTenImagePhoto = document.querySelector('.city-ten-image')
        var cityTenResponsePhoto = response.results[9].images[0].source_url;
        cityTenImagePhoto.setAttribute('src', cityTenResponsePhoto);


    // corresponds with the html tourism-criteria radio buttons
        firstCityButton = document.querySelector('#one')
        firstCityButton.textContent = response.results[0].id;
        

        secondCityButton = document.querySelector('#two')
        secondCityButton.textContent = response.results[1].id;
        

        thirdCityButton = document.querySelector('#three')
        thirdCityButton.textContent = response.results[2].name;
        

        forthCityButton = document.querySelector('#four')
        forthCityButton.textContent = response.results[3].name;

        fifthCityButton = document.querySelector('#five')
        fifthCityButton.textContent = response.results[4].name;
        

        sixthCityButton = document.querySelector('#six')
        sixthCityButton.textContent = response.results[5].name;
        

        seventhCityButton = document.querySelector('#seven')
        seventhCityButton.textContent = response.results[6].name;
        

        eighthCityButton = document.querySelector('#eight')
        eighthCityButton.textContent = response.results[7].name;

        ninthCityButton = document.querySelector('#nine')
        ninthCityButton.textContent = response.results[8].name;
        

        tenthCityButton = document.querySelector('#ten')
        tenthCityButton.textContent = response.results[9].name;
        
        

        cityOnePoi.addEventListener('click', function(){
            var cityOnePoi = document.querySelector('#city-one-poi-name')
            var cityOnePoiResponse = response.results[0].name;
            cityOnePoi.textContent = cityOnePoiResponse;
    
            // var cityOneImageTitle = document.querySelector('#city-one-image-title')
            // var cityOneKnowFor = response.results[0].snippet;
            // cityOneImageTitle.textContent = cityOneKnowFor;
    
            // var cityOneImagePhoto = document.querySelector('.city-one-image')
            // var cityOneResponsePhoto = response.results[0].images[0].source_url;
            // cityOneImagePhoto.setAttribute('src', cityOneResponsePhoto);
            
        });

        cityTwoPoi.addEventListener('click', function(){
            var cityTwoPoi = document.querySelector('#city-one-poi-name')
            var cityTwoPoiResponse = response.results[1].name;
            cityTwoPoi.textContent = cityTwoPoiResponse;
    
            // var cityOneImageTitle = document.querySelector('#city-one-image-title')
            // var cityOneKnowFor = response.results[0].snippet;
            // cityOneImageTitle.textContent = cityOneKnowFor;
    
            // var cityOneImagePhoto = document.querySelector('.city-one-image')
            // var cityOneResponsePhoto = response.results[0].images[0].source_url;
            // cityOneImagePhoto.setAttribute('src', cityOneResponsePhoto);
            
        });

    })


   
     
    // .catch(err => {
    // 	console.error(err);
    // });



    // this fetch will find points of interest (food) locations by city name. Hard code search option values into radio buttons that will populate from the country fetch search
    // fetch('https://www.triposo.com/api/20210317/poi.json?location_id=' + citySearch + '&tag_labels=eatingout&account=6OIHILXY&token=cd6hxbcw7b7ujjuv48p0pjiqo5bb2zp3')

    // .then(function(response) {
    //     return response.json();   
    // })
    // .then(function(response) {
    //     console.log(response);

    // })

    // .catch(err => {
    //     console.error(err);
    // });

};














