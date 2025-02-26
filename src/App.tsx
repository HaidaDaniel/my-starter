import ThemeSwitcher from '@/components/ThemeSwitcher';
import ErrorButton from '@/components/ErrorButton';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background text-foreground">
      <h1 className="text-2xl font-bold">ShadCN + Redux Theme Switcher</h1>
      <ThemeSwitcher />
      <ErrorButton />
    </div>
  );
};

export default App;

// TODO:
// error boundary ,
// react querry | custom reactHooks
// theme switcher,
// root provider ?
// husky,
// github actions  (linter check, pretier check, coverage,) docker адаптация wps ? ,
// чекнуть финальное приложение ulbi tv
