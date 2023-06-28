import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div>
      <h1>Follow the ring...</h1>
      <Link href="/volumes">
        <Image
          src={"/../public/images/b0734e2fe4398655991f6ba3f0c47576.jpg"}
          alt=""
          width={144}
          height={144}
        />
      </Link>
    </div>
  );
}
