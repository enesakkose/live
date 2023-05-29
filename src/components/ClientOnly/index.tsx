import React from 'react'

function ClientOnly({
  children,
  Loading,
  ...delegated
}: {
  children: React.ReactNode
  Loading?: React.FC
}) {
  const [hasMounted, setHasMounted] = React.useState(false)
  React.useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return Loading ? <Loading /> : null
  }

  return <div {...delegated}>{children}</div>
}

export default ClientOnly
