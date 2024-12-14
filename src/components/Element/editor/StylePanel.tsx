import { Element } from '@/types/element';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface StylePanelProps {
  selectedElement: Element | null;
  onUpdateElement: (element: Element) => void;
}

const StylePanel = ({ selectedElement, onUpdateElement }: StylePanelProps) => {
  const handleTextChange = (value: string) => {
    if (
      selectedElement?.type === 'heading' ||
      selectedElement?.type === 'paragraph'
    ) {
      onUpdateElement({
        ...selectedElement,
        properties: {
          ...selectedElement.properties,
          text: value,
        },
      });
    }
  };

  const handleFontFamilyChange = (value: string) => {
    if (
      selectedElement?.type === 'heading' ||
      selectedElement?.type === 'paragraph'
    ) {
      onUpdateElement({
        ...selectedElement,
        properties: {
          ...selectedElement.properties,
          fontFamily: value,
        },
      });
    }
  };

  const handleFontWeightChange = (value: string) => {
    if (
      selectedElement?.type === 'heading' ||
      selectedElement?.type === 'paragraph'
    ) {
      onUpdateElement({
        ...selectedElement,
        properties: {
          ...selectedElement.properties,
          fontWeight: value as 'bold' | 'semibold' | 'medium' | 'thin',
        },
      });
    }
  };

  return (
    <div className='w-1/4 bg-gray-100 pt-4 border-r'>
      <div className='py-2 border-b'>
        <Label className='border-[#4F46E5] border-b-4 py-2 px-4'>Style</Label>
      </div>

      <div className='flex-1 overflow-y-auto'>
        {selectedElement &&
          (selectedElement.type === 'heading' ||
            selectedElement.type === 'paragraph') && (
            <div>
              <div className='p-4 border-b pb-10'>
                <h2 className='text-lg font-semibold pb-10'>Text</h2>
                <div className='space-y-2 flex items-center justify-center gap-3'>
                  <Label className='text-xs'>Text</Label>
                  <Input
                    value={selectedElement.properties.text}
                    onChange={(e) => handleTextChange(e.target.value)}
                    className='h-8'
                  />
                </div>
              </div>

              <div className='p-4'>
                <h2 className='text-lg font-semibold pb-10'>Font</h2>
                <div className='space-y-2 mb-4 flex  items-center justify-between'>
                  <h2 className='text-xs'>Font Family</h2>
                  <Select
                    value={selectedElement.properties.fontFamily}
                    onValueChange={handleFontFamilyChange}
                  >
                    <SelectTrigger className='h-8 w-3/4'>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='Arial'>Arial</SelectItem>
                      <SelectItem value='Helvetica'>Helvetica</SelectItem>
                      <SelectItem value='Times New Roman'>
                        Times New Roman
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className='space-y-2 mb-4 flex  items-center justify-between'>
                  <h2 className='text-xs'>Font Weight</h2>
                  <Select
                    value={selectedElement.properties.fontWeight}
                    onValueChange={handleFontWeightChange}
                  >
                    <SelectTrigger className='h-8 w-3/4'>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='thin'>Thin</SelectItem>
                      <SelectItem value='medium'>Medium</SelectItem>
                      <SelectItem value='semibold'>Semibold</SelectItem>
                      <SelectItem value='bold'>Bold</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          )}

        {selectedElement &&
          (selectedElement.type === 'image' ||
            selectedElement.type === 'video') && (
            <div className='p-4 space-y-2 flex flex-col gap-5 mt-10'>
              <div className='flex items-center justify-between'>
                <Label className='text-xs'>Source URL</Label>
                <Input
                  value={selectedElement.properties.src}
                  onChange={(e) =>
                    onUpdateElement({
                      ...selectedElement,
                      properties: {
                        ...selectedElement.properties,
                        src: e.target.value,
                      },
                    })
                  }
                  className='h-8 w-3/4'
                />
              </div>
              <div className='flex items-center gap-2 justify-between'>
                <Label className='text-xs'>Width</Label>
                <Input
                  type='number'
                  min='0'
                  value={selectedElement.properties.width || ''}
                  onChange={(e) => {
                    const value = e.target.value;
                    const parsedValue = value === '' ? 0 : parseInt(value);

                    onUpdateElement({
                      ...selectedElement,
                      properties: {
                        ...selectedElement.properties,
                        width: isNaN(parsedValue) ? 0 : parsedValue,
                      },
                    });
                  }}
                  className='h-8 w-3/4'
                />
              </div>
              <div className='flex items-center gap-2 justify-between'>
                <Label className='text-xs'>Height</Label>
                <Input
                  type='number'
                  min='0'
                  value={selectedElement.properties.height || ''}
                  onChange={(e) => {
                    const value = e.target.value;
                    const parsedValue = value === '' ? 0 : parseInt(value);

                    onUpdateElement({
                      ...selectedElement,
                      properties: {
                        ...selectedElement.properties,
                        height: isNaN(parsedValue) ? 0 : parsedValue,
                      },
                    });
                  }}
                  className='h-8 w-3/4'
                />
              </div>
            </div>
          )}
      </div>
    </div>
  );
};

export default StylePanel;
