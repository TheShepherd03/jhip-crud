import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'e36a1b04-9424-4dbb-af28-fed0d034e62d',
};

export const sampleWithPartialData: IAuthority = {
  name: 'e28da5b7-9b77-4dca-92b5-956615476e14',
};

export const sampleWithFullData: IAuthority = {
  name: '4091353e-86a1-449d-9d7f-92dfc454dfa9',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
