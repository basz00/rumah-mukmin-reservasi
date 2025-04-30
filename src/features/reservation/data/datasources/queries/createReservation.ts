import { gql } from "@apollo/client";

export const CREATE_RESERVATION = gql`
  mutation CreateReservation($createReservationInput: CreateReservationInput!) {
    createReservation(input: $createReservationInput) {
      id
    }
  }
`;
