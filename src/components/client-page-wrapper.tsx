"use client";

import { useSearchParams } from 'next/navigation';
import { ReactNode } from 'react';

interface ClientPageWrapperProps {
  children: ReactNode;
}

/**
 * This component serves as a wrapper for client pages to properly handle searchParams
 * It resolves the "Expected workStore to exist when handling searchParams in a client Page" error
 * by ensuring the searchParams are properly initialized before rendering the client page
 */
export function ClientPageWrapper({ children }: ClientPageWrapperProps) {
  // Initialize searchParams to ensure workStore exists
  useSearchParams();
  
  return <>{children}</>;
}