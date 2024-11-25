import React from 'react';
import { Upload, X } from 'lucide-react';
import { useEditorStore } from '../../lib/store';

export default function VideoUploader() {
  const { currentProject, updateProjectVideo, setIsProcessing } = useEditorStore();
  const [dragActive, setDragActive] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0] && currentProject) {
      await handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0] && currentProject) {
      await handleFile(e.target.files[0]);
    }
  };

  const handleFile = async (file: File) => {
    if (!currentProject) return;
    
    setIsProcessing(true);
    try {
      const videoUrl = URL.createObjectURL(file);
      updateProjectVideo(currentProject.id, videoUrl);
    } catch (error) {
      console.error('Error processing video:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div
      className={`relative h-full flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-6 transition-colors
        ${dragActive ? 'border-indigo-500 bg-indigo-50/10' : 'border-gray-600 hover:border-gray-500'}`}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      <input
        ref={inputRef}
        type="file"
        className="hidden"
        accept="video/*"
        onChange={handleChange}
      />

      <Upload className="w-12 h-12 text-gray-400 mb-4" />
      <p className="text-sm text-gray-300 text-center mb-2">
        Drag and drop your video here, or{' '}
        <button
          className="text-indigo-400 hover:text-indigo-300"
          onClick={() => inputRef.current?.click()}
        >
          browse
        </button>
      </p>
      <p className="text-xs text-gray-500">
        Supports MP4, WebM, MOV up to 1GB
      </p>
    </div>
  );
}