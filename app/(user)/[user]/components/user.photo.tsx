import Image from "next/image";

export const UserPhoto = ({ url }: { url: string }) => {
  return <Image src={url} height={30} width={30} alt={"Profile Photo"} />;
};
