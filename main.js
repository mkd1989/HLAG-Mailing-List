const albums = {
  album1: {
    title: "Natural,Healthy",
    cover: "Images/Natural Healthy Album Art.jpg",
    archiveId: "queasy-natural-healthy",
    // "721808",
    download_link:"https://archive.org/download/queasy-natural-healthy/Queasy%20-%20Natural-%20Healthy.zip",
    description: `The follow up to the group's debut 2022 "Shining Now" LP, "Natural, Healthy" see's the band solidify their lineup as a 3 piece after shuffling through multiple members throughout most of 2023. The EP showcases Queasy as a band of songwriters, each member taking the reigns as "Frontperson" almost equally over the tidy 6 song run. With elements of indie rock, 90's inspired alternative, shoegaze and even some breakbeat experimentation, the group has honed the sound displayed in their earlier work into an offering that is at once catchy, raw, heavy, and at times surprising.
    
    Credits:
    Released May 24, 2024 (Digital Only)
    Songs written & arranged by Queasy
    Mike 'maddog' Davis: Drums, Guitar, Vocals
    Corinne Dodenhoff: Bass, Synth, Vocals
    Stevie Dodge: Guitar, Vocals
    Engineered, Mixed, & Mastered by Stevie Dodge at Jamtown Recording Studio, Philadelphia PA`,
    tracks: [
      { title: "Wayside", file: "01 Wayside.flac", lyrics: `walking along by the wayside \nnext to you i feel waist high \nit's a second life,it's a second try \nyou cast me out by the wayside \n\nso i guess, i'll stare at the floor \ncause you won't look at me anymore \n\ncan i share some ideas of mine? \ndo you have the time? \n"emergency,come over stat" \n"damn, your hair looks great like that" \nyou cast me out \n\nand there in the kitchen you said \nyou haven't had a friend like me in a while \nso i'd do anything to make you smile \nlike emulating your first move \nanticipating your next move \nhaven't seen nor heard, not another word \nyoucast me out by the wayside \n\nso i guess,i'll stare at the floor \nhaven't seen nor heard, not another word \nhaven't seen nor heard,not a fucking word ` },
      { title: "Never Thought", file: "02 Never Thought.flac", lyrics: `cleaning out your room \nfound a snoopy figurine \non a bookshelf full of hoarded recipies \nwe are closer now than we will ever be \ni know more now than you ever told me \n\nyou and i, we never talked too much \nwhy's it so hard to keep in touch? \ni can't say what i want \nwe never though about this \n\ncleaning out your closet \nfound your hat hanging up \ni wear it everyday now \nshields me from the sun \n"son, i never was good at keeping up one side of..." \n\nyou and i, we always thought too much \nwhy's it so hard to express them? \n now, you can't say what you want \nand we never talked about it` },
      { title: "Call Out What you See", file: "03 Call Out What You See.flac", lyrics: `letter to your neighbor \nneighbor's name is mine \nsimple as a gesture \ntorn from out of time \nlet me know and we'll go \nfarther then before \nhave you ever felt it? \nafter all this time? \n\nafter all this time \n\nwill you find me peeling the layers back again? \nthe difference between here and there is in my head \nhome is where you find it \nin season and in time \ngone without a reason \nneighbor's name is mine \n\nneighbor's name is mine \n\npulling back the drapes \nblowing off the dust \nspilling out the ? \n ?????? \nstumble up the steep stairs to something mine \nopen up my eyes \n\n i open up my eyes \ncall out what you see ` },
      { title: "Daybreak (Lomune)", file: "04 Daybreak %28Lomune%29.flac", lyrics: "lay down by a low moon \npast life vapors away \nto calm the mood \ncrushing doom \nwaits for you \n\npattern pushing back \nan invisible lack \nof follow through \n\nsomething not new \nsomething not perfumed \nnew ways of losing and uglying \nall we lost will come back to us \nand someday i will be reborn \n\nlay down by a low moon \npast life vapors away \nto calm the mood \ncrushing doom \nwaits for you \n\ndaybreak pushing back \nan invisible lack \nof follow through \n\nthese two dreams are madness and death \nthe mind wished and dreamed itself \n\n(olden incarnations in the wood \n i, the immaterial meadow of this world \nis nature proud?)" },
      { title: "Bad High", file: "05 Bad High.flac", lyrics: `here i go \ntripped and fell \nsilly me \nstumbling through life \nso clumsily \nhere i go \ngot too stoned yet again \nbut your voice in my head \na nice refrain \n\ni wanted more \nat times it was apealling \nbut i'm gone again \nto fight the empty feeling \nyou got me by \nthrough a bad high \n\nsit at home all alone, each passing day \nwhiling the hours away \nanother smoke, an inside joke \nthe only words i say \nanxiety, the price to pay \n\ni wanted more \nat times it was apealling \nbut i'm gone again \nto fight the empty feeling \nyou got me by \nthrough a bad high ` },
    ]
  },
  album2: {
    title: "Fake Fruit",
    cover: "Images/Fake fruit Album Art.jpg",
    archiveId: "queasy-fake-fruit-covers",
    download_link:"https://archive.org/download/queasy-fake-fruit-covers/Queasy%20-%20Fake%20Fruit%20%28Covers%29.zip",
    description: `A short collection of covers performed by Queasy. This collection of recordings was made shortly after the departure of the bands founding drummer, leaving the three piece of Mike Davis, Corinne Dodenhoff, and Stevie Dodge. The members recorded this short collection during the writing process for their next record "Natural, Healthy" partially as a way to feel out their new roles in the band, and to test- run recording techniques, approaches, and potential locations for the recording of "Natural, Healthy".  Fake Fruit was recorded in one weekend in early winter of 2023 at the childhood home of Dodge in North Jersey. It was engineered by Dodge with assistance by Davis, and mixed by the band at home in Philadelphia. \n\nCredits: \nSongs Written by Chavez, Lemuria, and Porches Respectively \nSongs performed and lightly arranged by Queasy \nMike "maddog" Davis - Drums, Guitar, Vocals \nStevie Dodge - Guitar, Vocals \nCorinne Dodenhoff - Bass, Vocals, Upright Piano \n\nEngineered By Stevie Dodge with assistance by Mike Davis \nMixed by the band \nSpecial Thanks to Chavez, Lemuria, and Porches, as well as the Dodge Family for the use of their beautiful home \n\nThis record is dedicated to Abe the dog <3`,
    tracks: [
      { title: "Unreal Is Here [Chavez]", file: "Queasy - Fake Fruit %28Covers%29 - 01 Unreal Is Here -Chavez-.flac", lyrics: "listen closely!" },
      { title: "Pleaser [Lemuria]", file: "Queasy - Fake Fruit %28Covers%29 - 02 Pleaser -Lemuria-.flac", lyrics: "listen closely!" },
      { title: "Forgive [Porches]", file: "Queasy - Fake Fruit %28Covers%29 - 03 Forgive -Porches-.flac", lyrics: "listen closely!" },
    ]
  },
  album3: {
    title: "Shining Now",
    cover: "Images/Shining Now Album Art.jpg",
    archiveId: "queasy-shining-now",
    download_link:"https://archive.org/download/queasy-shining-now/Queasy%20-%20Shining%20Now.zip",
    description: `"Shining Now" is Queasy's first, and to date only, full length record. The instrumentation was recorded mostly live, over two days at the newly constructed currylands studio in chester county, pa. Vocals and various overdubs were recorded between the band's practice space and homes in philadelphia. The writing of the album began during the global pandemic in 2020, while the band's first EP was being mixed. Demos and snippets of ideas were written in isolation, with the members swapping files back and forth over dropbox until songs began to take shape. Once the quarantine lifted, in person practices, writing sessions, and shows over the following year shaped these ideas into the finished songs that appear on this record. \n\nreleased June 17, 2022 \n\nrecorded feb 2022 at currylands, chester county pa \n\nengineered by joni elfers // earthsongs recording \n\nmixed by queasy \n\nmastered by heather jones // so big auditory \n\ncorinne dodenhoff - bass and vocals \nmichael davis - guitar and vocals \nstevie dodge - guitar and vocals \npavlo demkiv - drums \n\nartwork collage by stevie dodge \noriginal photo by mary dodge\nlayout by corinne dodenhoff`,
    tracks: [
      { title: "Feeling Funny", file: "Queasy - Shining Now - 01 Feeling Funny.flac", lyrics: "" },
      { title: "Big Dipper", file: "Queasy - Shining Now - 02 Big Dipper.flac", lyrics: `the earth is slow \nit's turning around \nand all that we can see \non the ground \nthe same old sky \nnight after night \na twinkle gone from the beholders eye \nlooking forward or looking far behind? \n\ndo you remember \nthe little dipper? \na dimmer streetlight \nat my bedside \n\nwell i remember \nyou said to me \nsometimes you will see \nanything that you want to see \n\nwell birth is slow \nit's taking it's time \nyou'll see what i'm seeing \nbut years behind \n\nand all i want \nis for you to say \ni'm happy you're happier today \nthan you were yesterday \n\nwill you ever know? \ni'm ready now to shine so bright \nwill you ever see? \nwhat i already see? \nwell i remember \nthe little dipper \nfading out behind the clouds and falling out of sight` },
      { title: "Fun X3", file: "Queasy - Shining Now - 03 Fun x3.flac", lyrics: `always on the ground, \nyou run, run, run \ntalking to yourself \nit's fun, fun, fun \ncan't explain the way you lied \ncan't escape the way he cried \ncan't escape \n\ni think you should stay a while \ni think you should try to smile \n\nwe've made it to the fall \nyou're blocking all my calls \nwe're crawling up the walls \nyou're blocking all my calls \n\nalways on the ground, \nyou run, run , run \ntalking to yourself \nit's fun, fun, fun \ncan't explain the way you lied \ncan't escape the way he cried \ncan't escape \n\ni think you should stay a while \ni think you should try to smile` },
      { title: "Spherical", file: "Queasy - Shining Now - 04 Spherical.flac", lyrics: `even now, i hear that awful sound \nin the silence it's awful loud \ndoes it feel wrong? \nto try to start it now? \nis it so hard to say "i'm sorry" now? \n\ni can feel it coursing through my blood \ndisjointed, we kneel to the same god \ni watched it grow \nit's spherical \nor so i tell myself` },
      { title: "Nice", file: "Queasy - Shining Now - 05 Nice.flac", lyrics: `everyday feels like faking \nwalking around with a grin \nif you're asking how i'm doing \nwell just look at the state that we're in \n\ni can't tell what's going on \ni can't tell what's gone wrong \n\nlook for the right words to say \nstring them up in a line \nthe whole world's fucking burning \nbut if you ask me how i've been i'll say just fine \n\ni can't tell what's going on \ni can't tell whats gone wrong \n\nnice to see you again, \nto see you my friend, it's nice \nso goddamn nice` },
      { title: "Tenderfoot", file: "Queasy - Shining Now - 06 Tenderfoot.flac", lyrics: `she can't think straight \nfloating away \nbeing held down \nby familiar sounds \nfix this feeling \ncracks in the ceiling \nfix this \n\ni can't see who's haunting me \ncan't compute memory \ni can't see who's haunting me \nyou're a ghost in my machine \n\nshe's drunk \ni'm stoned \nwe sleep alone \nstop this praying \nhow long are you staying? \nempty city \ncall her pretty \nface is a screen \na scream \n\ntake me` },
      { title: "Stained Glass", file: "Queasy - Shining Now - 07 Stained Glass.flac", lyrics: `and after after \nand after all \ni hear us crying \nyou hear the call \n\nand ever after \nthrough the wall \nthe sun it rises \nthe water falls \n\ngo on \n\nand after after \nand after all \ntiming is never \nall that you want \n\nand when you go there \nleave me behind \ni'll let you know then \nyou're on my mind \n\nfor all time \nyou,you're laughing now \nyou, like you're around \naround \naround \nforever \n\nand after after \nand after all \nthe sun is setting \nonce and for all \n\nand when you go there \nleave me behind \none day i know that \nill see you there \n\ngo on` },
      { title: "Brainzap", file: "Queasy - Shining Now - 08 Brainzap.flac", lyrics: `wake up, my head's buzzing way too loud \ncan't ask for help cause i'm way too proud \ni think i need someone to tell me what to do \n\nall of my friends think i'm acting crazy \nmemory's shot, and my mind is hazy \ncan't trust that anything i remember is true \n\nall of my nerves feel so fried \nwhatever, i know that i tried \ni'm tired of hearing the only way out is through \n\nwanna come down \nwanna calm down \nwanna come down \nbut i'm way too high off of the ground \n\nwhat's it like having a normal brain? \nwhen every decision don't cause you pain? \ncan i borrow your's for a while? \ncause i need a break \n\nthe doctor is giving me pills \nbut i feel the buzz inside still \nwhoever wired me up made a careless mistake \n\nwanna come down \nwanna calm down \nwanna come down \nbut i'm way too high off of the ground \n\nway too high off of the ground` },
      { title: "Cloudbusting", file: "Queasy - Shining Now - 09 Cloudbusting.flac", lyrics: `i'm just an empty shell \nall the guts and goop are spilling out \ni could spend my whole damn life just staring at the sky \nbusting all the clouds to keep the shine \n\nso i'll bury it and forget` },
      { title: "June", file: "Queasy - Shining Now - 10 June.flac", lyrics: `she worked in a department store \nkept her baby in an open drawer \nit all kind of just happened \nbut June, she came laughing \n\nshe got stuck inside her head \nnow she sleeps inside her mind \nshe got stuck inside her bed \nbut she tells me everything is fine \n\nhe wasn't what he said he'd be \nshe needed some new therapy \nand when she almost burned down the kitchen \ni wonder what she was wishing \n\nshe got stuck inside her head \nnow she sleeps inside her mind \nshe got stuck inside her bed \nbut she tells me everything is fine \n\nuntil it isn't` },
      { title: "Funny Feeling", file: "Queasy - Shining Now - 11 Funny Feeling.flac", lyrics: `line connected to another line \none foot in front of the other \njust to get by \ntime's a luxury \none i didn't earn \npatience is a virtue \nsomething i never learned \n\nwaking up \nin a gray light mourning \nalarm bell sounding a silent warning \nthat funny feeling \n\ndesigns repeating \nan echo in space \naverting your eyes \nwhile it stares you in the face \nsoft rage, blank page \na hidden turn of phrase \nwritten in invisible ink you can't erase \n\nwaking up \nin a gray light mourning \nalarm bell sounding a silent warning \nthat funny feeling` },
    ]
  },
  album4: {
    title: "Self-Titled EP",
    cover: "Images/Self Titled Album Art.jpg",
    archiveId: "queasy-queasy-ep",
    description: `Queasy's first EP, recorded in February of 2020, shortly after the band's formation in late winter of 2019. Queasy wrote these songs, played their first show, and recorded the EP in only a few short months before the covid-19 pandemic shut down the world for most of the next year. The record was mixed and released during the quarantine. \n\nReleased April 1, 2020 \n\nPavlo Demkiv - Drums \nCorinne Dodenhoff - Bass, Vocals, Guitar (Track 6) \nMike Davis - Guitar, Vocals, Bass (Track 6) \nStevie Dodge - Guitar, Vocals \n\nAll songs recorded at Stevie's house in South Philly in two sessions \nFeb 2nd: Instrumentals \nFeb 9th: Vocals \n\nAll songs written by Queasy \nAll songs mixed and mastered by Stevie Dodge`,
    download_link:"https://archive.org/download/queasy-queasy-ep/Queasy%20-%20Queasy.zip",
    tracks: [
      { title: "Seven Futures", file: "Queasy - Queasy - 01 Seven Futures.flac", lyrics: `when i go to the grocery store after 6am \ni disociate in the cereal isle \nredundant abundance doesn't function as a comfort \nwhen the meaningless choices pile up \n\nand i feel a way \nfeel it peel away \nthen i feel nothing \noh no \n\ni dreamt of a day \nwhen we had seven futures, all much the same \nnot great, but ok \nwe watched as the water slowly ate away \nthe blue room jellies \nwhat more can i say? \n\nand i feel a way \nfeel it peel away \nthen i feel nothing \noh no` },
      { title: "Hardball", file: "Queasy - Queasy - 02 Hardball.flac", lyrics: `big yellow taxi \nbig orange sun \nopen it's mouth \nand consume everyone \n\nwe had our chance and we blew it \ni took my shot and threw it \nwe had our chance and we blew it \ni took my shot \n\ndesert parking lot \nthe world is full of so much rot \ni can't control how bad i feel about it \n\ni give up, we fucked up \ni give up, we fucked up \ni give up \nfucked up again \n\nwe had our chance and we blew it \ni took my shot and threw it \nwe had our chance and we blew it \ni took my shot \n\nand you're sitting\nwatching everything you've ever wanted \neverything you've ever thought \nand every place you've ever haunted go` },
      { title: "Stranger", file: "Queasy - Queasy - 03 Stranger.flac", lyrics: `They pushed you down and I went black \nI misplaced all my senses \nAnd now you’re grown on the attack \nYou’ve got some new defenses \n\nPerfect stranger \nWhy'd you have to go and change like that? \n\nThey spit upon your flawless face \nI beat them black and bloody \nAnd now you’re passed out in the stairs \nSo what just happened buddy? \n\nPerfect stranger \nWhy'd you have to go and change like that? \nPerfect stranger \nWhy'd you have to go and change like` },
      { title: "Room", file: "Queasy - Queasy - 04 Room.flac", lyrics: `You ran afoul of some headlights \nDriving the wrong way home \nAnd carried on into the night alone \nYou missed what you were shown \n\nYou know you can't go back there \nYou know you can't go home \nWhen all the lights are off in your old room \n\nHeard you ran into some old friends \nBecause they told me so \nI heard that while you were with her \nYou ran afoul of the ground \n\nAnd now I can't go back there \nAnd see you falling down \nWhen all the lights are off in my old friend \nBut I \nYou know I tried to find the time for you \nI \nYou know I tried to find some room \nFor you \n\nYou know you can't go back there \nYou know you can't go home \nWhen all the lights are off in your old room \nAnd now I can't go back there \nAnd see you falling down` },
      { title: "Moth", file: "Queasy - Queasy - 05 Moth.flac", lyrics: `Helpless, Formless \nFold your wings around me \nDepressed, Undressed \nLeave me just the way you found me \n\nCrossed wires, brain on fire \nEcho when they speak \nMessy \nDiseases shot to pieces \nCarry this for me \nHeavy \nFirst instincts watch the moon sink \nFeeling myself breathe \nHate in \nThe worst is I feel cursed \nMoth hovers over me \nWaiting \n\nHopeless ,Formless \nWrap your wings around me \nDepressed ,Undressed \nLeave me just the way you found me \nShut your mouth louder for me` },
      { title: "Head", file: "Queasy - Queasy - 06 Head.flac", lyrics: `I'm losing \nI'm losing myself again \nI'm losing \nI'm losing my only friend  \n\nAnd it feels so good \n\nI'm running \nI'm running so far away \nI'm hiding \nI don't want to face the day \n\nEven though I know I should \n\nMust have missed all of those goodbyes you said \nYou walk away from me, I lost my head \nYou walk away from me, I lost my head \n\nFire in my blood \nI'm standing near an open flame \nI fucking miss the way you say my name \nI fucking miss the way you say my name \n\nMust have missed all of those goodbyes you said \nYou walk away from me, I lost my head \nYou walk away from me, I lost my head \n` },
    ]
  },
};



// ------------Grab DOM elements---------
const contactSection = document.querySelector('.contact-section');

// Mailing list form handling
const GOOGLE_FORM_ACTION = 'https://docs.google.com/forms/d/e/1FAIpQLSca35xhdF2fSUFFith4PMpq0DS-RjjsVnKpnwPQRTkjNSeJNQ/formResponse';
        const EMAIL_ENTRY_ID = 'entry.1481735611';// Replace with your email field entry ID
        const NAME_ENTRY_ID = 'entry.677010278';   // Replace with your name field entry ID

        document.getElementById('mailingListForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('emailInput').value;
            const name = document.getElementById('nameInput').value;
            const messageDiv = document.getElementById('formMessage');
            const submitBtn = this.querySelector('button[type="submit"]');
            const formContainer = document.getElementById('signupFormContainer');
            const thankYouMsg = document.getElementById('thankYouMessage');
            
            // Disable button during submission
            submitBtn.disabled = true;
            submitBtn.textContent = 'Signing up...';
            
            // Create form data
            const formData = new FormData();
            formData.append(EMAIL_ENTRY_ID, email);
            formData.append(NAME_ENTRY_ID, name);
            
            // Submit to Google Forms
            fetch(GOOGLE_FORM_ACTION, {
                method: 'POST',
                body: formData,
                mode: 'no-cors' // Important: Google Forms requires no-cors mode
            })
            .then(() => {
                // Success! Hide form and show thank you message
                formContainer.style.display = 'none';
                thankYouMsg.classList.add('visible');
            })
            .catch(() => {
                // Error handling
                messageDiv.textContent = 'Something went wrong. Please try again.';
                messageDiv.className = 'form-message error';
                submitBtn.disabled = false;
                submitBtn.textContent = 'Sign Up';
                
                // Hide error message after 5 seconds
                setTimeout(() => {
                    messageDiv.style.display = 'none';
                }, 5000);
            });
        });

window.addEventListener('resize', adjustDescriptionMobile);
window.addEventListener('load', adjustDescriptionMobile);
