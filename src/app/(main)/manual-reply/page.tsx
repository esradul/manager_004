"use client";

import { ContentWorkflow } from '@/components/workflows/content-workflow';
import { ManualReplyCard } from '@/components/workflows/manual-reply-card';
import { ClientPageWrapper } from '@/components/client-page-wrapper';

export default function ManualReplyPage() {
  return (
    <ClientPageWrapper>
      <ManualReplyContent />
    </ClientPageWrapper>
  );
}

function ManualReplyContent() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Manual Reply</h1>
      <ContentWorkflow
        filter={{ permission: 'Manual Handle', replied: false, removed: false }}
        noItemsMessage="No items are awaiting manual reply."
        renderItem={(item: any, refresh) => <ManualReplyCard item={item} onAction={refresh} />}
      />
    </div>
  );
}
