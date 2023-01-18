export type GeneralDataWithCallback<T> = {
   data: T;
   callback: () => void;
};

export type RegisterUserData = {
   email: string,
   password: string,
   password_confirmation: string,
   purchase_code: string
};

export type RegisterUserPayload = GeneralDataWithCallback<RegisterUserData>;

export type SignInUserData = {
   email: string;
   password: string;
   token_name: string | null;
};

export type SignInUserPayload = GeneralDataWithCallback<SignInUserData>;

export type UserInfoData = {
   mail: string;
   name: string;
};