import { DateTime } from "luxon";
import { CreateReservation } from "@/reservation/common/entities";
import { ReservationFormData } from "@/reservation/presentation/entity";

export const mapToReservation = (
  formData: ReservationFormData
): CreateReservation => {
  const reservationDatetime =
    DateTime.fromISO(formData.reservationDatetime, { zone: "Asia/Jakarta" })
      .toUTC()
      .toISO() ?? "";

  const optionalDatetime =
    DateTime.fromISO(formData.optionalDatetime ?? "", {
      zone: "Asia/Jakarta",
    })
      .toUTC()
      .toISO() ?? "";
  return {
    name: formData.name,
    age: parseInt(formData.age),
    domicile: formData.address,
    complaint: formData.complaint,
    therapyExperience: formData.therapyExperience,
    email: formData.email,
    gender: formData.gender,
    registrationCategory: formData.registrationCategory,
    accompanyingParticipantName: formData.accompanyingParticipantName,
    accompanyingParticipantComplaint: formData.accompanyingParticipantComplaint,
    referredBy: formData.referredBy,
    reservationServices: formData.reservationServices,
    reservationDatetime,
    optionalDatetime,
    phoneNumber: formData.phoneNumber,
  };
};
