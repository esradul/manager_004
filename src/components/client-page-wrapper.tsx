"use client";

import { useSearchParams } from 'next/navigation';
import { ReactNode, Suspense } from 'react';

interface ClientPageWrapperProps {
  children: ReactNode;
}

/**
 * This component serves as a wrapper for client pages to properly handle searchParams
 * It resolves the "Expected workStore to exist when handling searchParams in a client Page" error
 * by ensuring the searchParams are properly initialized before rendering the client page
 * and wrapping the component with Suspense to avoid CSR bailout
 */
export function ClientPageWrapper({ children }: ClientPageWrapperProps) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ClientPageContent>{children}</ClientPageContent>
    </Suspense>
  );
}

function ClientPageContent({ children }: ClientPageWrapperProps) {
  // Initialize searchParams to ensure workStore exists
  useSearchParams();
  
  return <>{children}</>;
}