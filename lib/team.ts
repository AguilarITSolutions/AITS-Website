export interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

// Placeholder team data — swap in real names, roles, bios, and headshots
// (public/images/team/) once available. See Section 5 of the revamp plan.
export const team: TeamMember[] = [
  {
    name: "Founder Name",
    role: "Founder & Principal Consultant",
    bio: "Leads client engagements end to end, from initial scoping through delivery, with a background in enterprise IT and software delivery.",
  },
];

export const values = [
  {
    title: "Practical over trendy",
    description:
      "We recommend the solution that fits your business, not the one that's fashionable. Boring, reliable technology often wins.",
  },
  {
    title: "Clear communication",
    description:
      "You'll always know what we're working on, why, and what it means for your business, in plain language.",
  },
  {
    title: "Built to last",
    description:
      "We design systems for the business you're becoming, not just the one you are today, so you don't outgrow what we build.",
  },
];

export const timeline = [
  {
    year: "Year 1",
    title: "Aguilar IT Solutions is founded",
    description:
      "Started with a focus on helping growing businesses modernize the systems and processes holding them back.",
  },
];
