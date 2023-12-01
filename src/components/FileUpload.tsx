import { graphql } from '@/gql';
import { Mutation, MutationReadFileArgs } from '@/gql/graphql';
import makeClient from '@/lib/urql';
import { registerUrql } from '@urql/next/rsc';

const UploadFiles = graphql(/* GraphQL */ `
  mutation fileUpload($file: Upload!){
    readFile(file: $file){
      image
      maxConfidenceCoordinate
    }
  }
`);

const ImagesUpload = async () => {

  const { getClient } = registerUrql(makeClient);
  const client = getClient;

  const result = await client().mutation<Mutation, MutationReadFileArgs>(UploadFiles, {
    file: undefined
  });
  const { data, error } = result;

  const handleFileUpload = async (e: FormData) => {
    // "use server";
    const images = e.get("imagesInput");

    if (!images) return;

    const result = await client().mutation<Mutation, MutationReadFileArgs>(UploadFiles, { file: images });
    const { data } = result;
    console.log(data)

  };

  return (
    <>
      <div>
        <form>
          <input type="file" accept="image/*" name='imagesInput' className="file-input file-input-ghost w-full max-w-xs" />
          <button formAction={handleFileUpload} className='bg-rmx-grey-charcoal rounded-md p-2'>Upload</button>
        </form>
      </div>
      <div>
        {error && <p>{error.message}</p>}
        {data && <pre>{JSON.stringify(data, null, 4)}</pre>}
      </div>
    </>
  );

}

export default ImagesUpload;