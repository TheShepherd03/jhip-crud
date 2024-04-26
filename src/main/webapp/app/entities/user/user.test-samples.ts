import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 11263,
  login: 'T^ox0@Wsu\\;Yk',
};

export const sampleWithPartialData: IUser = {
  id: 23414,
  login: 'v~z@iSh\\WCbH',
};

export const sampleWithFullData: IUser = {
  id: 18195,
  login: 'rPWFGW',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
