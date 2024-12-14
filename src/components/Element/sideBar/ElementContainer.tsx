import React from 'react';
import CreateElement from './CreateElement';
import Layer from './Layer';
import { Element } from '@/types/element';

interface ElementContainerProps {
  elements: Element[];
  setElements: (element: Element[]) => void;
}
const ElementContainer = ({ elements, setElements }: ElementContainerProps) => {
  return (
    <div className='w-1/5 bg-gray-100 pt-4 border-r flex justify-between flex-col'>
      <CreateElement />
      <Layer elements={elements} setElements={setElements} />
    </div>
  );
};
export default ElementContainer;
