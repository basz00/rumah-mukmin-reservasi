import { useMutation } from "@apollo/client";
import { CreateReservation } from "@/reservation/common/entities";
import { CREATE_RESERVATION } from "./queries/createReservation";

export const useCreateReservationDataSource = () => {
  const [createReservation, { data, loading, error }] =
    useMutation<CreateReservation>(CREATE_RESERVATION);
  const isSuccess = !error && !loading && !!data;

  const execute = (reservation: CreateReservation) => {
    createReservation({ variables: { createReservationInput: reservation } });
  };

  return {
    execute,
    isSuccess,
    loading,
    error,
  };
};
