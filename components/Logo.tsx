import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/avekshaalogo.svg"
      alt="Avekshaa"
      width={645}
      height={191}
      className="h-auto w-[150px]"
    />
  );
}
