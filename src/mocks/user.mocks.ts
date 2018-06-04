import { User } from '../models/user.interface';

const userList: User[] = [
    {
        name: 'TheRockGanja',
        comany: 'Google Empire lmt',
        location: 'US',
        bio: 'I am Ganja but trust me I am very tallented',
        avatar_url:'http://i.imgur.com/TzWcihb.png/',
        email:'string@gmail.com'
    },
    {
        name: 'TusharAdhao',
        comany: 'Frictional',
        location: 'India',
        bio: 'I hate you like I love you',
        avatar_url:'http://i.imgur.com/jav62p6.jpg/',
        email:'tadhao@gmail.com'
    }
];

export const USER_LIST = userList;