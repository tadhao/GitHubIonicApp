import {USER_LIST} from './user.mocks';
import { Repository } from '../models/repository.interface';

const repositoryList: Repository[]= [
  {
  name: 'Ionic 3 Camera',
  description: 'This repository shows the Camera funtionality in te Ionic 3 platform',
  owner: USER_LIST[0]
  },
  {
    name: 'Ionic 3 SMS',
    description: 'This repository shows the SMS funtionality in te Ionic 3 platform',
    owner: USER_LIST[0]
  },
  {
    name: 'Ionic 3 Geolocation',
    description: 'This repository shows the Geolocation funtionality in te Ionic 3 platform',
     owner: USER_LIST[1]
  },
  {
    name: 'Ionic 3 Viberation',
    description: 'This repository shows the Viberation funtionality in te Ionic 3 platform',
    owner: USER_LIST[1]
  }];

  export const REPOSITORY_LIST= repositoryList;
