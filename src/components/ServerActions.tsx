"use server";

import fs from 'fs';

import { UploadFiles } from "@/lib/schema";
import { getClient } from "@/lib/urql";
import { revalidateTag } from "next/cache";
import { Mutation, MutationReadFilesArgs } from '@/gql/graphql';


export const handleFileUpload = async (e: FormData) => {
  const images = e.getAll("imagesInput");

  if (!images) return;

  const client = getClient();
  const result = await client.mutation<Mutation, MutationReadFilesArgs>(UploadFiles, { files: images });
  const { data, error } = result;

  revalidateTag("api");

  const resultData = data?.readFiles.map((node) => ({ Image: node.image, MaxConfidenceCoordinate: node.maxConfidenceCoordinate }));

  const filePath = `${process.cwd()}/public/result.json`;

  fs.writeFile(filePath, JSON.stringify(resultData), (err) => {
    if (err) {
      console.error('Error saving result data to JSON file:', err);
    } else {
      console.log('Result data saved to JSON file');
    }
  });

  return resultData;
};
