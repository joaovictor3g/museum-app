import Image from "next/image";
import { Box } from "./styles";
import Link from "next/link";
import { Work } from "@/@types/work";

interface WorkBoxProps {
  work: Work;
}

export function WorkBox({ work }: WorkBoxProps) {
  return (
    <Box href={`/work/${work.id}`}>
      <Image src={work.imageSmall} alt="" width={300} height={300} />
      <div className="infos">
        <strong className="title">{work.name}</strong>
        <span className="author">{work.author}</span>
      </div>
    </Box>
  );
}
