import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../../store/slices/themeSlice';
import { selectTheme } from '../../store/slices/themeSlice';

function ThemeToggle() {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className='flex items-center justify-center w-8 h-8 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors'
      aria-label={
        theme.isDark === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'
      }
    >
      <span className='material-icons text-white text-lg'>
        {theme.isDark === 'dark' ? 'light_mode' : 'dark_mode'}
      </span>
    </button>
  );
}

export default ThemeToggle;
