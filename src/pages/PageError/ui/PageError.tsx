import { Button } from '@/components/ui/button';

export const PageError = () => {
  const reloadPage = () => {
    location.reload();
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-background text-foreground space-y-4">
      <h1 className="text-xl font-bold text-red-500">Something goes wrong... 😢</h1>
      <Button variant="destructive" onClick={reloadPage}>
        Reload page
      </Button>
    </div>
  );
};
