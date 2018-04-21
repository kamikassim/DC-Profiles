$(document).ready(function () {
     $.get('https://s3.amazonaws.com/dc-profiles/Students.json', function(profiles){
        // table 
        profiles.sort(function(a, b){return 0.5 - Math.random()});
        function renderProfiles(studentArray){
            var studentData = '';
            
            studentArray.forEach(function(currentProfile){
                studentData += '<div class="card border-primary">'
                studentData += '<div class="card-body">'
                studentData += '<p class="fullName">' + currentProfile.fullName + '</p>'
                studentData += '<p class="portfolioUrl">' + currentProfile.portfolioUrl + '</p>'
                studentData += '<p class="githubUrl">' + currentProfile.githubUrl + '</p>'
                studentData += '<p class="linkedinUrl">' + currentProfile.linkedinUrl + '</p>'
                studentData += '<p class="missionStatement">' + currentProfile.missionStatement + '</p>'
                studentData += '<p class="email">' + currentProfile.email + '</p>'
                studentData += '<p class="id">' + currentProfile.id + '</p>' 
                // studentData += '<p class="showcase">' + currentProfile.showcase + '</p>'    
                //showcase array
                currentProfile.showcase.forEach(function(sc){
                    studentData += '<p class="showcase">'+ sc.projectName +'</p>'
                    studentData += '<p class="showcase">'+ sc.url +'</p>'
                    studentData += '<p class="showcase">'+ sc.githubUrl +'</p>'
                    studentData += '<p class="showcase">'+ sc.description +'</p>'
                    studentData += '<p class="showcase">'+ sc.demoVideo +'</p>' 
                });   
                studentData += '</div> </div>';
            });
            
            return studentData;
        };

        var testHTML = renderProfiles(profiles);
        $('.students-info').html(testHTML);


    // //Set up click listener
    // $('.movies-container').on('click', '.button', function(){
    //     var imdbID = $(this).data('id');
    //     var movie = movieData.find(function(currentMovie){
    //         return currentMovie.imdbID == imdbID;
    //     });
    //     var watchlistJSON = localStorage.getItem('watchlist');
    //     var watchlist = JSON.parse(watchlistJSON);

    //     if (watchlist == null){
    //     watchlist = [];
    //     }
    //     watchlist.push(movie);
        
    //     watchlistJSON = JSON.stringify(watchlist);
    //     localStorage.setItem('watchlist', watchlistJSON);
    // });

        // $('form').on('submit', function(e){
        //     e.preventDefault();
        //     var searchString = $('.search-bar').val();
        //     var urlEncodedSearchString = encodeURIComponent(searchString);
        //     $.ajax({
        //         url: "https://s3.amazonaws.com/dc-profiles/Students.json" + urlEncodedSearchString,
        //         method: "GET",
        //         success: function(currentProfile) {
        //             //movieData = currentProfile.Search;
        //             var testHTML = renderProfiles(profiles.Search);
        //             $('.students-info').html(testHTML);
        //         }
        //     })   
        // });
    });   
});

           