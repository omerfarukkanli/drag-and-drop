import { useDroppable } from '@dnd-kit/core';
import { Element } from '../../../types/element';
import ElementRenderer from './ElementRenderer';

interface CanvasProps {
  elements: Element[];
  selectedElement: Element | null;
  onSelectElement: (element: Element) => void;
}

const Canvas = ({
  elements,
  selectedElement,
  onSelectElement,
}: CanvasProps) => {
  const { setNodeRef } = useDroppable({
    id: 'canvas',
  });

  return (
    <div className='w-3/5'>
      <div ref={setNodeRef} className='h-full py-10 px-16'>
        <div className=' h-full bg-[#E9E9E9] pt-10 p-5'>
          {elements.map((element) => (
            <div
              key={element.id}
              onClick={() => onSelectElement(element)}
              className={` group relative ${
                selectedElement?.id === element.id
                  ? 'ring-2 ring-blue-500'
                  : 'hover:ring-2 hover:ring-blue-200'
              }`}
            >
              {selectedElement?.id === element.id && (
                <div className='absolute -top-6 right-0 bg-blue-500 text-white text-xs px-2 py-1'>
                  Section: {element.type}
                </div>
              )}
              <ElementRenderer element={element} />
            </div>
          ))}
          {elements.length === 0 && (
            <div className='h-[80vh] flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg'>
              <p className='text-gray-500'>Drag and drop elements here</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Canvas;
