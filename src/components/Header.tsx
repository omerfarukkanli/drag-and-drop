import { House } from 'lucide-react';
import { Label } from './ui/label';
import { Button } from './ui/button';

const Header = () => {
  return (
    <header className='h-10 flex justify-between px-3 border-b items-center'>
      <Label className='flex justify-center items-center gap-3'>
        <House className='h-3 w-3' />
        <h1 className='text-xs'>Home</h1>
      </Label>
      <Button className='h-5 rounded-full text-xs' variant='default'>
        Export
      </Button>
    </header>
  );
};
export default Header;
