import { Element } from '../types/element';
import { LoremIpsum } from 'lorem-ipsum';

export const getDefaultProperties = (type: string) => {
  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4,
    },
    wordsPerSentence: {
      max: 16,
      min: 4,
    },
  });

  switch (type) {
    case 'heading':
      return {
        fontFamily: 'Arial',
        fontWeight: 'bold' as const,
        text: 'New Heading',
      };
    case 'paragraph':
      return {
        fontFamily: 'Arial',
        fontWeight: 'normal' as const,
        text: lorem.generateParagraphs(2),
      };
    case 'image':
      return {
        src: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba',
        width: 800,
        height: 400,
      };
    case 'video':
      return {
        src: 'https://example.com/video.mp4',
        width: 800,
        height: 450,
      };
    default:
      throw new Error(`Unknown element type: ${type}`);
  }
};

export const exportElements = (elements: Element[]) => {
  return {
    elements: elements.map(({ type, properties }) => ({ type, properties })),
  };
};
