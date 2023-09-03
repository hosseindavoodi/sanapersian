import Image from "next/image";

interface StatesModalProps {
  closeStateModal: (param: boolean) => void;
}

export default function StatesModal({ closeStateModal }: StatesModalProps) {
  return (
    <div className=" absolute right-0 top-48 bg-white lg:w-[400px] md:w-[400px] sm:w-full p-6">
      <Image
        src="/closeModal.svg"
        className=" absolute right-4 top-4 cursor-pointer"
        alt=""
        width={25}
        height={25}
        onClick={() => closeStateModal(false)}
      />
      fasdfasdf
    </div>
  );
}
