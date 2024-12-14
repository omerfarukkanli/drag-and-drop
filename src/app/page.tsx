'use client';
import { getDefaultProperties } from '@/lib/element-util';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import { useState } from 'react';
import { Element, ElementType, ElemnentProperties } from '@/types/element';
import Canvas from '@/components/Element/editor/Canvas';

import ElementContainer from '@/components/Element/sideBar/ElementContainer';
import StylePanel from '@/components/Element/editor/StylePanel';

export default function Home() {
  const [elements, setElements] = useState<Element[]>([]);
  const [selectedElement, setSelectedElement] = useState<Element | null>(null);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over || over.id !== 'canvas') return;

    const type = active.data?.current?.type as ElementType;
    if (!type) return;

    const newElement: Element = {
      id: crypto.randomUUID(),
      type,
      properties: getDefaultProperties(type) as unknown as ElemnentProperties,
    };

    setElements((prev) => [...prev, newElement]);
  };

  const handleUpdateElement = (updatedElement: Element) => {
    setElements((prev) =>
      prev.map((el) => (el.id === updatedElement.id ? updatedElement : el))
    );
    setSelectedElement(updatedElement);
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className='flex flex-1'>
        <ElementContainer elements={elements} setElements={setElements} />
        <Canvas
          elements={elements}
          selectedElement={selectedElement}
          onSelectElement={setSelectedElement}
        />
        <StylePanel
          selectedElement={selectedElement}
          onUpdateElement={handleUpdateElement}
        />
      </div>
    </DndContext>
  );
}
