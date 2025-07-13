"use client";

import { ClientPageWrapper } from '@/components/client-page-wrapper';

export default function EscalationPage() {
  return (
    <ClientPageWrapper>
      <EscalationContent />
    </ClientPageWrapper>
  );
}

import { ContentWorkflow } from '@/components/workflows/content-workflow';
import { EscalationCard } from '@/components/workflows/escalation-card';

function EscalationContent() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Escalation</h1>
      <ContentWorkflow
        filter={{ escalation: true, Escalated_replied: false, removed: false }}
        noItemsMessage="There are no escalated items."
        renderItem={(item: any, refresh) => <EscalationCard item={item} onAction={refresh} />}
      />
    </div>
  );
}
