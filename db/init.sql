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
