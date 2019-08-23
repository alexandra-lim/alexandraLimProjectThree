const chooseAdventure = {};

chooseAdventure.init = function(){
    chooseAdventure.start();
    chooseAdventure.buttonSubmit();
};

chooseAdventure.baseStory = {
    message: 'You\'re at brodflour, the city\'s newest bread bakery, for brunch and your bff decides to order a $14 avocado and egg sourdough bun and a cortado. You were only planning on having a drip coffee and a slice of toast and jam, but you\'re starving. What do you do?',
    optionA: 'Buy the avocado toast, YOLO',
    optionB: 'Avoid temptation and eat your plain toast'
};

chooseAdventure.avoToast = {
    buyToast: {
        message: 'You buy the avocado toast and it is the best decision you\'ve ever made. But the camera eats first and you snap a photo for Instagram. You are living for that avocado toast.',
        nextQuestion: 'The next day at work, your boss tells you that the company is downsizing. And you are being let go. You\'re ineligible for severance pay and you only have enough savings for one month\'s worth of living expenses. This is your chance to do something different. What do you do next?',
        displayMessage: function(){
            const avoToastMsg = `${chooseAdventure.avoToast.buyToast.message} 
            <p>${chooseAdventure.avoToast.buyToast.nextQuestion}</p>`;
            $('.message').html(avoToastMsg);
        },
        optionA: 'Become an influencer and a social media manager',
        optionB: 'Learn how to code'
    },
    refuseToast: {
        message: 'You are so hungry, but that avocado toast would have been a huge chunk of your monthly budget! You head home, looking forward to your taco dinner. But when you open your fridge door, you discover that the ground beef in your fridge has gone bad and dinner is now ruined.',
        nextQuestion: 'With the main ingredient of your taco dinner now in the compost bin, do you head back out to get groceries, or do you just order tacos on UberEats?',
        displayMessage: function(){
            const noToastMsg = `${chooseAdventure.avoToast.refuseToast.message} 
            <p>${chooseAdventure.avoToast.refuseToast.nextQuestion}</p>`;
            $('.message').html(noToastMsg);
        },
        optionA: 'Go get groceries',
        optionB: 'Order tacos on UberEats'
    }
};

chooseAdventure.newJob = {
    newbieInfluencer: {
        message: 'You decide to become an influencer (and also a social media manager to pay the bills). Your avocado toast picture has blown up Instagram and you start receiving messages from restaurants and cafes asking you to promote them.',
        nextQuestion: 'You gain local fame promoting these restaurants, only choosing to work with independent locavore businesses. But then McDonald\'s comes knocking and they\'re offering you a large amount of money to promote them. Do you choose to work with McDonald\'s?',
        displayMessage: function(){
            const influencerMsg = `${chooseAdventure.newJob.newbieInfluencer.message} 
                <p>${chooseAdventure.newJob.newbieInfluencer.nextQuestion}</p>`;
            $('.message').html(influencerMsg);
        },
        optionA: 'Work with McDonald\'s',
        optionB: 'Decline McDonald\'s offer' 
    },
    webDev: {
        message: 'You\'ve always been somewhat interested in coding. You try a few courses on Codecademy, breezing through them. Someone mentions HackerYou at a party, and the next day, you call them. You decide to enroll in the part-time Web Development course and you love it! You decide that being a front-end web developer is for you, and successfully apply for their bootcamp program. Nine weeks of bootcamp and two months of job searching later, you land your first web development role at a well-known digital agency. You are now a junior front-end web developer and bring your new corgi puppy to work every day.',
        theEnd: 'The End.',
        displayMessage: function(){
            const webDevMsg = `${chooseAdventure.newJob.webDev.message}
                <p>${chooseAdventure.newJob.webDev.theEnd}</p>`;
            $('.message').html(webDevMsg);
        }
    }
};

chooseAdventure.sellYourSoul = {
    majorInfluencer: {
        message: 'You sell your soul to a corporation, but it pays off. After a row of successful campaigns with McDonald\'s, then Hershey\'s, you get a call from Kendall Jenner\'s brand manager. She wants you to help promote Kendall and Kylie\'s new designer avocado line. You\'ve made it to the big leagues. You quit your social media manager job and start flying to exotic locales to promote the next big thing.',
        theEnd: 'The End.',
        displayMessage: function(){
            const majorInfluencerMsg = `${chooseAdventure.sellYourSoul.majorInfluencer.message}
                <p>${chooseAdventure.sellYourSoul.majorInfluencer.theEnd}`;
            $('.message').html(majorInfluencerMsg);
        }
    },
    barista: {
        message: 'You refuse to work with McDonald\'s. Sadly, as time passes, your influencer career never truly takes off and you get a third job as a barista. Your days now consist of making cappuccinos for unappreciative guests at 7 am and taking mid-afternoon naps so you have enough energy to go out for dinner to promote the city\'s hottest restaurants.',
        theEnd: 'The End.',
        displayMessage: function(){
            const baristaMsg = `${chooseAdventure.sellYourSoul.barista.message}
                <p>${chooseAdventure.sellYourSoul.barista.theEnd}</p>`;
            $('.message').html(baristaMsg);
        }
    }
};

chooseAdventure.badBeef = {
    groceries: {
        message: 'Well, you are one responsible Millennial. You take the money you\'ve saved from avocado toast, somehow manage to avoid the temptation of UberEats, and make your way to the grocery store. You get the ground beef you need for tacos, make your tacos when you get home, and settle down for an evening of Netflix. Your journey ends here with a Stranger Things marathon with your cat Mittens purring on your lap.',
        theEnd: 'The End.',
        displayMessage: function(){
            const groceriesMsg = `${chooseAdventure.badBeef.groceries.message}
                <p>${chooseAdventure.badBeef.groceries.theEnd}</p>`;
            $('.message').html(groceriesMsg);
        }
    },
    uberEats: {
        message: 'Ain\'t nobody got time to get new ground beef and make tacos! You order tacos from Grand Electric, your favourite taco spot. After 45 minutes, your order finally arrives. The extra $7 for guac was worth it, and that Baja fish taco always hits the spot.',
        nextQuestion: 'You go to bed dreaming of sweet, sweet tacos. But the next day, there\'s a letter in your mailbox. Your landlord is increasing your rent in a few months and thanks to the lack of rent control, your new rent is double what you are currently paying. And average rent prices across the city have increased since your last apartment search. What now?? Those tacos don\'t seem so sweet after all.',
        displayMessage: function(){
            const uberEatsMsg = `${chooseAdventure.badBeef.uberEats.message} 
                <p>${chooseAdventure.badBeef.uberEats.nextQuestion}</p>`;
            $('.message').html(uberEatsMsg);
        },
        optionA: 'Find a roommate',
        optionB: 'Move back home'
    }
};

chooseAdventure.newHome = {
    roommate: {
        message: 'You decide to look for a roommate. You give up your one bedroom downtown condo and move in with your co-worker in the west end. Life is great, but it\'s not the same as living on your own. But rent is affordable. As time passes, your dream of living on your own again fades away, the average one bedroom rental and purchase both skyrocketing to record highs. After ten years, you finally have enough savings to buy a tiny house. You Konmari your possessions and start anew in the suburbs of suburbs. Commuter life begins.',
        theEnd: 'The End.',
        displayMessage: function(){
            const roommateMsg = `${chooseAdventure.newHome.roommate.message}
                <p>${chooseAdventure.newHome.roommate.theEnd}</p>`;
            $('.message').html(roommateMsg);
        }
    },
    moveHome: {
        message: 'You decide to move home for the timebeing. Your parents live in the city, and the 45 minute commute each way isn\'t too bad. Plus you hardly visited your parents when you lived alone and you feel bad about it. But you never move out again. The food\'s too good. You also put all your eggs in one basket and lose all of your savings by investing in Bitcoin.',
        theEnd: 'The End.',
        displayMessage: function(){
            const moveHomeMsg = `${chooseAdventure.newHome.moveHome.message}
                <p>${chooseAdventure.newHome.moveHome.theEnd}</p>`;
            $('.message').html(moveHomeMsg);
        }
    }
}; 

// if you buy the avo toast path
chooseAdventure.buttonSubmit = function(){
    $('.buyToast').on('click', function(e){
        e.preventDefault();
        chooseAdventure.avoToast.buyToast.displayMessage();
        $(this).prop('value', `${chooseAdventure.avoToast.buyToast.optionA}`);
        $(this).toggleClass('newbieInfluencer');
        $('#optionB').prop('value', `${chooseAdventure.avoToast.buyToast.optionB}`);
        $('#optionB').toggleClass('webDev');
    
        // if you choose to become an influencer
        $('.newbieInfluencer').on('click', function(e){
            e.preventDefault();
            chooseAdventure.newJob.newbieInfluencer.displayMessage();
            $(this).prop('value', `${chooseAdventure.newJob.newbieInfluencer.optionA}`);
            $(this).toggleClass('mcD');
            $('#optionB').prop('value', `${chooseAdventure.newJob.newbieInfluencer.optionB}`);
            $('#optionB').toggleClass('barista');
    
            // if you sell your soul to corporate
            $('.mcD').on('click', function(e){
                e.preventDefault();
                chooseAdventure.sellYourSoul.majorInfluencer.displayMessage();
                chooseAdventure.hideButtons();
            });
    
            // if you don't sell your soul to corporate, barista life
            $('.barista').on('click', function (e) {
                e.preventDefault();
                chooseAdventure.sellYourSoul.barista.displayMessage();
                chooseAdventure.hideButtons();
            });
        });
    
        // if you become a web developer
        $('.webDev').on('click', function(e){
            e.preventDefault();
            chooseAdventure.newJob.webDev.displayMessage();
            chooseAdventure.hideButtons();
        })
    });

    // if you don't buy avo toast path
    $('.refuseToast').on('click', function(e){
        e.preventDefault();
        chooseAdventure.avoToast.refuseToast.displayMessage();
        $('#optionA').prop('value', `${chooseAdventure.avoToast.refuseToast.optionA}`);
        $('#optionA').toggleClass('groceries');
        $('#optionB').prop('value', `${chooseAdventure.avoToast.refuseToast.optionB}`);
        $('#optionB').toggleClass('uberEats');

        // if you choose to order UberEats
        $('.uberEats').on('click', function (e) {
            e.preventDefault();
            chooseAdventure.badBeef.uberEats.displayMessage();
            $('#optionA').prop('value', `${chooseAdventure.badBeef.uberEats.optionA}`);
            $('#optionA').toggleClass('roommate')
            $('#optionB').prop('value', `${chooseAdventure.badBeef.uberEats.optionB}`);
            $('#optionB').toggleClass('moveHome');

            // find a roommate
            $('.roommate').on('click', function(e){
                e.preventDefault();
                chooseAdventure.newHome.roommate.displayMessage();
                chooseAdventure.hideButtons();
            });

            // move home
            $('.moveHome').on('click', function(e){
                e.preventDefault();
                chooseAdventure.newHome.moveHome.displayMessage();
                chooseAdventure.hideButtons();
            });
        });

        // if you choose to buy groceries
        $('.groceries').on('click', function(e){
            e.preventDefault();
            chooseAdventure.badBeef.groceries.displayMessage();
            chooseAdventure.hideButtons();
        });
    });
};

// starting point
chooseAdventure.start = function() {
    $('.message').html(chooseAdventure.baseStory.message);
    $('.buyToast').prop('value', `${chooseAdventure.baseStory.optionA}`);
    $('.refuseToast').prop('value', `${chooseAdventure.baseStory.optionB}`);
}

// hide yo buttons
chooseAdventure.hideButtons = function() {
    $('#optionA, #optionB').hide();
}

// doc ready
$(document).ready(function(){
   chooseAdventure.init();
});

