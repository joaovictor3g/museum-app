import Image from "next/image";
import { Box } from "./styles";
import Link from "next/link";
import { Work } from "@/@types/work";

interface WorkBoxProps {
  work: Work;
}

export function WorkBox({ work }: WorkBoxProps) {
  return (
    <Box>
      <Image src={work.imageSmall} alt="" width={300} height={300} />
      <Link href={`/work/${work.id}`} className="infos">
        <strong className="title">{work.name}</strong>
        <span className="author">{work.author}</span>
      </Link>
    </Box>
  );
}
