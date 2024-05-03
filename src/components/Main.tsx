import Image from "next/image";
import Link from "next/link";

import IconModel from "@/components/icons/model";
import IconRemx, { IconRemxFill } from "@/components/icons/remx";
import IconVersion from "@/components/icons/version";

import forest from "#/public/forest.svg";

import ImagesUpload from "@/components/FileUpload";
import { TypeClassNameProps } from "@/lib/types";
import { modelVersion } from "@/lib/remx";

interface TypeMainProps extends TypeClassNameProps {}

const Main = ({ className }: TypeMainProps) => {
  return (
    <>
      <div
        className={`${className} container w-3/4 gap-2 rounded-sm md:rounded-lg  bg-rmx-grey-charcoal px-2 py-2 lg:flex lg:flex-col`}
      >
        <div className="navbar bg-rmx-baltic-sea text-neutral-content lg:rounded-lg object-center w-full px-8 font-mono font-semibold">
          <div className="text-sm breadcrumbs">
            <ul>
              <li>
                <Link href="/">
                  <IconRemx />
                  <p className="ml-2">REMX</p>
                </Link>
              </li>
              <li>
                <Link href="http://localhost" target="_blank">
                  <IconModel />
                  <p className="ml-2">MODEL</p>
                </Link>
              </li>
              <li>
                <Link
                  href={`https://github.com/Adam-Al-Rahman/remx_yolo/releases/tag/${modelVersion}`}
                  target="_blank"
                >
                  <IconVersion />
                  <p className="ml-2">{modelVersion}</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-1 overflow-auto flex-col gap-2">
          <div className="rounded-sm md:rounded-lg mb-auto bg-rmx-dune px-2 py-2 items-center justify-center h-4/6">
            <Image
              priority={true}
              src={forest}
              className="object-cover h-full w-full rounded-md shrink"
              alt="forest animals"
            />
          </div>
          <div className="rounded-sm md:rounded-lg  bg-rmx-dune items-center justify-center lg:flex h-96">
            <ImagesUpload />
          </div>
        </div>
        <footer className="footer items-center p-4 bg-rmx-baltic-sea lg:rounded-lg mt-auto font-mono font-medium text-rmx-white">
          <aside className="items-center grid-flow-col">
            <IconRemxFill />
            <p>Copyright © 2023 - All right reserved</p>
          </aside>
          <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
          </nav>
        </footer>
      </div>
    </>
  );
};

export default Main;
