import { Link2 } from "lucide-react";

export function Logo() {
  return (
    <div className="w-16 h-16 mb-4 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-2xl">
        <Link2 className="w-8 h-8 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </div>
    </div>
  );
}
