import { useCreateReservationDataSource } from "@/reservation/data/datasources";

export const useCreateReservationRepository = () => {
  const { execute, error, isSuccess, loading } =
    useCreateReservationDataSource();

  return {
    execute,
    error,
    isSuccess,
    loading,
  };
};
