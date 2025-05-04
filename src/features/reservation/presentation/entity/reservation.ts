import { z } from "zod";

export const reservationSchema = z.object({
  name: z.string().min(1, { message: "Bagian ini diperlukan" }),
  age: z.string().min(1, { message: "Bagian ini diperlukan" }),
  address: z.string().min(1, { message: "Bagian ini diperlukan" }),
  complaint: z.string().min(1, { message: "Bagian ini diperlukan" }),
  therapyExperience: z.string().min(1, { message: "Bagian ini diperlukan" }),
  email: z
    .string()
    .email({ message: "Email tidak valid" })
    .optional()
    .or(z.literal("")),
  gender: z.string().min(1, { message: "Bagian ini diperlukan" }),
  registrationCategory: z.string().min(1, { message: "Bagian ini diperlukan" }),
  accompanyingParticipantName: z.string().optional(),
  accompanyingParticipantComplaint: z.string().optional(),
  referredBy: z.string().min(1, { message: "Bagian ini diperlukan" }),
  reservationServices: z
    .array(z.string())
    .min(1, { message: "Bagian ini diperlukan" }),
  reservationDatetime: z.string().min(1, { message: "Bagian ini diperlukan" }),
  optionalDatetime: z.string().optional(),
  phoneNumber: z.string().optional(),
});

export type ReservationFormData = z.infer<typeof reservationSchema>;
