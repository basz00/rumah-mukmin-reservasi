import styled from "styled-components";
import { Form } from "@/reservation/presentation/ui/components";
import { Button } from "@/components";
import { Settings } from "lucide-react";
import { useHostState } from "@/reservation/common/config";

const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100vw;
  background-color: #f4f5f6;
  padding: 80px 0;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid #f0f0f3;
  border-radius: 5px;
  max-width: 700px;
  min-width: 270px;
  width: 100%;
  height: auto;
  min-height: 250px;
  margin: auto;
  background-color: white;
  padding: 24px;
`;

const H1 = styled.h1`
  font-size: 24px;
  margin-bottom: 6px;
  color: #000000d9;
`;

const P = styled.p`
  font-size: 13px;
  margin-bottom: 13px;
  color: #808080;
`;

const Img = styled.img`
  width: 546px;
  height: 546px;
`;

const ReservationScreen = () => {
  const { hostUrl, setHostUrl } = useHostState();

  const showHostUrlDialog = () => {
    const result = prompt("Please enter your host url", hostUrl);
    if (result) {
      setHostUrl(result);
    }
  };

  return (
    <ScreenContainer>
      <ContentContainer>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            style={{ display: "flex", alignItems: "center", gap: "6px" }}
            onClick={showHostUrlDialog}
          >
            <Settings />
            <span>Settings</span>
          </Button>
        </div>
        <H1>Assalamualaykum warahmatullahi wabarakatuh</H1>
        <P>
          berikut ini adalah formulir isian pendaftaran reservasi anda di Rumah
          Mukmin
        </P>
        <H1>Jadwalkan reservasi terapi anda</H1>
        <Img src="https://uploads.whatsform.com/63e1d5dbddafb7c2e212e279/3D2A72C7-43D7-4D40-973B-B83BB5210ED0-1675745015860.jpg?x-t=1675745018822" />
        <P>Para ahli ditempat kami siap melayani Anda</P>
        <Form />
      </ContentContainer>
    </ScreenContainer>
  );
};

export default ReservationScreen;
