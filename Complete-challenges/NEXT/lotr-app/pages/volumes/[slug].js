import { useRouter } from "next/router";
import { volumes } from "../../lib/data";
import Image from "next/image";
import Link from "next/link";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;
  const volume = volumes.find((volume) => volume.slug === slug);
  const volumeIndex = volumes.findIndex((volume) => volume.slug === slug);
  const previousVolumeSlug =
    volumeIndex > 0 ? volumes[volumeIndex - 1].slug : null;
  const nextVolumeSlug =
    volumeIndex < volumes.length - 1 ? volumes[volumeIndex + 1].slug : null;

  if (!volume) {
    return null;
  }

  return (
    <>
      {" "}
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
      <br />
      <Link href="/volumes">← All Volumes</Link>
      <br />
      {previousVolumeSlug && (
        <Link href={`/volumes/${previousVolumeSlug}`}>Previous Volume</Link>
      )}
      <br />
      {nextVolumeSlug && (
        <Link href={`/volumes/${nextVolumeSlug}`}>Next Volume</Link>
      )}
    </>
  );
}
