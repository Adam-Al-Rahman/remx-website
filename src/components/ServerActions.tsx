"use server";

import { UploadFiles } from "@/lib/schema";
import { getClient } from "@/lib/urql";
import { revalidateTag } from "next/cache";
import { Mutation, MutationReadFilesArgs } from '@/gql/graphql';
import { cookies } from 'next/headers'

export const handleFileUpload = async (prevState: any, formData: FormData) => {

  try {

    const images = formData.getAll("imagesInput");

    if (!images) return;

    const client = getClient();
    const result = await client.mutation<Mutation, MutationReadFilesArgs>(UploadFiles, { files: images });
    const { data, error } = result;

    revalidateTag("api");

    const resultData = data?.readFiles.map((node) => ({ Image: node.image, MaxConfidenceCoordinate: node.maxConfidenceCoordinate }));


    const status = true;
    cookies().set('resultStatus', JSON.stringify(status), { secure: true, maxAge: 1 })

    const oneDay = 24 * 60 * 60; // seconds
    const resultDataString = JSON.stringify(resultData);
    cookies().set('resultData', resultDataString, { secure: true });

    return { progress_status: 'ok', message: 'ok' };

  } catch (e) {
    return { progress_status: 'fail', message: 'fail' };
  }
};


