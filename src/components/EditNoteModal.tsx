import React, { useState, useEffect } from 'react';
import { IoIosAdd, IoMdColorPalette } from 'react-icons/io';

interface EditNoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (newTitle: string, newContent: string, newImage: string | null, newBackgroundColor: string) => void;
  currentTitle: string;
  currentContent: string;
  currentImage: string | null;
  currentBackgroundColor: string;
}

const EditNoteModal: React.FC<EditNoteModalProps> = ({
  isOpen,
  onClose,
  onSave,
  currentTitle,
  currentContent,
  currentImage,
  currentBackgroundColor,
}) => {
  const [title, setTitle] = useState(currentTitle);
  const [content, setContent] = useState(currentContent);
  const [image, setImage] = useState<string | null>(currentImage);
  const [backgroundColor, setBackgroundColor] = useState(currentBackgroundColor);

  useEffect(() => {
    if (isOpen) {
      setTitle(currentTitle);
      setContent(currentContent);
      setImage(currentImage);
      setBackgroundColor(currentBackgroundColor);
    }
  }, [isOpen, currentTitle, currentContent, currentImage, currentBackgroundColor]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleBackgroundColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBackgroundColor(event.target.value);
  };

  const handleSave = () => {
    onSave(title, content, image, backgroundColor);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content" style={{ backgroundColor }}>
        <h2>Edit Note</h2>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
        />
        <div>
          <label htmlFor="imageUpload" style={{ cursor: 'pointer', marginRight: '10px' }}>
            <IoIosAdd size={24} />
          </label>
          <input
            type="file"
            id="imageUpload"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: 'none' }}
            aria-label="Upload Image"
          />
          {image && <img src={image} alt="Note" style={{ maxWidth: '100%', marginTop: '10px' }} />}
        </div>
        <div>
          <label htmlFor="backgroundColor" style={{ cursor: 'pointer' }}>
            <IoMdColorPalette size={24} />
          </label>
          <input
            type="color"
            id="backgroundColor"
            value={backgroundColor}
            onChange={handleBackgroundColorChange}
            aria-label="Choose Background Color"
          />
        </div>
        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default EditNoteModal;
