import { useCreateReservationDataSource } from "../datasources/useCreateReservationDataSource";

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
