import { AuthorInfo } from "./types";

interface Props {
  authors: AuthorInfo[];
}

const Author = ({ authors }: Props) => (
  <div className="py-1">
    {authors.map((author, index) => (
      <span className="relative p-4" key={index}>
        <span
          className="text-2xl font-normal text-gray"
        >
          {author.name}
        </span>
        <span className="font-normal text-sm absolute top-2 right-2 tracking-tight text-#555555">
          {author.ref}
        </span>
      </span>
    ))}
  </div>
);

export default Author;
