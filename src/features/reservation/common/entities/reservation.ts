export type CreateReservation = {
  name: string;
  age: number;
  domicile: string;
  complaint: string;
  therapyExperience: string;
  email?: string;
  gender: string;
  registrationCategory: string;
  accompanyingParticipantName?: string;
  accompanyingParticipantComplaint?: string;
  referredBy?: string;
  reservationDatetime: string;
  optionalDatetime?: string;
  phoneNumber?: string;
  reservationServices: Array<string>;
};
