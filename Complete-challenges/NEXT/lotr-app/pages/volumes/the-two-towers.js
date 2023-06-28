import { volumes } from "../../lib/data";
import Image from "next/image";
import Link from "next/link";

export default function TheReturnOfTheKing() {
  const volume = volumes.find(({ slug }) => slug === "the-two-towers");
  return (
    <>
      <div key={volume.slug}>
        <h2>{volume.title}</h2>
        <p>{volume.description}</p>
        <Image src={volume.cover} alt={volume.title} width={144} height={144} />
        {volume.books.map((book) => (
          <div key={book.ordinal}>
            <h3>
              {book.ordinal}
              {":  "}
              {book.title}
            </h3>
          </div>
        ))}
      </div>
      <Link href="../">Home</Link>
      <br></br>
      <Link href="/volumes">← All Volumes</Link>
      <br></br>
      <Link href="/volumes/the-fellowship-of-the-ring">Previous Volume</Link>
      <br></br>
      <Link href="/volumes/the-return-of-the-king">Next Volume</Link>
    </>
  );
}
