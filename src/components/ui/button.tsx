// src/components/ui/button.tsx
const Button = ({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <button className={`px-4 py-2 rounded-lg ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export { Button };
