/* eslint-disable  @typescript-eslint/no-explicit-any */
export const mapError = (errorCode?: string | any) => {
  if (errorCode) {
    if (errorCode === "RESERVATION_CONFLICT_ERROR") {
      return "Pilihan waktu reservasi anda sudah digunakan oleh orang lain.\nSilahkan pilih waktu lain";
    }
  }

  return "Something went wrong";
};
