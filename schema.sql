DROP DATABASE IF EXISTS game_user;
CREATE DATABASE game_user;
#name of db can change if necesarry
USE `game_user`;
DROP TABLE IF EXISTS users;
CREATE TABLE users (
    ID INT AUTO_INCREMENT NOT NULL,
    #Thinking if maybe Screen_Name should be primary key
    Screen_Name VARCHAR( 255),
    Password VARCHAR (255), 
    FBHashmark VARCHAR (255),
    Total_Wins INT (11) NOT NULL,
    Total_Losses INT (11) NOT NULL,
    High_Score INT (11) NOT NULL,
    Total_Score INT (11) NOT NULL,
    Online_Status BOOL,
    Willing_To_Play BOOL,
    Log_In_Time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (ID) 
    );
#SHOW COULMNS from users;