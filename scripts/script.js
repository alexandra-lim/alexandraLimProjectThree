const chooseAdventure = {};

const baseStory = {
    message: 'You\'re at brodflour for brunch and your bff decides to order a $14 avocado and egg sourdough bun and a cortado. You were only planning on having a drip coffee and a slice of toast and jam, but you\'re starving. What do you do?',
    optionA: 'Buy the avocado toast, YOLO',
    optionB: 'Avoid temptation and drink your sad coffee'
};
const avoToast = {
    buyToast: {
        message: 'You buy the avocado toast and it is the best decision you\'ve ever made. But the camera eats first and you snap a photo for Instagram. You are living for that avocado toast.',
        nextQuestion: 'The next day at work, your boss tells you that the company is downsizing. And you are being let go. You\'re ineligible for severance pay and you only have enough savings for one month\'s worth of living expenses. What do you do next?',
        optionA: 'Become an influencer and a social media manager',
        optionB: 'Become a front-end web developer'
    },
    refuseToast: {
        message: 'You are a champ and should be proud of yourself. That avocado toast would have been a huge chunk of your monthly budget! You go home super proud, but ravenous. Lo and behold, the ground beef in your fridge has gone bad and your taco dinner is ruined.',
        nextQuestion: 'With the main ingredient of your taco dinner now in the compost bin, do you head back out to get groceries, or do you just order tacos on UberEats?',
        optionA: 'Go to the grocery store',
        optionB: 'Order tacos on UberEats'
    }
};

const newJob = {
    newbieInfluencer: {
        message: 'You decide to become an influencer (and also a social media manager to pay the bills). Your avocado toast picture has blown up Instagram and you start receiving messages from restaurants and cafes asking you to promote them.',
        nextQuestion: 'You gain local fame promoting these restaurants, only choosing to work with independent locavore businesses. But then McDonald\'s comes knocking and they\'re offering you a large sum to promote them. Do you choose to work with McDonald\'s?',
        optionA: 'Work with McDonald\'s',
        optionB: 'Decline McDonald\'s offer'
    },
    webDev: {
        message: 'You\'ve always been somewhat interested in coding. You\'ve tried a few courses on Codecademy, and breezed through them. Why not become a web developer? Someone mentions HackerYou at a party, and the next day, you call them. You talk to a Student Success Coordinator, and decide to enroll in the part-time Web Development course. You love it and successfully apply for their bootcamp program! Nine weeks of bootcamp and two months of job searching later, you land your first web development role at a well-known digital agency. You are now a junior front-end web developer and bring your new corgi puppy to work every day. The end.'
    }
};

const sellYourSoul = {
    majorInfluencer: {
        message: 'You sell your soul to a corporation, but it pays off. After a row of successful campaigns with McDonald\'s, then Hershey\'s, you get a call from Kendall Jenner\'s brand manager. She wants you to help promote Kendall and Kylie\'s new designer avocado line. You\'ve made it to the big leagues. You quit your social media manager job and start flying to exotic locales to promote the next big thing. The end.'
    },
    barista: {
        message: 'McDonald\'s is evil and you refuse to work with them. But alas, your influencer career never truly takes off and you get a third job as a barista. Your days now consist of making cappuccinos for unappreciative guests at 7 am and taking mid-afternoon naps so you have enough energy to go out for dinner to promote the city\'s hottest restaurants. The end.'
    }
};

const badBeef = {
    groceries: {
        message: 'Well, you are one responsible Millennial. You take the money you\'ve saved from avocado toast, somehow manage to avoid the temptation of UberEats, and make your way to the grocery store. You get the ground beef you need for tacos, make your tacos when you get home, and settle down for an evening of Netflix. Your journey ends here with a Stranger Things marathon and your cat Mittens purring on your lap.'
    },
    uberEats: {
        message: 'Ain\'t nobody got time to get new ground beef and make tacos! You order tacos from Grand Electric, your favourite taco spot. After 45 minutes, your order finally arrives. The extra $7 for guac was worth it, and that Baja fish taco always hits the spot.',
        nextQuestion: 'You go to bed dreaming of sweet, sweet tacos. But the next day, there\'s a letter in your mailbox. Your landlord is increasing your rent in a few months and thanks to the lack of rent control, your new rent is double what you are currently paying. And average rent prices across the city have increased since your last apartment search. What now?? Those tacos don\'t seem so sweet after all.',
        optionA: 'Find a roommate',
        optionB: 'Move back home'
    }
};

const newHome = {
    roommate: {
        message: 'You decide to look for a roommate. You give up your one bedroom downtown condo and move in with your co-worker in the west end. Life is great, but it\'s not the same as living on your own. But rent is affordable. As time passes, your dream of living on your own again fades away, the average one bedroom rental and purchase both skyrocketing to record highs. After ten years, you finally have enough savings to buy a tiny house. You Konmari your possessions and start anew in the suburbs of suburbs.  Commuter life begins. The end.'
    },
    moveHome: {
        message: 'You decide to move home for the timebeing. Your parents live in the city, and the 45 minute commute each way isn\'t too bad. Plus you hardly visited your parents when you lived alone and you feel bad about it. But you never move out again. The food\'s too good. You also put all your eggs in one basket and lose all of your savings by investing in Bitcoin. The end.'
    }
}; 

// if you buy the avo toast path
$('.buyToast').on('click', function(e){
    e.preventDefault();
    const avoToastMsg = `${avoToast.buyToast.message} 
    <p>${avoToast.buyToast.nextQuestion}</p>`;
    $('.message').html(avoToastMsg);
    $(this).prop('value', `${avoToast.buyToast.optionA}`);
    $(this).toggleClass('newbieInfluencer');
    $('.refuseToast').prop('value', `${avoToast.buyToast.optionB}`);
    $('.refuseToast').toggleClass('webDev');

    // if you choose to become an influencer
    $('.newbieInfluencer').on('click', function(e){
        e.preventDefault();
        const influencerMsg = `${newJob.newbieInfluencer.message} 
        <p>${newJob.newbieInfluencer.nextQuestion}</p>`;
        $('.message').html(influencerMsg);
        $(this).prop('value', `${newJob.newbieInfluencer.optionA}`);
        $(this).toggleClass('mcD')
        $('.webDev').prop('value', `${newJob.newbieInfluencer.optionB}`);
        $('.webDev').toggleClass('barista');

        // if you sell your soul to corporate
        $('.mcD').on('click', function(e){
            e.preventDefault();
            const majorInfluencerMsg = `${sellYourSoul.majorInfluencer.message}`;
            $('.message').html(majorInfluencerMsg);
            $('#optionA, #optionB').hide();
        });
    });

    // if you become a web developer
    $('.webDev').on('click', function(e){
        e.preventDefault();
        const webDevMsg = `${newJob.webDev.message}`;
        $('.message').html(webDevMsg);
        $('#optionA, #optionB').hide();
    })

    // if you don't sell your soul to corporate, barista life
    $('.barista').on('click', function (e) {
        e.preventDefault();
        const baristaMsg = `${sellYourSoul.barista.message}`;
        $('.message').html(baristaMsg);
        $('#optionA, #optionB').hide();
    });
    
});





// let userVal2 = $('.optionB').on('click', function (e) {
//     e.preventDefault();
//     // console.log('click');
//     if (userVal2 === userVal2) {
//         console.log(avoToast.refuseToast.message);
//     } 
// });


$(document).ready(function(){
    $('.message').html(baseStory.message);
    $('.buyToast').prop('value', `${baseStory.optionA}`);
    $('.refuseToast').prop('value', `${baseStory.optionB}`);
});

