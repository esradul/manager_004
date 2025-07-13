"use client";

import { ClientPageWrapper } from '@/components/client-page-wrapper';

export default function ImportantPage() {
  return (
    <ClientPageWrapper>
      <ImportantContent />
    </ClientPageWrapper>
  );
}

import { ContentWorkflow } from '@/components/workflows/content-workflow';
import { ImportantCard } from '@/components/workflows/important-card';

function ImportantContent() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Important</h1>
      <ContentWorkflow
        filter={{ important: true, Important_replied: false, removed: false }}
        noItemsMessage="There are no important items."
        renderItem={(item: any, refresh) => <ImportantCard item={item} onAction={refresh} />}
      />
    </div>
  );
}
