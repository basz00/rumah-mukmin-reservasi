import {
  Button,
  CheckboxGroup,
  DateTimeField,
  PhoneField,
  RadioGroup,
  TextInputField,
} from "@/components";
import { useCreateReservationRepository } from "@/reservation/data/repositories";
import {
  ReservationFormData,
  reservationSchema,
} from "@/reservation/presentation/entity";
import { mapToReservation } from "@/reservation/presentation/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { mapError } from "core/error";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Form = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ReservationFormData>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      gender: "",
      registrationCategory: "",
      reservationServices: [],
      phoneNumber: "",
    },
  });
  const { execute, isSuccess, loading, error } =
    useCreateReservationRepository();

  useEffect(() => {
    toast.dismiss();

    if (loading) {
      toast.loading("Loading...", { position: "bottom-center" });
      return;
    }

    if (isSuccess) {
      toast.success("Reservasi anda berhasil", {
        position: "bottom-center",
      });
      control._reset();
      return;
    }

    if (error) {
      toast.error(mapError(error.cause?.extensions.code), {
        position: "bottom-center",
      });
      return;
    }
  }, [isSuccess, loading, error, control]);

  const checkIsRequired = (field: keyof ReservationFormData) => {
    return !reservationSchema.shape[field].isOptional();
  };

  return (
    <form
      onSubmit={handleSubmit((data) => {
        execute(mapToReservation(data));
      })}
      className="w-auto flex flex-col px-3 gap-8"
    >
      <TextInputField
        label="Nama"
        hint="Silakan isikan nama anda"
        error={errors.name?.message}
        required={checkIsRequired("name")}
        {...register("name")}
      />
      <TextInputField
        label="Usia"
        hint="Silakan Isikan Usia Anda"
        type="number"
        error={errors.age?.message}
        required={checkIsRequired("age")}
        {...register("age")}
      />
      <TextInputField
        label="Domisili"
        hint="Silakan Isikan Alamat Anda"
        error={errors.address?.message}
        required={checkIsRequired("address")}
        {...register("address")}
      />
      <TextInputField
        label="Perawatan/Keluhan yang di Alami"
        hint="Perawatan bekam rutin -Silahkan Isikan Keluhan Yang Anda Alami (jika ada) - Konsultasi"
        error={errors.complaint?.message}
        required={checkIsRequired("complaint")}
        {...register("complaint")}
      />
      <TextInputField
        label="Sudah pernah/belum bekam/fasdhu/terapi"
        hint="(kapan waktu terakhir terapi? - Bekam/Fasdhu/Donor/Gurah/Chiropractic/Accupuncture/Accupressure)"
        error={errors.therapyExperience?.message}
        required={checkIsRequired("therapyExperience")}
        {...register("therapyExperience")}
      />
      <TextInputField
        label="Alamat email"
        hint="Kami akan mengirimkan penawaran terbaik dan promo layanan baru kami kepada pelanggan kami melalui email ini"
        error={errors.email?.message}
        required={checkIsRequired("email")}
        {...register("email")}
      />
      <RadioGroup
        label="Saya seorang"
        hint="(layanan sesuai gender)"
        formProps={[
          {
            formId: "WOMAN",
            formLabel: "Akhwat/Ummahat",
          },
          { formId: "MAN", formLabel: "Ikhwan" },
          { formId: "CHILD", formLabel: "Anak-anak" },
        ]}
        error={errors.gender?.message}
        required={checkIsRequired("gender")}
        {...register("gender")}
      />
      <RadioGroup
        label="Kategori"
        hint="(peserta, pendaftar, repeat)"
        formProps={[
          {
            formId: "NEW_REGISTRATION",
            formLabel: "Pendaftar baru",
          },
          {
            formId: "RE_REGISTRATION",
            formLabel: "Pendaftar kembali",
          },
          {
            formId: "REGULAR_REGISTRATION",
            formLabel: "Pendaftar rutin/lanjutan",
          },
        ]}
        error={errors.registrationCategory?.message}
        required={checkIsRequired("registrationCategory")}
        {...register("registrationCategory")}
      />
      <TextInputField
        label="Nama peserta bawaan"
        hint="Silahkan Isikan Nama Peserta lain yang dibawa(jika ada)"
        error={errors.accompanyingParticipantName?.message}
        required={checkIsRequired("accompanyingParticipantName")}
        {...register("accompanyingParticipantName")}
      />
      <TextInputField
        label="Keluhan peserta bawaan"
        hint="Silahkan Isikan keluhan peserta lain yang dibawa"
        error={errors.accompanyingParticipantComplaint?.message}
        required={checkIsRequired("accompanyingParticipantComplaint")}
        {...register("accompanyingParticipantComplaint")}
      />
      <TextInputField
        label="Yang merekomendasikan anda"
        hint="orang tua, keluarga, teman, kenalan, sahabat, saudara"
        error={errors.referredBy?.message}
        required={checkIsRequired("referredBy")}
        {...register("referredBy")}
      />
      <CheckboxGroup
        label="Layanan reservasi"
        formProps={[
          {
            formId: "HEALTH_CONSULTATION",
            formLabel: "Konsultasi Kesehatan",
          },
          {
            formId: "FASDHU_THERAPY",
            formLabel: "Terapi Fasdhu",
          },
          {
            formId: "CHIROPRACTIC",
            formLabel: "Chiropractic",
          },
          {
            formId: "NASAL_GURAH_THERAPY",
            formLabel: "Terapi Gurah Hidung",
          },
          {
            formId: "ACUPUNCTURE",
            formLabel: "Acupuncture",
          },
          {
            formId: "ACUPRESSURE",
            formLabel: "Acupressure",
          },
          {
            formId: "EYE_GURAH_THERAPY",
            formLabel: "Terapi Gurah Mata",
          },
          {
            formId: "THROAT_GURAH",
            formLabel: "Gurah Teggorokan",
          },
          {
            formId: "HIJAMAH_BEKAM_THERAPY",
            formLabel: "Terapi Hijamah/Bekam",
          },
          {
            formId: "HERBAL_SHOPPING",
            formLabel: "Belanja Herbal",
          },
          {
            formId: "LEARNING_TRAINING",
            formLabel: "Belajar/Pelatihan",
          },
        ]}
        error={errors.reservationServices?.message}
        required={checkIsRequired("reservationServices")}
        {...register("reservationServices")}
      />
      <DateTimeField
        label="Waktu reservasi permintaan"
        hint="jam kerja aktif 08.00 - 17.00 Senin - Ahad, Rabu Libur(Kecuali Tanggal Sunnah)"
        required={checkIsRequired("reservationDatetime")}
        error={errors.reservationDatetime?.message}
        {...register("reservationDatetime")}
      />
      <DateTimeField
        label="Waktu optional lain"
        hint="(jika Pilihan saya telah di booked orang lain - jam kerja) tuliskan jam lain pada kolom diatas, terima kasih"
        required={checkIsRequired("optionalDatetime")}
        error={errors.optionalDatetime?.message}
        {...register("optionalDatetime")}
      />
      <Controller
        name="phoneNumber"
        control={control}
        render={({ field }) => (
          <PhoneField
            label="Masukkan nomor telepon Anda"
            hint="+62 adalah kode negara Indonesia pengganti angka 0 - +62812345xxxx"
            error={errors.phoneNumber?.message}
            required={checkIsRequired("phoneNumber")}
            inputProps={{ ...field }}
          />
        )}
      />
      <div className="items-start">
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
};

export default Form;
