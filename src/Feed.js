import React from "react";
import "./Feed.css";
import MessageSender from './MessageSender';
import Post from "./Post";
import StoryReel from './StoryReel';

function Feed() {
    return (
        <div className = "feed">
            <StoryReel />
            <MessageSender />
            
            <Post 
                profilePic = "https://scontent.fnag1-1.fna.fbcdn.net/v/t31.0-8/16113378_231378070650900_2943711247445583254_o.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=2eAOlsgVXjsAX945nkA&_nc_ht=scontent.fnag1-1.fna&oh=eb9ee0f1646c1cf716766ba99f7e1746&oe=606D5031"
                message = "Life is awesome stay tuned!"
                timestamp = "This is a timestamp"
                username = "Mihir Paunikar"
                image = "https://pbs.twimg.com/profile_images/950737392943509504/kxYLXTsO.jpg"
            />
            <Post 
                profilePic = "https://scontent.fnag1-1.fna.fbcdn.net/v/t31.0-8/16113378_231378070650900_2943711247445583254_o.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=2eAOlsgVXjsAX945nkA&_nc_ht=scontent.fnag1-1.fna&oh=eb9ee0f1646c1cf716766ba99f7e1746&oe=606D5031"
                message = "The way to get started is to quit talking and begin doing."
                timestamp = "This is a timestamp"
                username = "Mihir Paunikar"
            />
            <Post 
                profilePic = "https://scontent.fnag1-1.fna.fbcdn.net/v/t31.0-8/16113378_231378070650900_2943711247445583254_o.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=2eAOlsgVXjsAX945nkA&_nc_ht=scontent.fnag1-1.fna&oh=eb9ee0f1646c1cf716766ba99f7e1746&oe=606D5031"
                message = "Life is what happens when you're busy making other plans..."
                timestamp = "This is a timestamp"
                username = "Mihir Paunikar"
            />
            

        </div>
    );
}

export default Feed;
