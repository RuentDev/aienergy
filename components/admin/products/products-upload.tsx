"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload } from "lucide-react";
import { useRef, useState } from "react";

const ProductsUpload = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const hiddenInputRef = useRef<HTMLInputElement>(null);

  const handleContainerClick = () => {
    if (isUploading) return;
    hiddenInputRef.current?.click();
  };

  return (
    <div
      className={`border-2 border-dashed rounded-lg p-2 text-center transition-colors duration-200 ${
        isDragging
          ? "border-blue-500 bg-blue-50"
          : "border-blue-300 hover:border-3 hover:border-blue-400 bg-blue-50"
      }`}
      // onDragOver={handleDragOver}
      // onDragLeave={handleDragLeave}
      // onDrop={handleDrop}
      onClick={handleContainerClick}
    >
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="p-1 bg-blue-100 rounded-full">
          <Upload className="w-5 h-5 text-blue-600" />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-center gap-5">
            <p className="text-sm font-medium text-gray-700 flex items-center justify-center">
              <Label
                htmlFor="fileInput"
                className={`text-black cursor-pointer text-xs border-b border-primary hover:text-primary transition-colors ${
                  isUploading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                Upload Products
              </Label>
            </p>
          </div>
          <p className="text-xs text-gray-500">CSV</p>
        </div>
      </div>

      <Input
        multiple
        type="file"
        name="files"
        id="fileInput"
        className="hidden"
        // onChange={handleFileInputChange}
        accept=".csv"
        ref={hiddenInputRef}
        // disabled={isUploading}
      />
    </div>
  );
};

export default ProductsUpload;
