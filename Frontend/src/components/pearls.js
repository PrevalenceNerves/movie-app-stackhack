import React from "react";
import pearlimg from "../assets/pearls.png";
const Pearls = () => {
  return (
    <div>
      <h2 className=" font-bold text-2xl text-left">
        Pearls of Azerbaijani cinema
      </h2>

      <div className=" columns-2 m-16">
        <div>
          <img src={pearlimg} h-15-w-15 />
        </div>

        <div>
          <p className=" text-gray-700 font-extralight italic mt-2 ">OPERETTA</p>
          <h2 className=" font-bold text-2xl mb-11 mt-2">Arshin Mal Alan</h2>
          <p className=" text-left">
            Arshin Mal Alan is a 4-act operetta composed by Azerbaijani composer
            Uzeyir Hajibeyov. The libretto of the work was also written by
            Uzeyir Hajibeyov in 1913 in St. Petersburg. The premiere of the
            opera was held on October 25, 1913 at the Haji Zeynelabidin Tagiyev
            Theater in Baku.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pearls;
