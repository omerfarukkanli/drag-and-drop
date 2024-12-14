import { Element } from '../../../types/element';
interface ElementRendererProps {
  element: Element;
}

const ElementRenderer = ({ element }: ElementRendererProps) => {
  switch (element.type) {
    case 'heading':
      return (
        <h1
          style={{
            fontFamily: element.properties.fontFamily,
            fontWeight:
              element.properties.fontWeight === 'bold'
                ? 700
                : element.properties.fontWeight === 'semibold'
                ? 600
                : element.properties.fontWeight === 'medium'
                ? 500
                : 400,
          }}
          className='text-4xl mb-4 text-center'
        >
          {element.properties.text}
        </h1>
      );

    case 'paragraph':
      return (
        <p
          style={{
            fontFamily: element.properties.fontFamily,
            fontWeight:
              element.properties.fontWeight === 'bold'
                ? 700
                : element.properties.fontWeight === 'semibold'
                ? 600
                : element.properties.fontWeight === 'medium'
                ? 500
                : 400,
          }}
          className='text-base mb-4'
        >
          {element.properties.text}
        </p>
      );

    case 'image':
      return (
        <img
          src={element.properties.src}
          style={{
            width: element.properties.width,
            height: element.properties.height,
          }}
          alt=''
          className='w-full h-auto rounded-lg'
        />
      );

    case 'video':
      return (
        <video
          src={element.properties.src}
          style={{
            width: element.properties.width,
            height: element.properties.height,
          }}
          controls
          className='w-full rounded-lg'
        />
      );

    default:
      return null;
  }
};

export default ElementRenderer;
