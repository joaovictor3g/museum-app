import { Work } from "@/@types/work";
import { api } from "./api";
import { addEllipsisOnStringBiggerThan50 } from "@/utils";

export async function loadWorks(ids: number[]) {
  const makeRequests = ids.map((id) => api.get(`/objects/${id}`));

  try {
    const objects = await Promise.allSettled(makeRequests);

    const works = objects
      .filter((object) => object.status === "fulfilled")
      .map<Work>(({ value }: any) => ({
        id: value.data.objectID,
        image: value.data.primaryImageSmall,
        name: addEllipsisOnStringBiggerThan50(value.data.title),
        fullName: value.data.title,
        author: value.data.artistDisplayName,
        additionalImages: value.data.additionalImages,
        constituents: value.data.constituents,
        imageSmall: value.data.primaryImageSmall,
        isPublicDomain: value.data.isPublicDomain,
        objectDate: value.data.objectDate,
      }));

    return works as Work[];
  } catch (error) {
    console.log(error);
  }
}
