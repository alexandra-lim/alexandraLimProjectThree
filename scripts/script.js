const chooseAdventureApp = {};

chooseAdventureApp.init = function(){
    chooseAdventureApp.start();
    chooseAdventureApp.button1Click();
    chooseAdventureApp.button2Click();
};

chooseAdventureApp.baseStory = {
    message: 'You\'re at brodflour, the city\'s newest bread bakery, for brunch and your bff decides to order a $14 avocado and egg sourdough bun and a cortado. You were only planning on having a drip coffee and a slice of toast and jam, but you\'re starving. What do you do?',
    optionA: 'Buy the avocado toast, YOLO',
    optionB: 'Avoid temptation and eat your plain toast'
};

chooseAdventureApp.avoToast = {
    buyToast: {
        message: 'You order the avocado toast and it is the best decision you\'ve ever made. But the camera eats first and you snap a photo for Instagram. You are living for that avocado toast.',
        nextQuestion: 'The next day at work, your boss tells you that the company is downsizing. And you are being let go. You\'re ineligible for severance pay and you only have enough savings for one month\'s worth of living expenses. This is your chance to do something different. What do you do next?',
        displayMessage: function(){
            const avoToastMsg = `
                ${chooseAdventureApp.avoToast.buyToast.message} 
                <p class="nextQuestion">
                    ${chooseAdventureApp.avoToast.buyToast.nextQuestion}
                </p>`;
            $('.message').hide().html(avoToastMsg).fadeIn('slow');
        },
        optionA: 'Become an influencer and a social media manager',
        optionB: 'Learn how to code'
    },
    refuseToast: {
        message: 'You are so hungry, but that avocado toast would have been a huge chunk of your monthly budget! You head home, looking forward to your taco dinner. But just as you\'re about to make dinner, you discover that the ground beef in your fridge has gone bad and dinner is now ruined.',
        nextQuestion: 'With your homemade taco idea now in the compost bin, do you head back out to get groceries, or do you just order tacos on UberEats?',
        displayMessage: function(){
            const noToastMsg = `
                ${chooseAdventureApp.avoToast.refuseToast.message} 
                <p class="nextQuestion">
                    ${chooseAdventureApp.avoToast.refuseToast.nextQuestion}
                </p>`;
            $('.message').hide().html(noToastMsg).fadeIn('slow');
        },
        optionA: 'Go get groceries',
        optionB: 'Order tacos on UberEats'
    }
};

chooseAdventureApp.newJob = {
    newbieInfluencer: {
        message: 'You decide to become an influencer (and also a social media manager to pay the bills). Your avocado toast picture has blown up Instagram and you start receiving messages from restaurants and cafes asking you to promote them.',
        nextQuestion: 'You gain local fame promoting these restaurants, only choosing to work with independent locavore businesses. But then McDonald\'s comes knocking and they\'re offering you a fortune to promote them. Do you choose to work with McDonald\'s?',
        displayMessage: function(){
            const influencerMsg = `
                ${chooseAdventureApp.newJob.newbieInfluencer.message}
                <p class="nextQuestion">
                    ${chooseAdventureApp.newJob.newbieInfluencer.nextQuestion}
                </p>`;
            $('.message').html(influencerMsg);
        },
        optionA: 'Work with McDonald\'s',
        optionB: 'Decline McDonald\'s offer' 
    },
    webDev: {
        message: 'You\'ve always been somewhat interested in coding. You try a few courses on Codecademy, but you want more. Someone mentions HackerYou at a party, and the next day, you call them. You decide to enroll in the part-time Web Development course and you love it! You decide that being a front-end web developer is for you, and successfully apply for their bootcamp program. Nine weeks of bootcamp and two months of job searching later, you land your first web development role at a well-known digital agency. You are now a junior front-end web developer who brings their new corgi puppy to work every day.',
        displayMessage: function(){
            const webDevMsg = `${chooseAdventureApp.newJob.webDev.message}`;
            const refreshButton = `<input type="submit" class="refresh animated infinite pulse" value="Play again">`;
            $('.message').html(webDevMsg);
            $('form').append(refreshButton);
        }
    }
};

chooseAdventureApp.sellYourSoul = {
    majorInfluencer: {
        message: 'You sell your soul to a corporation, but it pays off. After a row of successful campaigns with McDonald\'s, then Hershey\'s, you get a call from Kendall Jenner\'s brand manager. She wants you to help promote Kendall and Kylie\'s new designer avocado line. You\'ve made it to the big leagues. You quit your social media manager job and start flying to exotic locales to promote the next big thing.',
        displayMessage: function(){
            const majorInfluencerMsg = `${chooseAdventureApp.sellYourSoul.majorInfluencer.message}`;
            const refreshButton = `<input type="submit" class="refresh animated infinite pulse" value="Play again">`;
            $('.message').html(majorInfluencerMsg);
            $('form').append(refreshButton);
        }
    },
    barista: {
        message: 'You refuse to work with McDonald\'s. Sadly, as time passes, your influencer career never truly takes off and you get a third job as a barista. Your days now consist of making cappuccinos for suits at 7 am and taking mid-afternoon naps so you have enough energy to go out for dinner to promote the city\'s hottest restaurants.',
        displayMessage: function(){
            const baristaMsg = `${chooseAdventureApp.sellYourSoul.barista.message}</p>`;
            $('.message').html(baristaMsg);
        }
    }
};

chooseAdventureApp.badBeef = {
    groceries: {
        message: 'Well, you are one responsible millennial. You take the money you\'ve saved from avocado toast, somehow manage to avoid the temptation of UberEats, and make your way to the grocery store. You get the ground beef you need for tacos, make your tacos when you get home, and settle down for an evening of Netflix. Your journey ends here with a Stranger Things marathon and your cat Mittens purring on your lap.',
        displayMessage: function(){
            const groceriesMsg = `${chooseAdventureApp.badBeef.groceries.message}`;
            const refreshButton = `<input type="submit" class="refresh animated infinite pulse" value="Play again">`;
            $('.message').html(groceriesMsg);
            $('form').append(refreshButton);
        }
    },
    uberEats: {
        message: 'Ain\'t nobody got time to get new ground beef and make tacos! You order tacos from Grand Electric, your favourite taco spot. After 45 minutes, your order finally arrives. The extra $7 for guac was worth it, and that Baja fish taco always hits the spot.',
        nextQuestion: 'You go to bed dreaming of sweet, sweet tacos. But the next day, there\'s a letter in your mailbox. Your landlord is increasing your rent in a few months and thanks to the lack of rent control, your new rent is double what you are currently paying. And average rent prices across the city have increased since your last apartment search. What now?? Those tacos don\'t seem so sweet after all.',
        displayMessage: function(){
            const uberEatsMsg = `
                ${chooseAdventureApp.badBeef.uberEats.message} 
                <p class="nextQuestion">
                    ${chooseAdventureApp.badBeef.uberEats.nextQuestion}
                </p>`;
            $('.message').html(uberEatsMsg);
        },
        optionA: 'Find a roommate',
        optionB: 'Move back home'
    }
};

chooseAdventureApp.newHome = {
    roommate: {
        message: 'You decide to look for a roommate. You give up your one bedroom downtown condo and move in with your co-worker in the west end. Life is great, but it\'s not the same as living on your own. But rent is affordable. As time passes, your dream of living on your own again fades away, the average one bedroom rental and purchase both skyrocketing to record highs. After ten years, you finally have enough savings to buy a tiny house. You Konmari your possessions and start anew in the suburbs of suburbs. Commuter life begins.',
        displayMessage: function(){
            const roommateMsg = `${chooseAdventureApp.newHome.roommate.message}`;
            $('.message').html(roommateMsg);
            $('form').append(refreshButton);
        }
    },
    moveHome: {
        message: 'You decide to move home and live in your parents\' basement for the time being. They live in the city, and the 45 minute commute each way isn\'t too bad. But you never move out again. The food\'s too good. You also put all of your eggs in one basket and lose 95% of your savings by investing in Bitcoin.',
        displayMessage: function(){
            const moveHomeMsg = `${chooseAdventureApp.newHome.moveHome.message}`;
            const refreshButton = `<input type="submit" class="refresh animated infinite pulse" value="Play again">`;
            $('.message').html(moveHomeMsg);
            $('form').append(refreshButton);
        }
    }
}; 

// if you buy the avo toast path
chooseAdventureApp.button1Click = function(){
    $('.buyToast').on('click', function(e){
        e.preventDefault();
        chooseAdventureApp.avoToast.buyToast.displayMessage();
        $(this).prop('value', `${chooseAdventureApp.avoToast.buyToast.optionA}`);
        $(this).toggleClass('newbieInfluencer');
        $('#optionB').prop('value', `${chooseAdventureApp.avoToast.buyToast.optionB}`);
        $('#optionB').toggleClass('webDev');
    
        // if you choose to become an influencer
        $('.newbieInfluencer').on('click', function(e){
            e.preventDefault();
            chooseAdventureApp.newJob.newbieInfluencer.displayMessage();
            $(this).prop('value', `${chooseAdventureApp.newJob.newbieInfluencer.optionA}`);
            $(this).toggleClass('mcD');
            $('#optionB').prop('value', `${chooseAdventureApp.newJob.newbieInfluencer.optionB}`);
            $('#optionB').toggleClass('barista');
    
            // if you sell your soul to corporate
            $('.mcD').on('click', function(e){
                e.preventDefault();
                chooseAdventureApp.sellYourSoul.majorInfluencer.displayMessage();
                chooseAdventureApp.hideButtons();
            });
    
            // if you don't sell your soul to corporate, barista life
            $('.barista').on('click', function (e) {
                e.preventDefault();
                chooseAdventureApp.sellYourSoul.barista.displayMessage();
                chooseAdventureApp.hideButtons();
            });
        });
    
        // if you become a web developer
        $('.webDev').on('click', function(e){
            e.preventDefault();
            chooseAdventureApp.newJob.webDev.displayMessage();
            chooseAdventureApp.hideButtons();
        })
    });
};

    // if you don't buy avo toast path
chooseAdventureApp.button2Click = function() {
    $('.refuseToast').on('click', function(e){
        e.preventDefault();
        chooseAdventureApp.avoToast.refuseToast.displayMessage();
        $('#optionA').prop('value', `${chooseAdventureApp.avoToast.refuseToast.optionA}`);
        $('#optionA').toggleClass('groceries');
        $(this).prop('value', `${chooseAdventureApp.avoToast.refuseToast.optionB}`);
        $(this).toggleClass('uberEats');

        // if you choose to order UberEats
        $('.uberEats').on('click', function (e) {
            e.preventDefault();
            chooseAdventureApp.badBeef.uberEats.displayMessage();
            $('#optionA').prop('value', `${chooseAdventureApp.badBeef.uberEats.optionA}`);
            $('#optionA').toggleClass('roommate')
            $(this).prop('value', `${chooseAdventureApp.badBeef.uberEats.optionB}`);
            $(this).toggleClass('moveHome');

            // find a roommate
            $('.roommate').on('click', function(e){
                e.preventDefault();
                chooseAdventureApp.newHome.roommate.displayMessage();
                chooseAdventureApp.hideButtons();
            });

            // move home
            $('.moveHome').on('click', function(e){
                e.preventDefault();
                chooseAdventureApp.newHome.moveHome.displayMessage();
                chooseAdventureApp.hideButtons();
            });
        });

        // if you choose to buy groceries
        $('.groceries').on('click', function(e){
            e.preventDefault();
            chooseAdventureApp.badBeef.groceries.displayMessage();
            chooseAdventureApp.hideButtons();
        });
    });
};

// starting point
chooseAdventureApp.start = function() {
    $('.message').html(chooseAdventureApp.baseStory.message);
    $('.buyToast').prop('value', `${chooseAdventureApp.baseStory.optionA}`);
    $('.refuseToast').prop('value', `${chooseAdventureApp.baseStory.optionB}`);
}

// hide yo buttons
chooseAdventureApp.hideButtons = function() {
    $('#optionA, #optionB').hide();
}

// doc ready
$(document).ready(function(){
   chooseAdventureApp.init();
});

