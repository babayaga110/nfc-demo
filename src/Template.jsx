import * as React from "react";
export default function Template({
  doctor
}) {
  return (
    <div className="w-full h-full flex flex-row">
      <div className="w-full md:w-[35%] flex flex-col items-start justify-between p-2">
        <img
          src="https://cdn.prod.website-files.com/631e26f79f2c5af80112309a/6364dd74dc73e00bb8608349_6355bd38d13ee9a99e5b62eb_DSFH-Riyadh-Logo-p-500.webp"
          alt="logo"
          className="w-full h-auto object-contain "
        />
        <div className="w-full px-1  md:p-5">
          <h4 className="font-bold text-gray-600 text-2xl md:text-3xl lg:text-3xl mb-2">
            {doctor?.name?.en}
          </h4>
          <h4 className="font-bold text-gray-600 text-2xl md:text-3xl lg:text-3xl mb-2">
            {doctor?.name?.ar}
          </h4>
          <hr className="w-full border-1 border-gray-300 mb-2 md:mb-5 " />
          <p className="font-normal text-gray-400 text-xl md:text-2xl lg:text-2xl">
            {doctor?.designation?.en}
          </p>
          <p className="font-normal text-gray-400 text-xl md:text-2xl lg:text-2xl">
            {doctor?.designation?.ar}
          </p>
        </div>
      </div>

      <div className="w-[65%] bg-[#f99816] p-3 rounded-bl-[500px] flex justify-center items-center overflow-hidden">
        <img
          src={doctor?.image}
          // src="https://avatars.githubusercontent.com/u/25135837?v=4"
          alt="logo"
          className="rounded-full object-cover"
          style={{
            aspectRatio: "1/1",
            maxWidth:"80%"
          }}
        />
      </div>
    </div>
  );
}