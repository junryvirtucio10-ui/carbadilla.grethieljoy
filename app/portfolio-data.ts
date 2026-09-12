export type Project = {
  slug: string;
  title: string;
  role: string;
  description: string;
  image: string;
  thumbnail?: string;
  alt: string;
  caption: string;
  tags: string[];
  category: string;
  url?: string;
  note?: string;
};

export function getProjectThumbnail(project: Project) {
  const src = project.thumbnail ?? project.image;
  const mobileSrc = src.startsWith("/projects/thumbnails/")
    ? src.replace("/projects/thumbnails/", "/projects/thumbnails/mobile/")
    : src;
  return {
    src,
    srcSet: mobileSrc === src ? undefined : `${mobileSrc} 400w, ${src} 800w`,
  };
}

export const projects: Project[] = [
  {
    slug: "zoe-wellness", title: "Zoë Wellness", category: "Health & wellness",
    role: "Website design & development",
    description: "A wellness website bringing services, programmes, client stories, and locations together with clear paths to book or get in touch.",
    image: "/projects/zoe-wellness.webp", thumbnail: "/projects/thumbnails/zoe-wellness.webp",
    alt: "Full-page Zoë Wellness website screenshot", caption: "Wellness · Website",
    tags: ["Web development", "Service pages", "Booking journeys"], url: "https://www.zoewellness.com/",
  },
  {
    slug: "innovamed-industries", title: "Innovamed Industries", category: "E-commerce",
    role: "Website design & development",
    description: "A medical supplies storefront organised around product categories, featured brands, promotional collections, and ordering guidance.",
    image: "/projects/innovamed-industries.webp", thumbnail: "/projects/thumbnails/innovamed-industries.webp",
    alt: "Full-page Innovamed Industries storefront screenshot", caption: "Medical supplies · E-commerce",
    tags: ["E-commerce", "Product catalogue", "Web development"], url: "https://innovamedindustries.com/",
  },
  {
    slug: "globall-workforce", title: "Globall Workforce", category: "Business & services",
    role: "Website design & development",
    description: "An international recruitment website presenting industry specialisms, destinations, current openings, and candidate registration.",
    image: "/projects/globall-workforce.webp", thumbnail: "/projects/thumbnails/globall-workforce.webp",
    alt: "Full-page Globall Workforce recruitment website screenshot", caption: "Recruitment · Website",
    tags: ["Web development", "Recruitment", "Content structure"], url: "https://globallworkforce.com/",
  },
  {
    slug: "premier-island-jobs", title: "Premier Island Jobs", category: "Business & services",
    role: "Website design & development",
    description: "A recruitment platform connecting employers and virtual workers through job search, talent categories, and clear registration journeys.",
    image: "/projects/premier-island-jobs.webp", thumbnail: "/projects/thumbnails/premier-island-jobs.webp",
    alt: "Full-page Premier Island Jobs website screenshot", caption: "Recruitment · Job platform",
    tags: ["Web development", "Job platform", "User journeys"], url: "https://premierislandjobs.com/",
  },
  {
    slug: "flyover-travel", title: "Flyover Travel", category: "Travel & hospitality",
    role: "Website design & development",
    description: "A travel agency website pairing destination imagery with trip planning services, advisor profiles, travel resources, and enquiry paths.",
    image: "/projects/flyover-travel.webp", thumbnail: "/projects/thumbnails/flyover-travel.webp",
    alt: "Full-page Flyover Travel agency website screenshot", caption: "Travel · Website",
    tags: ["Web development", "Travel", "Content design"], url: "https://flyovertravel.com/",
  },
  {
    slug: "perfect-foto", title: "Perfect Foto", category: "E-commerce",
    role: "Website design & development",
    description: "A personalised gifts storefront showcasing custom apparel, photo keepsakes, product collections, and customer reviews.",
    image: "/projects/perfect-foto.webp", thumbnail: "/projects/thumbnails/perfect-foto.webp",
    alt: "Full-page Perfect Foto custom gifts storefront screenshot", caption: "Personalised gifts · E-commerce",
    tags: ["E-commerce", "Product collections", "Web development"], url: "https://www.perfectfotoinc.com/",
  },
  {
    slug: "davis-global-group", title: "Davis Global Group", category: "Business & services",
    role: "Website design & development",
    description: "A corporate website introducing a family of brands across media, wellness, and leadership through a cohesive black-and-gold identity.",
    image: "/projects/davis-global-group.webp", thumbnail: "/projects/thumbnails/davis-global-group.webp",
    alt: "Full-page Davis Global Ventures Group website screenshot", caption: "Corporate · Website",
    tags: ["Web development", "Brand storytelling", "Corporate"], url: "https://davisglobalgroup.com/",
  },
  {
    slug: "amrocor", title: "Amrocor", category: "E-commerce",
    role: "Website design & development",
    description: "An industrial supplies storefront with equipment categories, product listings, and quote enquiries for commercial and government customers.",
    image: "/projects/amrocor.webp", thumbnail: "/projects/thumbnails/amrocor.webp",
    alt: "Full-page Amrocor industrial supplies storefront screenshot", caption: "Industrial supplies · E-commerce",
    tags: ["E-commerce", "Product catalogue", "Web development"], url: "https://amrocor.com/",
  },
  {
    slug: "buddy-bright", title: "Buddy Bright", category: "Business & services",
    role: "Website design & development",
    description: "A roof cleaning and pressure washing website that brings services, customer stories, FAQs, and quote requests into one approachable experience.",
    image: "/projects/buddy-bright.webp", thumbnail: "/projects/thumbnails/buddy-bright.webp",
    alt: "Full-page Buddy Bright roof cleaning website screenshot", caption: "Home services · Website",
    tags: ["Web development", "Service pages", "Enquiry journeys"], url: "https://callbuddybright.com/",
  },
  {
    slug: "sail-with-seth", title: "Sail with Seth", category: "Travel & hospitality",
    role: "Website design & development",
    description: "A boutique cruise travel website built around shared experiences, destination photography, the team, and future cruise enquiries.",
    image: "/projects/sail-with-seth.webp", thumbnail: "/projects/thumbnails/sail-with-seth.webp",
    alt: "Full-page Sail with Seth travel website screenshot", caption: "Cruise travel · Website",
    tags: ["Web development", "Travel", "Visual storytelling"], url: "https://sailwithseth.com/",
  },
  {
    slug: "thriving-gutters", title: "Thriving Gutters", category: "Business & services",
    role: "Website project",
    description: "A gutter services project. The supplied capture shows the domain’s current parked page; the original project design is not shown in this preview.",
    image: "/projects/thriving-gutters.webp", thumbnail: "/projects/thumbnails/thriving-gutters.webp",
    alt: "Supplied Thriving Gutters domain screenshot displaying a parked-domain notice", caption: "Home services · Domain capture",
    tags: ["Home services", "Website"], url: "https://thriving-gutters.com/",
    note: "The supplied screenshot shows a parked domain, not the original project design.",
  },
  {
    slug: "oyins-international", title: "Oyins International", category: "Travel & hospitality",
    role: "Website design & development",
    description: "A hospitality website showcasing rooms, suites, amenities, and event spaces with a visual route from discovery to booking.",
    image: "/projects/oyins-international.webp", thumbnail: "/projects/thumbnails/oyins-international.webp",
    alt: "Full-page Oyins International resort website screenshot", caption: "Hospitality · Website",
    tags: ["Web development", "Hospitality", "Booking journeys"], url: "https://oyinsinternational.com/",
  },
  {
    slug: "orbit-building", title: "Orbit Building & Remodeling", category: "Business & services",
    role: "Website design & development",
    description: "A residential renovation website with service showcases, project photography, testimonials, detailed FAQs, and consultation requests.",
    image: "/projects/orbit-building.webp", thumbnail: "/projects/thumbnails/orbit-building.webp",
    alt: "Full-page Orbit Building and Remodeling website screenshot", caption: "Construction · Website",
    tags: ["Web development", "Service pages", "Enquiry journeys"], url: "https://orbitbuildingandremodeling.com/",
  },
  {
    slug: "classe-credit", title: "Classe Credit Consulting", category: "Business & services",
    role: "Website design & development",
    description: "A credit consulting website featuring service information, client stories, educational resources, and consultation calls to action.",
    image: "/projects/classe-credit.webp", thumbnail: "/projects/thumbnails/classe-credit.webp",
    alt: "Full-page Classe Credit Consulting website screenshot", caption: "Consulting · Website",
    tags: ["Web development", "Content design", "Consulting"], url: "https://www.classecreditconsulting.com/",
  },
  {
    slug: "alliance-care", title: "Alliance Care Medical", category: "Health & wellness",
    role: "Website design & development",
    description: "A medical equipment website presenting rental categories, company information, and support for patients and caregivers.",
    image: "/projects/alliance-care.webp", thumbnail: "/projects/thumbnails/alliance-care.webp",
    alt: "Full-page Alliance Care Medical Equipment website screenshot", caption: "Medical equipment · Website",
    tags: ["Web development", "Equipment catalogue", "Healthcare"], url: "https://alliancecaremedical.com/",
  },
  {
    slug: "assistmynt", title: "Assistmynt", category: "Business & services",
    role: "Website design & development",
    description: "A virtual assistant services website presenting the matching process, service benefits, client testimonials, and a contact form.",
    image: "/projects/assistmynt.webp", thumbnail: "/projects/thumbnails/assistmynt.webp",
    alt: "Full-page Assistmynt virtual assistant services website screenshot", caption: "Virtual assistance · Website",
    tags: ["Web development", "Service pages", "Content design"], url: "https://assistmynt.com/",
  },
  {
    slug: "newsom-eye", title: "Newsom Eye", category: "Health & wellness",
    role: "Website design & development",
    description: "An eye care website organising treatment information, physician profiles, surgery centres, patient resources, and appointment paths.",
    image: "/projects/newsom-eye.webp", thumbnail: "/projects/thumbnails/newsom-eye.webp",
    alt: "Full-page Newsom Eye healthcare website screenshot", caption: "Eye care · Website",
    tags: ["Web development", "Healthcare", "Content structure"], url: "https://newsomeye.com/",
  },
  {
    slug: "direct-construction",
    category: "Business & services",
    thumbnail: "/projects/thumbnails/direct-construction.webp",
    title: "Direct Construction Website",
    role: "WordPress design & build",
    description:
      "A service-focused WordPress website for a Cleveland contractor, combining project galleries, trust signals, testimonials, and clear enquiry paths.",
    image: "/projects/direct-construction.webp",
    alt: "Full-page screenshot of the Direct Construction, Inc. WordPress website",
    caption: "WordPress website · Construction",
    tags: ["WordPress", "Elementor", "Responsive design"],
  },
  {
    slug: "tradie-growth",
    category: "Business & services",
    thumbnail: "/projects/thumbnails/tradie-growth.webp",
    title: "Tradie Growth Website",
    role: "Website design & content",
    description:
      "A bold sales-focused website for a UK trades business community, using strong calls to action, social proof, and conversion-led landing-page content.",
    image: "/projects/tradie-growth.webp",
    alt: "Full-page screenshot of the Tradie growth website for UK trades businesses",
    caption: "Website design · Conversion content",
    tags: ["Landing pages", "Content", "Conversion design"],
  },
  {
    slug: "life-regeneration-church",
    category: "Digital content",
    thumbnail: "/projects/thumbnails/life-regeneration-church.webp",
    title: "Life Regeneration Church",
    role: "Digital content",
    description:
      "Social graphics, campaign artwork, video reels, captions, and page content created for church updates, programmes, and events.",
    image: "/projects/life-regeneration-church.webp",
    alt: "Life Regeneration Church Facebook page featuring Accelerated Favor campaign artwork",
    caption: "Social media · Campaign creative",
    tags: ["Graphics", "Video reels", "Page management"],
  },
];

export const experience = [
  { company: "Tradie — formerly Pro Tradesmen Club", period: "Feb 2025 — Feb 2026", role: "Website Designer, Graphics Designer & Digital Marketing Assistant" },
  { company: "Bizwise Company", period: "Oct 2023 — Jan 2025", role: "Website Designer, Graphics Designer & Content Creator" },
  { company: "Alpha Key Digital", period: "Mar 2023 — Sep 2023", role: "Website Designer, Graphics Designer & Digital Marketing Assistant" },
  { company: "Life Regeneration Church", period: "Jun 2009 — Present", role: "WordPress Developer & Graphics Designer" },
  { company: "Morrow Growth Agency", period: "Jun 2023 — Jul 2023", role: "Graphics Designer & Digital Marketing Assistant" },
  { company: "Exoskill", period: "Jul 2020 — Oct 2022", role: "WordPress Developer & Graphics Designer" },
  { company: "Skillsource", period: "May 2019 — Jun 2020", role: "WordPress Developer, Graphics Designer & Social Media Assistant" },
];

export const skills = [
  "WordPress", "Elementor", "Canva", "Digital marketing", "Website maintenance",
  "Website design", "Content management", "Adobe Photoshop", "Graphic design",
  "Figma", "Social media management", "Adobe Lightroom", "Responsive design",
  "Team collaboration", "UX/UI design", "Attention to detail", "Communication",
];

export const tools = [
  { name: "WordPress", logo: "/toolkit-logos/wordpress.png" },
  { name: "Elementor", logo: "/toolkit-logos/elementor.png" },
  { name: "Divi", logo: "/toolkit-logos/divi.png" },
  { name: "Adobe Lightroom", logo: "/toolkit-logos/adobe-lightroom.png" },
  { name: "Figma", logo: "/toolkit-logos/figma.png" },
  { name: "Canva", logo: "/toolkit-logos/canva.png" },
];
