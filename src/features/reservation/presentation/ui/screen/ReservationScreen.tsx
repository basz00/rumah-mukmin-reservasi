import { Button } from "@/components";
import { useHostState } from "@/reservation/common/config";
import { Form } from "@/reservation/presentation/ui/components";
import { Settings } from "lucide-react";

const ReservationScreen = () => {
  const { hostUrl, setHostUrl } = useHostState();

  const showHostUrlDialog = () => {
    const result = prompt("Please enter your host url", hostUrl);
    if (result) {
      setHostUrl(result);
    }
  };

  return (
    <div className="flex justify-center h-full p-0 sm:p-20">
      <div className="flex flex-col w-full justify-center border-2 border-solid border-[#f0f0f3] bg-white p-5 pt-8 sm:p-6 max-w-[700px] rounded-md">
        <Button onClick={showHostUrlDialog} type="button">
          <Settings />
          <span>Settings</span>
        </Button>
        <h1 className="text-2xl text-black font-bold break-words whitespace-normal">
          Assalamualaykum warahmatullahi wabarakatuh
        </h1>
        <p className="text-sm mb-10 text-gray-600">
          berikut ini adalah formulir isian pendaftaran reservasi anda di Rumah
          Mukmin
        </p>
        <h1 className="text-2xl text-black font-bold">
          Jadwalkan reservasi terapi anda
        </h1>
        <img
          src="https://uploads.whatsform.com/63e1d5dbddafb7c2e212e279/3D2A72C7-43D7-4D40-973B-B83BB5210ED0-1675745015860.jpg?x-t=1675745018822"
          className="p-1"
        />
        <p className="text-sm mb-10 text-gray-600">
          Para ahli ditempat kami siap melayani Anda
        </p>
        <Form />
      </div>
    </div>
  );
};

export default ReservationScreen;
