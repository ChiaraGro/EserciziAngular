
export enum Roles {
  STAFF = 'staff',
  STUDENT = 'student',
  MANAGER = 'manager',
  ADMIN = 'admin'

}

export enum Gender {
  FEMALE = 'female',
  MALE = 'male',
  OTHER = 'other'
}

export interface IAddress {
  city: string;
  street: string;
  postalCode: string;
}

export interface ICompanies{
  id: number;
  name: string;
  description: string;
  location: IAddress;
}


export interface IObj {
  id?: number;
  name: string;
  surname: string;
  age?: number;
  dateOfBirth?: string;
  address?: IAddress;
  role?: Roles;
  username?: string;
  profilePhotoUrl?: string;
  companies: ICompanies[];
  gender?: Gender;
}


const user : IObj = {
id: 3487,
  name: 'Mario',
  surname: 'Rossi',
  age: 25,
  dateOfBirth: '1995-12-14',
  address: {
      city: 'Roma',
      street: 'Via roma 10',
      postalCode: '00100'
  },
  role: Roles.STAFF,
  username: 'MarioRossi80',
  profilePhotoUrl: 'https://bit.ly/3yRngEP',
  companies: [
  {
          id: 148979,
          name: 'Develhope',
          description: 'La migliore',
          location: {
              city: 'Palermo',
              street: 'Via Libertà 58',
              postalCode: '90139'
          }
      },
      {
          id: 123123,
          name: 'Apple',
          description: 'E insomma...',
          location: {
              city: 'Cupertino',
              street: 'One Apple Park Way',
              postalCode: '95014'
          }
      }
],
  gender: Gender.MALE
}


