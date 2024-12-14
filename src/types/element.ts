export type FontWeight = 'bold' | 'semibold' | 'medium' | 'thin';

export type BaseElement = {
  id: string;
  type: ElementType;
  properties: ElemnentProperties;
};

export type ElementType = 'heading' | 'paragraph' | 'image' | 'video';

export type TypographyProperties = {
  fontFamily: string;
  fontWeight: FontWeight;
  text: string;
};

export type MediaProperties = {
  src: string;
  width: number;
  height: number;
};

export type ElemnentProperties = TypographyProperties & MediaProperties;

export type Element = BaseElement;
