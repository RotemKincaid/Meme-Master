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
-- this was the first ten photos that i entered dont redo these ^
-- this is a secondary comment to practice git commands


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

('When you flip the pillow over to the cold side');









