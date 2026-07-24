export interface CaseStudy {
  slug: string;
  title: string;
  summary: string;
  category: string;
  stat: { value: string; label: string };
  challenge: string;
  approach: string;
  outcome: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "manual-invoicing-automation",
    title: "Cutting invoice processing time by two-thirds",
    summary:
      "A growing services business was drowning in manual invoice entry. We automated the workflow end to end.",
    category: "Process Automation",
    stat: { value: "65%", label: "reduction in invoice processing time" },
    challenge:
      "The finance team was manually re-keying invoice data from emails and PDFs into their accounting system, leading to delays and frequent data-entry errors.",
    approach:
      "We built an automated intake pipeline that extracts invoice data, validates it against purchase orders, and syncs it directly into the client's accounting software, with exceptions routed to a human for review.",
    outcome:
      "Processing time dropped from days to hours, error rates fell sharply, and the finance team redirected the time saved toward higher-value work.",
  },
  {
    slug: "legacy-crm-modernization",
    title: "Migrating a decade-old CRM to the cloud",
    summary:
      "An aging, on-premise CRM was becoming a liability. We modernized it without disrupting day-to-day sales operations.",
    category: "Cloud Migration",
    stat: { value: "99.9%", label: "uptime since migration" },
    challenge:
      "The client's CRM ran on unsupported on-premise servers, creating security risk and making it difficult to support a growing remote sales team.",
    approach:
      "We planned a phased migration to a modern cloud platform, rebuilding critical integrations and running the old and new systems in parallel until every workflow was validated.",
    outcome:
      "The sales team gained secure, reliable remote access with no disruption to active deals, and the client eliminated the cost and risk of maintaining physical servers.",
  },
  {
    slug: "custom-inventory-system",
    title: "Replacing spreadsheets with a custom inventory system",
    summary:
      "A multi-location retailer was tracking inventory across dozens of spreadsheets. We built them a single source of truth.",
    category: "Custom Application Development",
    stat: { value: "3x", label: "faster inventory reconciliation" },
    challenge:
      "Inventory data lived in disconnected spreadsheets across locations, making stock levels unreliable and reconciliation a monthly headache.",
    approach:
      "We designed and built a custom inventory management application tailored to the client's multi-location workflow, with real-time syncing and role-based access for each location.",
    outcome:
      "The client now reconciles inventory in a fraction of the time, with accurate, real-time visibility across every location.",
  },
];
