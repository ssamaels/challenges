import { introduction } from "../../lib/data";
import Link from "next/link";

export default function Books() {
  return (
    <>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All volumes</h2>
      <ul>
        <li>
          <Link href="/volumes/the-fellowship-of-the-ring">
            The fellowship of the ring
          </Link>
        </li>
        <li>
          <Link href="/volumes/the-two-towers">The two towers</Link>
        </li>
        <li>
          <Link href="/volumes/the-return-of-the-king">
            The return of the king
          </Link>
        </li>
      </ul>
    </>
  );
}
