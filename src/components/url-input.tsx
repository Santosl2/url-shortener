"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { z } from "zod";

export const urlSchema = z.object({
  url: z.string().url(),
  // customSlug: z
  //   .string()
  //   .max(20)
  //   .optional()
  //   .refine((slug) => !slug || /^[a-zA-Z0-9-_]+$/.test(slug), {
  //     message:
  //       "Custom slug can only contain letters, numbers, hyphens, and underscores",
  //   }),
});

export type URLFormData = z.infer<typeof urlSchema>;

interface URLInputProps {
  onSubmit: (data: URLFormData) => void;
}

export function URLInput({ onSubmit }: URLInputProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<URLFormData>({
    resolver: zodResolver(urlSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Input
          {...register("url")}
          type="url"
          placeholder="https://www.figma.com/file/your-file-link"
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
            errors.url ? "border-red-500" : "border-gray-200"
          }`}
        />
        {errors.url && (
          <p className="mt-1 text-xs text-red-500">{errors.url.message}</p>
        )}
      </div>
      {/* <div>
        <Input
          {...register("customSlug")}
          type="text"
          placeholder="Custom slug (optional)"
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
            errors.customSlug ? "border-red-500" : "border-gray-200"
          }`}
        />
        {errors.customSlug && (
          <p className="mt-1 text-xs text-red-500">
            {errors.customSlug.message}
          </p>
        )}
      </div> */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full h-12 bg-gradient-to-r from-blue-400 to-purple-500 hover:from-blue-500 hover:to-purple-600 text-white font-medium rounded-lg text-lg"
      >
        {isSubmitting ? "Shortening..." : "Shorten It"}
      </Button>
    </form>
  );
}
