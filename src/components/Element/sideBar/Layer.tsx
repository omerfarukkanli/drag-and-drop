import React from 'react';
import { Element } from '@/types/element';
import { Heading, Image, LucideIcon, Text, Trash2, Video } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LayerProps {
  elements: Element[];
  setElements: (element: Element[]) => void;
}

export default function Layer({ elements, setElements }: LayerProps) {
  const handleRemoveElement = (elementId: string) => {
    setElements(elements.filter((el) => el.id !== elementId));
  };

  const elementIcons: Record<string, { icon: LucideIcon; label: string }> = {
    heading: { icon: Heading, label: 'Heading' },
    paragraph: { icon: Text, label: 'Paragraph' },
    image: { icon: Image, label: 'Image' },
    video: { icon: Video, label: 'Video' },
  };

  return (
    <div>
      <h2 className='bg-white border-y p-2 font-bold'>Layers</h2>
      {elements.map((element, index) => (
        <div
          key={'layer-' + index}
          className={cn(
            'flex justify-between p-2 border-y transition-colors',
            index !== 0 && 'border-t'
          )}
        >
          {elementIcons[element.type] && (
            <div className='flex items-center gap-2'>
              {React.createElement(elementIcons[element.type].icon, {
                className: 'h-4 w-4 text-gray-500',
              })}
              <span className='text-sm'>
                {elementIcons[element.type].label}
              </span>
            </div>
          )}

          <Trash2
            onClick={() => handleRemoveElement(element.id)}
            className='h-4 w-4 cursor-pointer text-[#BA2F2F]'
            size={32}
          />
        </div>
      ))}
    </div>
  );
}
