import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = ({}) => {
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div>
          <h1 className="tablet:m-10 text-2xl font-bold text-center mb-6">
            Contact
          </h1>
          <div className="mt-10">
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              LET&apos;S WORK
            </h1>
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              TOGETHER
            </h1>
            <Link href="mailto:abdulhhosainprogga@gmail.com">
            <Button type="primary">Send me a email </Button>
            </Link>
            <div className="mt-10">
              <Socials />
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-sm text-bold text-center mb-6 mt-2 laptop:mt-10 p-2 laptop:p-0">
        © All Rights Reserved by
        <Link href="https://github.com/AbdulHalimHosain">
          <a className="underline underline-offset-1 ml-2">
            Abdul Halim Hosain
          </a>
        </Link>
        <br />
        Created with Next.js | Hosted on GitHub.com
      </h1>
    </>
  );
};

export default Footer;
