import { INFORMATION } from "@/lib/remx";
import { TypeResultData } from "@/lib/types"


interface TypeTableProps {
  resultData: (TypeResultData[] | undefined);
}

export const Table = ({ resultData }: TypeTableProps) => {

  const rowSkeleton = (node: TypeResultData) => (
    <tr>
      <td>{node.Image}</td>
      <td>{node.MaxConfidenceCoordinate}</td>
    </tr>
  );

  return (
    <>
      <div className="overflow-x-auto ">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>MaxConfidenceCoordinate</th>
            </tr>
          </thead>
          <tbody className="text-rmx-white">
            {resultData ? (resultData.map((node) => (rowSkeleton(node)))) : (<p className="text-left text-lg text-neutral-300 mb-4"> {INFORMATION}</p>)}
          </tbody>
        </table>
      </div>
    </>
  )
}