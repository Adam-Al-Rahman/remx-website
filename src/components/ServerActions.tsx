"use server";

import { UploadFiles } from "@/lib/schema";
import { getClient } from "@/lib/urql";
import { revalidateTag } from "next/cache";
import { Mutation, MutationReadFilesArgs } from '@/gql/graphql';
import SideBar from "./Sidebar";

export const handleFileUpload = async (e: FormData) => {
  const images = e.getAll("imagesInput");

  if (!images) return;

  const client = getClient();
  const result = await client.mutation<Mutation, MutationReadFilesArgs>(UploadFiles, { files: images });
  const { data, error } = result;

  const resultData = data?.readFiles.map((node) => ({ Image: node.image, MaxConfidenceCoordinate: node.maxConfidenceCoordinate }));
  console.log("Result DATA\n", resultData);
  console.log(typeof resultData);

  console.log(resultData?.map((node) => ([node.Image, node.MaxConfidenceCoordinate])));

  < SideBar resultData={resultData} />
  revalidateTag("api");

};