'use client';
import { useDraggable } from '@dnd-kit/core';
import { cn } from '@/lib/utils';
import { ElementType } from '@/types/element';

interface DraggableElementProps {
  type: ElementType;
  icon: React.ReactNode;
  label: string;
}

const DraggableElement = ({ type, icon, label }: DraggableElementProps) => {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: `new-${type}`,
    data: { type },
  });

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className={cn(
        'flex flex-col w-full items-center gap-3 py-5 justify-center cursor-move',
        isDragging && 'bg-[#4F46E5] text-white'
      )}
    >
      {icon}
      <span className='text-sm'>{label}</span>
    </div>
  );
};

export default DraggableElement;
