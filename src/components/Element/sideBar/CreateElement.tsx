import React from 'react';
import DraggableElement from './DraggableElement';
import { Type, Image, Video, Heading } from 'lucide-react';

import { Accordion, AccordionItem, AccordionTrigger } from '../../ui/accordion';
import { AccordionContent } from '@radix-ui/react-accordion';
import { Label } from '../../ui/label';

const CreateElement = () => {
  return (
    <div>
      <h2 className=' pb-2 pl-4 font-semibold '>Add New</h2>
      <div className='py-4'>
        <Label className='border-[#4F46E5] border-b-4 p-4'>Elements</Label>
      </div>
      <Accordion type='single' collapsible>
        <AccordionItem value='header'></AccordionItem>
        <AccordionItem value='item-1' className='px-4'>
          <AccordionTrigger className='hover:no-underline'>
            Typography
          </AccordionTrigger>
          <AccordionContent className='flex flex-row gap-2'>
            {' '}
            {/* Changed: added flex-row and padding */}
            <DraggableElement
              type='heading'
              icon={<Heading size={32} />}
              label='Heading'
            />
            <DraggableElement
              type='paragraph'
              icon={<Type size={32} />}
              label='Paragraph'
            />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-2' className='px-4'>
          <AccordionTrigger className='hover:no-underline'>
            Media
          </AccordionTrigger>
          <AccordionContent className='flex flex-row gap-2'>
            <DraggableElement
              type='image'
              // eslint-disable-next-line jsx-a11y/alt-text
              icon={<Image size={32} />}
              label='Image'
            />
            <DraggableElement
              type='video'
              icon={<Video size={32} />}
              label='Video'
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
export default CreateElement;
