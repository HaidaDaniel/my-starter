import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '@/store/themeSlice';
import { Button } from '@/components/ui/button';
import { RootState } from '@/store';

const ThemeSwitcher = () => {
  const theme = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();

  return (
    <Button onClick={() => dispatch(toggleTheme())}>
      {theme === 'light' ? '🌞 Light Mode' : '🌙 Dark Mode'}
    </Button>
  );
};

export default ThemeSwitcher;
