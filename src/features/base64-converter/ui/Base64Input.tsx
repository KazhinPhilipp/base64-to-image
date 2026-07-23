import { ArrowRight, Trash } from "@phosphor-icons/react";

interface Base64InputProps {
  value: string;
  onChange: (value: string) => void;
  onConvert: () => void;
  onClear: () => void;
}

export function Base64Input({
  value,
  onChange,
  onConvert,
  onClear,
}: Base64InputProps) {
  return (
    <>
      <textarea
        className="w-full h-40 rounded-lg border border-gray-300 p-3 font-mono text-sm resize-y focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        placeholder="Вставьте base64 строку сюда..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />

      <div className="flex gap-3">
        <button
          className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors cursor-pointer disabled:opacity-50"
          onClick={onConvert}
          disabled={!value.trim()}
        >
          <ArrowRight size={20} weight="bold" />
          Конвертировать
        </button>
        <button
          className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2.5 rounded-lg font-medium hover:bg-gray-200 transition-colors cursor-pointer"
          onClick={onClear}
        >
          <Trash size={20} />
          Очистить
        </button>
      </div>
    </>
  );
}
