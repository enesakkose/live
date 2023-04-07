import React, { ReactElement } from 'react'


function ClientOnly({ children, A, ...delegated }: {children: React.ReactNode, A: React.FC}) {
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return <A/>;
  }
  return (
    <div {...delegated}>
      {children}
    </div>
  );
}

export default ClientOnly