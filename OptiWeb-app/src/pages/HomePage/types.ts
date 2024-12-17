type TGeo = {
  lat: string;
  lng: string;
};

type TAddress = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: TGeo;
};

type TCompany = {
  name: string;
  catchPhrase: string;
  bs: string;
};

type TBaseUser = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
};

export type TFullUser = TBaseUser & {
  address: TAddress;
  company: TCompany;
};
