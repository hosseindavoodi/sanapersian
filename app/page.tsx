"use client";

import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import MapIran from "./components/Map/MapIran";

export default function App() {
  const [zoom, setZoom] = useState(false);

  const zoomIconClass =
    "absolute right-2 top-2 cursor-pointer hover:opacity-80";

  return (
    <div
      className={clsx(
        "m-auto relative max-w-full",
        zoom ? "w-[1009px]" : "w-[798px]"
      )}
    >
      {!zoom ? (
        <Image
          src="/zoomIn.svg"
          alt=""
          width={45}
          height={45}
          className={zoomIconClass}
          onClick={() => setZoom(!zoom)}
        />
      ) : (
        <Image
          src="/zoomOut.svg"
          alt=""
          width={45}
          height={45}
          className={zoomIconClass}
          onClick={() => setZoom(!zoom)}
        />
      )}

      <MapIran />
    </div>
  );
}
