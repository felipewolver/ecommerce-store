interface ContainerProps {
    children: React.ReactNode;
  }
  
  const Container: React.FC<ContainerProps> = ({
    children
  }) => {
    return (   // im container q tem um max-w-7xl q equivale a 1280px 
      <div className="mx-auto max-w-7xl">
        {children}
      </div>
     );
  };
  
  export default Container;