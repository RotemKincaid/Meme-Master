drop table if exists cards 
drop table if exists media
drop table if exists avatar

create table cards(
    card_id serial primary key,
    content text
)

create table media(
    media_id serial primary key,
    media_url text
)

create table avatar(
    avatar_id serial primary key,
    avatar_url text
)
-- MEDIA CONTENT

insert into media (media_url)
values('https://s3-us-west-1.amazonaws.com/memes-project/Mocking-Spongebob.jpg'),
('https://s3-us-west-1.amazonaws.com/memes-project/bluehoodie.jpg'),
('https://s3-us-west-1.amazonaws.com/memes-project/brokeneck.jpg'),
('https://s3-us-west-1.amazonaws.com/memes-project/concernedkevinhart.jpeg'),
('https://s3-us-west-1.amazonaws.com/memes-project/confidentbaby.jpg'),
('https://s3-us-west-1.amazonaws.com/memes-project/coolgozilla.jpg'),
('https://s3-us-west-1.amazonaws.com/memes-project/dicknose.jpg'),
('https://s3-us-west-1.amazonaws.com/memes-project/dinkleberg.jpg'),
('https://s3-us-west-1.amazonaws.com/memes-project/drake.jpg'),
('https://s3-us-west-1.amazonaws.com/memes-project/evilllll.jpg'), 
-- ---------BREAK POINT ----------------------------------------------------------------

-- this was the first ten photos that i entered dont redo these ^
-- this is a secondary comment to practice git commands
('https://memes-project.s3-us-west-1.amazonaws.com/avatars/willllly.png'),

('https://memes-project.s3-us-west-1.amazonaws.com/avatars/tuxedos.png'),

('https://memes-project.s3-us-west-1.amazonaws.com/avatars/y7043.jpg'),

('https://memes-project.s3-us-west-1.amazonaws.com/avatars/womancrying.png'),

('https://memes-project.s3-us-west-1.amazonaws.com/avatars/uglytoad.png'),

('https://memes-project.s3-us-west-1.amazonaws.com/avatars/velociraptor.png'),

('https://memes-project.s3-us-west-1.amazonaws.com/avatars/uglytieoffice.png'),

('https://memes-project.s3-us-west-1.amazonaws.com/avatars/therock.png'),

('https://memes-project.s3-us-west-1.amazonaws.com/avatars/theoffice.png'),

('https://memes-project.s3-us-west-1.amazonaws.com/avatars/Trump-funny-face-meme-blank.jpg'),

('https://memes-project.s3-us-west-1.amazonaws.com/avatars/tqsax.jpg'),

('https://memes-project.s3-us-west-1.amazonaws.com/avatars/skeleton.png'),

('https://memes-project.s3-us-west-1.amazonaws.com/avatars/teacher.png'),

('https://memes-project.s3-us-west-1.amazonaws.com/avatars/sigh.png'),

('https://memes-project.s3-us-west-1.amazonaws.com/avatars/screamingbaby.png'),

('https://memes-project.s3-us-west-1.amazonaws.com/avatars/startrek.png'),

('https://memes-project.s3-us-west-1.amazonaws.com/avatars/sidekick.png'),

('https://memes-project.s3-us-west-1.amazonaws.com/avatars/rickcopshootwd.png'),

('https://memes-project.s3-us-west-1.amazonaws.com/avatars/pointing.png'),

('https://memes-project.s3-us-west-1.amazonaws.com/avatars/potatoface.png'),

('https://memes-project.s3-us-west-1.amazonaws.com/avatars/SBob.png'),

('https://memes-project.s3-us-west-1.amazonaws.com/avatars/reginageorge.png'),

('https://memes-project.s3-us-west-1.amazonaws.com/avatars/oprah.png'),

('https://memes-project.s3-us-west-1.amazonaws.com/avatars/onedoesnot.png'),

('https://memes-project.s3-us-west-1.amazonaws.com/avatars/oldwhitemen.png'),

('https://memes-project.s3-us-west-1.amazonaws.com/avatars/notime4that.png'),

('https://memes-project.s3-us-west-1.amazonaws.com/avatars/maury.png'),

('https://memes-project.s3-us-west-1.amazonaws.com/avatars/matrix.png'),

('https://memes-project.s3-us-west-1.amazonaws.com/avatars/middlefanger.png'),

('https://memes-project.s3-us-west-1.amazonaws.com/avatars/liamneeson.png'),

('https://memes-project.s3-us-west-1.amazonaws.com/avatars/leotoast.png'),

('https://memes-project.s3-us-west-1.amazonaws.com/avatars/heidi.png'),

('https://memes-project.s3-us-west-1.amazonaws.com/avatars/grumpycat.png'),

('https://memes-project.s3-us-west-1.amazonaws.com/avatars/glackkk.png'),

('https://memes-project.s3-us-west-1.amazonaws.com/avatars/froto.png'),

('https://memes-project.s3-us-west-1.amazonaws.com/avatars/kermet.png'),

('https://memes-project.s3-us-west-1.amazonaws.com/avatars/grannnyglasses.png'),

('https://memes-project.s3-us-west-1.amazonaws.com/avatars/goldwatchthinking.png'),

('https://memes-project.s3-us-west-1.amazonaws.com/avatars/firecow.png'),

('https://memes-project.s3-us-west-1.amazonaws.com/avatars/fuckboy.png'),

('https://memes-project.s3-us-west-1.amazonaws.com/avatars/fatboydog.png'),

('https://memes-project.s3-us-west-1.amazonaws.com/avatars/drevilpartymom.png'),

('https://memes-project.s3-us-west-1.amazonaws.com/avatars/dosequisman.png'),

('https://memes-project.s3-us-west-1.amazonaws.com/avatars/curiouschild.png'),

('https://memes-project.s3-us-west-1.amazonaws.com/avatars/drevil.png'),

('https://memes-project.s3-us-west-1.amazonaws.com/avatars/dewrag.png'),

('https://memes-project.s3-us-west-1.amazonaws.com/avatars/danceparty.png'),

('https://memes-project.s3-us-west-1.amazonaws.com/avatars/bubbles.png'),

('https://memes-project.s3-us-west-1.amazonaws.com/avatars/cryingboy.png'),

('https://memes-project.s3-us-west-1.amazonaws.com/avatars/checkoutchick.png'),

('https://memes-project.s3-us-west-1.amazonaws.com/avatars/childfire.png'),

('https://memes-project.s3-us-west-1.amazonaws.com/avatars/captainkerk.png'),

('https://memes-project.s3-us-west-1.amazonaws.com/avatars/briannnnplad.png'),

('https://memes-project.s3-us-west-1.amazonaws.com/avatars/buttonsmash.png'),

('https://memes-project.s3-us-west-1.amazonaws.com/avatars/asiangameshow.png'),

('https://memes-project.s3-us-west-1.amazonaws.com/avatars/300bitches.png'),

('https://memes-project.s3-us-west-1.amazonaws.com/avatars/blowinchunks.png'),

('https://memes-project.s3-us-west-1.amazonaws.com/avatars/birdbox.png'),

('https://memes-project.s3-us-west-1.amazonaws.com/avatars/asif.png'),

('https://memes-project.s3-us-west-1.amazonaws.com/avatars/%3F%3F%3F%3Fyellow.png'),

('https://memes-project.s3-us-west-1.amazonaws.com/avatars/angrywhyyyy.png')

-- ---------BREAK POINT ----------------------------------------------------------------



-- CARDS CONTENT 


('When your grandma asks you to help her with technology'),

('When your crush texts you cute thing like "Who’s this?"" and "How’d you get this number?" '),

('When you throw something in the garbage and shout "Kobe!"" but deep down you know you’re not Kobe '),

('When your friends want to split it evenly but you only had an appetizer'),

('When your president tries to grab you by the pussy'),

('When there’s no toilet paper left so you have to twerk'),

('When he says, he’s going out with his boys at 10 so you schedule an argument for 9:45'),

('When you look in the mirror and think "fuck you" '),

(' When you hear someone talking shit about former U.S. Vice President Joe Biden '),

('When someone prettier than you calls you pretty '),

('When you squeeze the ketchup and the bottle farts '),

('When you say "bye" to someone then both walk in the same direction'),

('When you hang out with someone without drinking and have no idea what to talk about '),

('When you gain 10 pounds for a role and the remember you’re not an actor'),

('When you’re singing in the shower and your mom yells at you to shut the fuck up '),

('That face you make while helping your son look for his Halloween candy that you ate last night '),

('When you fart in someone else’s car and all the windows are rolled up '),

('When you step on a Lego '),

('When the shrooms finally kick in '),

('When your boyfriends biggest fantasy is football '),

('When you’re listening to a song and the lyrics start applying perfect to your life '),

('When you realize the most supportive person in your life is DJ Khaled '),

('That face you make while people are singing you "Happy Birthday" '),

('When you accidentally send your grandma a dick pick '),

('When you finally get home and can be ugly in peace '),

('When your Uber driver won’t shut the fuck up '),

('When your voice cracks during erotic phone sex '),

('When you get at erection that lasts longer than 4 hours '),

('When it’s the first day of Spring Break and you get your period '),

('When you hear your parents having passionate intercourse '), 

('When the waiter stops shredding parmesan cheese but you haven’t said "when" '), 

('When you’re getting road head and your rabbi drives by '),

('When your last sexual encounter was with TSA '),

('When you wake up after blacking out and realize your Snapchat story is 11 minutes long '),

('When your mom has a camel toe but telling her would be more awkward than staring at it'),

('When you see someone bite into a string cheese '),

('When you’re about to cum but the porn video’s plot thickens'),

('When you eat peanut butter too fast and regret ever being born'),

('When you see the first question on the test and realize you’re completely fucked'),

('When you’re pissing in a pool and have to pretend like you’re not pissing in a pool'),

('When you had braces for four years and your teeth are still fucked up '),

('When you’re turnt as fuck at 3am and realize you have leftover Domino’s in the fridge'),

('When you get your first wet dream '),

('When you have to be funny because being hot isn’t an option '),

('When you speak a little Spanish and they try having a full-blown Spanish conversation with you'),

('When the person you’ve hooked up with once invites you over to meet their parents'),

('When you want hard degrading sex but he just wants to make love '),

('When you realize Guy Fieri makes millions of dollars a year eating food'),

('When you flip the pillow over to the cold side'),

('When someone asks if you`re sober enough to drive'),


('When you`re mad at someone but then they ask if you want some food'),

('When you run into someone you barely knew in high school and they say "hit me up sometime, we gotta chil" '),

('When shes driving you to your homies house and you stopped giving her directions 3 turns ago but shes still going the right way'),

('When your mom tries to be your friend after yelling at you for not taking the hamburger patties out of the freezer like she asked'),

('When the table next to you orders after you but gets their food first '),

('When the friend you`re supposed to go out with tonight starts talking about how tired they are'),

('When you`re all ready to go out but then realize you have no money, no plans, and no friends '),

(' When you`re hitting it raw and she says "cum inside me Daddy" '),

('When you meet someone who is down for froyo and missinoary intercourse'),

('When you sit down after somebody and the seat is warm'),

('When your leaked sex tape goes viral in Lithunaia '),

('When you`re stoned to the bone and start wondering why pizza boxes are square when pizza is circular'),

('When your fart smells gourmet'),

('When you`re always a bridesmaid but never a bride'),

('When you check the time at work and it`s 10am, then check again 3 hours later and its 10:15am '),

('When your mom says you can`t go so you ask your dad and he says you can'),

('When you send him a selfie with no makeup on and he asks "who`s that?" '),

('When you hear someone say "moist" '),

('When the waitress tells you to enjoy your meal and you say "thanks, you too" '),

('When you`re hungry and your mom says "why don`t you have some fruit?" '),

('When your mom adds you on Snapchat® '),

('When you try to send a dick pic and it says "file too large" '),

('When you Google® the lyrics and realize you`ve been singing nonsense this whole time '),

('When he finally finds the clit after 25 minutes'),

('When you peel a banana and there`s a bruise on it'),

('When someone calls you instead of texting '),

('When you called shotgun but the backseat ends up being way more lit'),

('When you get sand in your vagina'),

('When your`re tick-or-treating and someone gives you a box of raisins'),

('When you get too high and wait for the stop sign to turn green'),

('When you`re cheating on a test and make eye contact with the teacher'),

('When the flight attendant wakes you up from your coma to offer you a bag of stale peanuts'),

('When you fart and a little turd comes out '),

('When you throw yourself a birthday party and only your mom shows up'),

('When you want to start a conversation with someone but you`re fresh out of Xanax®'),

('When you invite them over to Netflix & Chill knowing damn well you don`t have Netflix®'),

('When you start telling your parents a story and then remember what happened was illegal'),

('When your shampoo says "Damage control" but you`re still broken on the inside '),

('When you open a bag of chips and there are only 6.5 chips inside'),

('When the dude in front of you at Starbucks® is ordering for his whole office'),

('When he says Fifty Shades of Grey™ is his favorite book'),

('When your wife gives birth to an Asian baby but neither of you are Asian'),

('When you get to the party and immediately have to shit'),

('When you think someone`s waving at you so you wave back, but then realize they were waving at the person behind you'),

('When you walk in on your grandma riding your grandpa in reverse cowgirl'),

('When all the drugs and alcohol randomly hit you at once and you gotta stay focused on not dying '),

('When he said he`d text you after work but that was a year ago'),

('When you have a headache so you check WebMD® and discover you`re dying'),

('When you`re trying to lose weight but gain 3 pounds every time you smell a cookie'),

('When you get a notification but it`s from Team Snapchat®'),

('When your dog saw you masturbating  and you`re not quite sure if you guys are cool again or not '),


('When your hairdresser spins you around to reveal they`ve ruined your fucking life'),

('When you`re chilling with someone and think about how much you never want to see their face ever again'),

('When your senile grandpa calls you a sexy young lady'),

('When your chip breaks in the salsa'),

('When all your friends are getting married and you`re still giving head in the backseat of cars'),

('When your STD test comes back positive'),

('When the plane landed 5 minutes ago and you still have 0 texts'),


('When you`re trying to have fun but remember how sad your dog looked when you left the house'),

('When it`s April 2nd and she`s still pregnant'),

('When you introduce 2 of your friends and they start hanging out without you'),

('When you see someone pour milk in their bowl before the cereal'),

('When the Girls Gone Wild ™ commercial comes on'),

('When you`ve had to buy Plan-B® so often it`s becoming Plan A'),

('When you find out that your cheating ex broke their leg'),

('When you wake up half-naked in a McDonald`s ® bathroom'),

('When you`re so single you don`t have anyone to drunk text'),

('When you start a new diet on Thursday but then spend the entire weekend blacked out covered in pizza'),

('When you feel good getting dressed in the morning and then hate your stupid outfit by noon'),

('When you`re about to cum and Bill Nye the Science Guy pops into your head'),

('When you successfully make pasta without burning the house down'),

('When someone who works out starts talking about their workouts'),

('When you`re 3 Four Lokos® deep and a Creed song comes on '),

('When you realize Space Jam came out over 20 years ago'),

('When you come to terms with the fact that you`ll never be able to dunk a basketball'),

('When you try anal for the first time'),

('When you promise to start being more positive and your pregnancy test takes you seriously'),

('When you see your ex with the person they told you not to worry about '),

('When you get a picture with your favorite celebrity but you look too ugly to post it'),

('When you get your Ancestry® DNA test results back and find out you`re 100% loser'),

('When you`re ordering a pizza and your broke friend screams "get wings, too" '),

('When you sneeze and nobody says "bless you" '),

('When your doctor asks if you`re sexually active'),

('When all the old toys your mom threw out are suddenly worth thousands of dollars'),

('When you text her "Good morning beautiful" and she replies with "Aww thanks buddy" '),

('When your friend who died at the pregame shows up at the bar'),

('When you`re not sure whether to shut the fuck up or go strait savage mode on a mothafucka'),

('When you queef in public'),

('When you stub your toe and wait for the immense pain to kick in'),

('When your girlfriend suggests moving in together'),

('When someone says they don`t fuck on the first date'),

('When someone says "check out my blog" '),

('When you gotta pay taxes but all school taught you is how to calculate the circumference of a parallelogram'),

('When you show up on a blind date and they`re wearing a fedora'),

('*Freestyle'),

('When you look in the mirror at the bar and realize you`re completley shitfaced'),

('When you nut but she keeps sucking'),

('When you just proved a point via text and see those 3 little dots appearing and disappearing  cuz you`re right'),

('When you go to get your eyebrows waxed and they say "upper lip, too ?" '),

('When they come back from the bathroom and see that their phone is disabled for 196 hours'),

('When you catch your reflection in a store window and realize being born was a huge mistake'),

('When you find out the guy your dating has 3 kids'),

('When you get home and your roomate`s eating the tomato quiche you were saving from the night before'),

('When your vibrator runs out of battery right before you finish '),

('When you don`t check your phone for 3 hours and feel spiritual as fuck'),

('When you find out you`re adopted'),

('When your friend who`s a fuck-up starts giving you advice'),

('When you`re a vegan and haven`t told anyone in 7 minutes'),

('When you hear a sad song and pretend to be in the music video'),

('When you see all you friends prancing around in their bikinis but you can`t participate because pizza'),

('When your friends are all starting to have kids, but you cant manage to keep a cactus alive'),

('When your douchebag friend pokes holes in all your condoms and you end up getting his girl pregnant'),

('When you accidentally step on your cat '),

('When your`re bored and someone tells you to read a book'),

('When your mom calls you a son-of-a-bitch'),

('When someone is giving you directions and starts using words like "East" and "West" '),

('When she tweets "My stomach hurts" and you can`t remember if you pulled out or not'),

('When your drug dealer starts talking about things other than drugs '),

('When you`re on a first date and they start talking about horoscopes'),

('When you watch "2 Girls 1 Cup" for the first time'),

('When you go to a Halloween party as The Hulk and people keep saying they love your Shrek costume'),

('When the person you fucked last night wants to connect on LinkedIn®'),

('When the kid behind you in Social Studies puts their pencil in your butt crack'),

('When your parents forget to leave you a trust fund'),

('When you tuck your boner into your waistband and feel sneaky as fuck'),

('When your mom tells the whole family that you have a UTI'),

('When you get money but still don`t fuck bitches'),

('When your mom walks in on you practicing giving a blowjob to a cucumber'),

('When your grandma walks in on you jerking off'),

('Your face when you send the first freaky text and wait for a reply'),

('When you bleach your asshole and start demanding more respect around here'),

('When you lay down for a quick nap and wake up 8 hours later'),

('When someone uses your driveway to turn around'),

('When your Five-Dollar Footlong™ comes out to $11.39'),

('When you say something funny and nobody hears it, then someone else repeats it and everyone laughs'),  

('When your stepdad Rick drinks all your Mountain Dew®'),

('When you`re drowning in life`s responsibilities but don`t give a single fuck' ),

('When you fall so hard for a fuckboy that even Life Alert ® can`t save you'),

('When she wants to meet your dad but so do you'),

('When your meeting is almost over and someone asks a question that extends it by 20 minutes'),

('When you see your side chick strike up a conversation with your main chick'),

('When someone asks if you`d step on your ex for $1,000 but you`d literally stab them in the neck for $10'),

('When your outfit`s on point but your date cancels on you last minute'),

('When all four of your boyfriends are at the same bar'),

('When you hear someone pronounce a word wrong and feel superior as fuck'),

('When you find out that girls poop'),

('When you`re watching a movie with your parents and there`s a sex scene'),

('When someone tells you that you look tired'),

('When your boss dies'),

('When you have to explain to your therapist what a meme is'),

('When you pop a boner while watching a Disney® movie'),

('When you finally get some booty after a 2 month drought'),

('When your only friend is busy'),

('When your anxiety goes away but having no anxiety gives you anxiety'),

('When your jamming out in the car with your mom and Afroman screams "ate that pussy like shrimp fried rice!" '),

('When you try to open a jar of pickles and realize you`re not a strong independent woman who don`t need no man'),

('When it`s 4/20 and all the cool kids are blazing so you take a hit to fit in and then die'),

('When your car starts making sounds you can`t afford to fix'),

('When it`s Monday morning and you`re deciding whether to go to work or call in dead'),

('When your little sister`s boyfriend just took her to Paris, meanwhile Craig from the bar just texted you "Yo, you still up?" '),

('*Freestyle '),

('When your crush says they`re stuck at the office but their Snapchat® is full of adventures'),

('When you`re taking a poop and forget your phone outside the bathroom'),

('When you go to the bathroom during hibachi and miss the onion volcano'),

('When the group chat leader announces the weekend binge drinking itinerary'),

('When you relate to every meme but then realize every meme is about being lazy, overweigh t, or an alcoholic'),

('Freestyle'),

('When your friend who lies about everything starts telling a story'),

('When you`re swimming and your foot grazes some seaweed'),

('When your sister says "leave me alone" but you`re an annoying fuck so too bad, sis'),

('When you find 11 McNuggets™ in your 10-piece meal'),

('When you eat all the pizza rolls and remember the good times when you still had pizza rolls'),

('When you use "thus" in an essay'),

('When you get a painful front wedgie'),

('When your boyfriend cancels Valentine`s Day dinner to go see Fifty Shades of Grey with his boys'),

('When you wake up in the morning and gotta remember if you`re depressed or not'),

('When you see a hickey on your dad`s neck'),

('When you match with your therapist on Tinder®'),

('When your new friend asks if you wanna do karate in the garage'),

('When your soulmate comes into your life before you`re done being a hoe'),

('When you shave your legs but don`t get any dick all weekend'),

('When you go with almond milk over regular milk and feel healthy as fuck'),

('When you`re 3 drinks deep and feel your inner hoe starting to come out'),

('When someone irrelevant speaks'),

('When restaurants put calorie counts on their menu'),

('When your ex dies in a freak masturbation accident'),

('When you nut quickly and now hear her in the bathroom giggling on the phone'),

('When you`re going down on someone and hear a suspicious noise'),

('When you masturbate with your other hand and feel like you`re cheating on yourself'),

('When someone on the plane claps after landing'),

('When you lose something and someone says "where`d you lose it?" '),

('When you`re ordering pizza and someone suggests pineapple as a topping'),

('When the music festival`s over, the drugs have worn off, and reality is all that`s left'),

('When your best friend fucks your sibling'),

('When someone says they`re more of a cat person that a dog person'),

('When your health teacher makes extended eye contact with you while rolling the condom onto the banana'),

('When you see a cute service dog but can`t pet it because you know it`s been training its whole life for this'),

('When you pronounce "acai" correctly'),

('When someone who screwed you over tries to come back into your life but you already talked shit about them to your mom'),

('When you open a birthday card from your grandma and no money falls out'),

('When you rap the whole verse correctly'),

('When you`re hanging out with a couple and they start fighting'),

('When everyone at lunch is talking about what they got for Christmas but you`re Jewish '),

('When you hit snooze 22 times and now you have 3 minutes to leave the house'),

('When you get to work on Monday morning and your boss is still alive'),

('When your lasagna sounds like WWII in the microwave but comes out cold'),

('When you`re doing the dishes and touch some soggy food'),

('When you see a comma in your bank account'),

('When your butthole`s super itchy and you fart hard enough to scratch it'),

('When you check Facebook® and see your grandson wearing that sweater you knit him but the album is "Ugly Sweater Party" '),

('When you thought someone was chill but then you see them out ketchup on their pasta'),

('When your dentist asks if you floss daily'),

('When your dentist suggests adult braces'),

('When the delivery guy gives you 3 sets of utensils and it feels like a personal attack'),

('When you mix up your clean and dirty laundry and you`re pretty sure you`re wearing a cum rag'),

('When you realize there are 7 billion people on this planet and you still can`t find someone to enjoy a taco with'),

('When he asks if you spit or swallow but you gargle'),

(' *Freestyle'),

('When the bouncer accepts your fake ID'),

('When you take her to hammer town for 45 seconds and wonder why she didn`t cum'),

('When it`s your birthday and your Facebook® wall reminds you that you have friends'),

('When you`re giving a presentation and someone says "speak up" '),

('When you realize you`ve just watched 8 strait episodes of Diners, Drive-Ins and Dives™'),

('When you sprout your first pube'),

('When you`re down in the dumps but then remember you weren`t born in North Korea'),

('When that one overly cheerful co-worker gets to the office and starts annoying the fuck out of you '),

('When you realize you peaked in high school'),

('When you`re not in a relationship but you`re having relationship problems'),

('When you`re a kid in Stuart Little`s orphanage and someone picks a mouse over you'),

('When Youtube® gives you an unskippable ad'),

('When you remember what you looked like in 6th grade'),

('When they lick your anal cavity during foreplay'),

('When the dentist asks you a question while their hands are in your mouth'),

('When your math teacher says to cross multiply but you don`t know anyone named multiply'),

('When you spell a word so wrong that even spell check can`t figure out what the fuck you`re trying to say'),

('When the light just turned green and the car behind you is already beeping'),

('When you`re trying to relax but can`t stop thinking about how ugly you are'),

('When you`re so broke that you have to go to sleep for dinner'),

('When your crush borrows your ruler and asks why there`s a mark at 2.5 inches'),

('When you wake up with gum stuck in your pubes'),

('When you finish a math problem and everyone`s arguing whether the answer was 66 or 67 but you got -4'),

('When you block your crazy ex on everything and they send you an invitation to connect on LinkedIn®'),

('When you think you`ve been charging your phone for the last 3 hours but it wasn`t plugged in'),

('When someone asks if you voted for Donald Trump'),

('When you hear a recording of your own voice'),

('When you realize you forgot to study for your drug test tomorrow '),

('When you look at your boyfriend after watching The Notebook and realize he`s not Ryan Gosling'),

('When you finally get a text, but it`s from your service provider saying you`ve used 90% of your data this month'),

('When you hear someone say that Kim Kardashian inspires them'),

('When you think he`s gonna propose but he`s just tying his shoe'),

('When you find that perfectly ripe avocado at the supermarket'),

('When you rip the most profound fart of your life'),

('When you see your white friend eat a Tide® pod '),


('When your brother`s a doctor, your sister` a lawyer, and you just finished a bottle of wine all by yourself'),

('When you`re watching Chopped™ and the chef decides to make a vinaigrette with less than a minute left'),

('When you`re cutting wrapping paper and the scissors start to glide'),

('When the unsaved number in your phone starts catching feelings'),

('When you`re playing What Do You Meme™ and have no cards that relate to the photo'),

('*Freestyle'),

('When you randomly remember how small your penis is'),

('When you walk into someone`s room and they have a "Live, Laugh, Love" sign above their bed'),

('When your dad comes in for Career Day and pulls out his fidget spinner'),

('When your tampon accidentally hits your G-spot'),

('When you meet someone you`ve stalked on social media and you`re not sure if you should play it cool or ask them how Cabo 2012 was'),

('When you just met someone and they start telling you some super intense personal shit'),

('When you`re watching an R-rated movie and a titty pops out '),

('When someone congratulates you on being pregnant but you`re not pregnant'),

('When you can`t stop laughing during a fucked-up situation'),

('When you`re talking to someone and accidentally spit in their face'),

('When all your classmates are eating Lunchables™ but your mom packed you organic cottage cheese and baby carrots'),

('When your grandma sneaks $40 into your pocket on your way out the door'),

('When your daughter tells you she wishes you didn`t exist'),

('When your neighbor starts mowing their lawn before 9am on Sunday'),

('When your president presses his bigger, more powerful button'),

('When you find the perfect rock to skip but fuck up the throw'),

('When the douchebag jock from high school serves you your McFlurry'),

('When you`re all ready to go out but your phone`s at 6%'),

('When you zone out the entire drive and wonder how the fuck you just got home'),

('When you realize you`ve seen the pizza delivery guy more than your friends lately'),

('When he apologizes but you still have more arguing to do'),

('When you`re high as a kite and start wondering who closes the bus door after the driver gets off'),

('When someone you thought you trusted doesn`t know the words to the Spongbob™ theme song'),

('When your boss is always cracking lame ass jokes but you can`t afford to lose your job'),

('When you find a dildo in your mom`s sock drawer'),

('When you get a rough hand job at the movies'),

('When your tampon string makes its way into your bootyhole'),

('When you get a boner at your cousin`s bar mitzvah'),

('When you take too much acid before your nephew`s baptism'),

('When she tells you to go deeper but you`ve run out of dick'),

('When you discover that you and your dad have the same taste in Internet porn'),

('When you find out he still lives with his parents'),

('When you try a risky new fashion trend and the streets love it'),

('When she calls your penis "cute" '),

('When the teacher thinks you`re not listening so they ask you a question and you get it right'),

('When you accidentally eat something vegan'),

('When you come back from vacation and your guinea pig is dead'),

('How white people smile at each other on the street'),

('When someone says they listened to a song before it was popular'),

('When people use their zodiac sign to justify their behavior'),

('When you realize you just watched Kylie Jenner make a pancake on Snapchat® for 15 minutes'),

('When everyone else at the starting line is Jamaican'),

('When you hit the last lap in Mario Kart™ and the music speeds up'),

('When you lied on your résumé about being proficient in Excel™'),

('When you mistake a used pregnancy test for a thermometer'),

('When your gynecologist gives you a high five'),

('When you`re sitting there after some nasty sex wondering if you still have a place in heaven'),

('When you`re not mad, just disappointed'),

('When you hear your mom bragging about you to her book club');















