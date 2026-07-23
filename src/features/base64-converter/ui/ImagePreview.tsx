import { ImageBroken, Warning } from "@phosphor-icons/react";

interface ImagePreviewProps {
  imageSrc: string | null;
  error: string | null;
  onImageError: () => void;
}

export function ImagePreview({
  imageSrc,
  error,
  onImageError,
}: ImagePreviewProps) {
  if (error) {
    return (
      <div className="flex items-center gap-2 text-red-600 bg-red-50 rounded-lg p-3">
        <Warning size={22} weight="fill" />
        <span className="text-sm font-medium">{error}</span>
      </div>
    );
  }

  if (imageSrc) {
    return (
      <div className="border border-gray-200 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center p-4">
        <img
          src={imageSrc}
          alt="Converted"
          className="max-w-full max-h-96 object-contain"
          onError={onImageError}
        />
      </div>
    );
  }

  return (
    <div className="border-2 border-dashed border-gray-300 rounded-lg p-10 flex flex-col items-center gap-2 text-gray-400">
      <ImageBroken size={40} />
      <span className="text-sm">
        Здесь появится изображение после конвертации
      </span>
    </div>
  );
}
