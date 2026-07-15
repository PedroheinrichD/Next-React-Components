"use client";

import { PhotoList } from "@/data/PhotoList";
import Image from "next/image";
import { useState } from "react";

function PhotoGallery() {
  const [imageSelecionada, setImageSelecionada] = useState<string | null>(null);

  // buscar o objeto inteiro com find()
  function openImage(id: string) {
    setImageSelecionada(id);
  }

  function closeImage() {
    setImageSelecionada(null);
  }
  
  const photoSelecionada = PhotoList.find(
    (item) => item.id === imageSelecionada,
  );

  return (
    <section className="grid grid-cols-3 gap-4">
      {PhotoList.map((item) => (
        <div key={item.id}>
          <Image
            src={item.url}
            alt="photo"
            width={400}
            height={500}
            className="hover:opacity-95 cursor-pointer"
            onClick={() => openImage(item.id)}
          />
        </div>
      ))}

      {photoSelecionada && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={closeImage}
        >
          <Image
            src={photoSelecionada.url}
            alt="foto ampliada"
            width={1000}
            height={800}
            className="max-h-[90vh] w-auto object-contain"
          />
        </div>
      )}
    </section>
  );
}

export default PhotoGallery;
