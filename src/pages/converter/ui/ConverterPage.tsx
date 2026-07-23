import { useState } from "react";
import { Image } from "@phosphor-icons/react";
import { Base64Input } from "@/features/base64-converter/ui/Base64Input";
import { ImagePreview } from "@/features/base64-converter/ui/ImagePreview";
import {
  normalizeBase64,
  isValidBase64Image,
} from "@/features/base64-converter/lib/base64";

export function ConverterPage() {
  const [input, setInput] = useState("");
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  function handleConvert() {
    setError(null);
    setImageSrc(null);

    if (!input.trim()) {
      setError("Вставьте base64 строку");
      return;
    }

    const src = normalizeBase64(input);

    if (!isValidBase64Image(src)) {
      setError("Невалидный base64 формат");
      return;
    }

    setImageSrc(src);
  }

  function handleClear() {
    setInput("");
    setImageSrc(null);
    setError(null);
  }

  function handleImageError() {
    setError("Не удалось загрузить изображение из base64");
    setImageSrc(null);
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-6 space-y-5">
        <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          <Image size={28} weight="duotone" className="text-blue-600" />
          Base64 → Image
        </h1>

        <Base64Input
          value={input}
          onChange={setInput}
          onConvert={handleConvert}
          onClear={handleClear}
        />

        <ImagePreview
          imageSrc={imageSrc}
          error={error}
          onImageError={handleImageError}
        />
      </div>
    </div>
  );
}
