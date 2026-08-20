import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, ExternalLink, ArrowRight } from "lucide-react";

interface EventItem {
  id: string;
  category: "upcoming" | "ongoing" | "milestones";
  tag: string;
  title: string;
  date: string;
  description: string;
  image: string;
  channelName: string;
  channelUrl: string;
}

const EVENTS_DATA: EventItem[] = [
  // 1. Recurring Community & Awareness Events
  {
    id: "e1",
    category: "upcoming",
    tag: "Project Udaan / Vikas",
    title: "International Day of Women and Girls in Science",
    date: "February 11, 2025",
    description:
      "Digital workshops and community talks highlighting the importance of STEM education, digital literacy, and skill-building for young girls.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=80",
    channelName: "Instagram (@inamigos)",
    channelUrl: "https://www.instagram.com/inamigos/",
  },
  {
    id: "e2",
    category: "upcoming",
    tag: "Project Seva & Bachpanshala",
    title: "International Day of Happiness Community Outreach",
    date: "March 20, 2025",
    description:
      "Community interaction drive distributing sweets, nutritious meals, and hosting creative storytelling and interactive game sessions for children in slum clusters.",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=700&q=80",
    channelName: "Official Events Portal",
    channelUrl: "https://inamigosfoundation.org.in/events",
  },
  {
    id: "e3",
    category: "upcoming",
    tag: "Project Prakriti",
    title: "World Water Day & Green Action Campaign",
    date: "March 22, 2025",
    description:
      'Clean water awareness sessions, local cleanliness drives, and community discussions on water conservation under the national "LiFE" (Lifestyle for Environment) framework.',
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=700&q=80",
    channelName: "Facebook Official",
    channelUrl: "https://www.facebook.com/InAmigos",
  },

  // 2. Ongoing Field Activations & Project-Specific Drives
  {
    id: "e4",
    category: "ongoing",
    tag: "Project Bachpanshala",
    title: "Bachpanshala: Learning Beyond Classrooms",
    date: "Monthly / Ongoing Weekend Sessions",
    description:
      "On-ground informal schools providing foundational literacy, distribution of stationery kits, moral education, and student mentoring for underprivileged children.",
    image:
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=700&q=80",
    channelName: "Instagram (@inamigos)",
    channelUrl: "https://www.instagram.com/inamigos/",
  },
  {
    id: "e5",
    category: "ongoing",
    tag: "Project Seva",
    title: "Winter Blanket & Hot Food Relief Drives",
    date: "Seasonal & Weekly Distributions",
    description:
      "Volunteer distribution of warm blankets, winter clothes, and daily hot meals to homeless individuals and destitute families across Bilaspur and neighboring districts.",
    image:
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=700&q=80",
    channelName: "LinkedIn Official",
    channelUrl: "https://www.linkedin.com/company/inamigos-foundation/posts/",
  },
  {
    id: "e6",
    category: "ongoing",
    tag: "Project Prakriti",
    title: "Mass Plantation & Environmental Clean-Up",
    date: "Monsoon Season & June 5",
    description:
      "Mass tree sapling plantations across urban and rural parts of Chhattisgarh, achieving 20,000+ trees planted to restore local green cover.",
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=700&q=80",
    channelName: "Facebook Official",
    channelUrl: "https://www.facebook.com/InAmigos",
  },
  {
    id: "e7",
    category: "ongoing",
    tag: "Project Jeev",
    title: "Summer Water Bowl & Stray Animal Feeding",
    date: "Peak Summer & Daily Feeding",
    description:
      "Daily feeding rounds for over 50+ stray animals, emergency medical rescues, and placing clean water bowls across neighborhood streets.",
    image:
      "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=700&q=80",
    channelName: "Instagram (@inamigos)",
    channelUrl: "https://www.instagram.com/inamigos/",
  },
  {
    id: "e8",
    category: "ongoing",
    tag: "Project Vikas",
    title: "Tech For Change & Digital Literacy Cohorts",
    date: "Continuous 1–3 Month Cycles",
    description:
      "Training thousands of student interns nationwide in social work, field research, content creation, AI tools, and coding for rural education camps.",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=700&q=80",
    channelName: "LinkedIn Official",
    channelUrl: "https://www.linkedin.com/company/inamigos-foundation/posts/",
  },

  // 3. Foundation Milestone & Disaster Relief Campaigns
  {
    id: "e9",
    category: "milestones",
    tag: "Historical Milestone",
    title: "Foundation Inauguration & Founding Contribution",
    date: "September 23, 2020",
    description:
      "Official incorporation as a Section 8 non-profit entity. Contributed ₹30,000 to the PM CARES Fund during its founding period to support pandemic relief.",
    image:
      "https://images.unsplash.com/photo-1532629345422-7515f3d16bb9?auto=format&fit=crop&w=700&q=80",
    channelName: "LinkedIn Channel",
    channelUrl: "https://www.linkedin.com/company/inamigos-foundation/posts/",
  },
  {
    id: "e10",
    category: "milestones",
    tag: "Disaster Relief",
    title: "Nationwide COVID-19 Relief & Sanitation Drive",
    date: "2020 – 2021",
    description:
      "Ground-level emergency relief distributing meals to over 1,500+ individuals, distributing sanitizers/masks in rural Chhattisgarh, and supplying books/stationery in Kolkata.",
    image:
      "https://images.unsplash.com/photo-1584483766114-2cea6facdf57?auto=format&fit=crop&w=700&q=80",
    channelName: "Facebook Channel",
    channelUrl: "https://www.facebook.com/InAmigos",
  },
];

const CATEGORY_TABS = [
  { id: "all", label: "All Initiatives" },
  { id: "upcoming", label: "Upcoming & Awareness" },
  { id: "ongoing", label: "Ongoing Field Drives" },
  { id: "milestones", label: "Milestones & Relief" },
] as const;

type CategoryFilter = "all" | "upcoming" | "ongoing" | "milestones";

export default function Events() {
  const [activeTab, setActiveTab] = useState<CategoryFilter>("all");

  const filteredEvents =
    activeTab === "all"
      ? EVENTS_DATA
      : EVENTS_DATA.filter((item) => item.category === activeTab);

  return (
    <section
      id="events"
      className="py-16 sm:py-24 bg-[#f8f9fa] border-t border-[#edeeef] font-['Manrope']"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#191c1d] tracking-tight leading-tight mb-4">
            Our Events & Campaigns
          </h2>

          <p className="text-sm sm:text-base text-[#3c4a42] leading-[26px]">
            From nationwide relief operations and recurring awareness drives to
            daily community feeding and green action across India.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {CATEGORY_TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as CategoryFilter)}
                className={`px-5 py-2.5 rounded-[8px] text-xs sm:text-sm font-bold uppercase tracking-[0.05em] transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#006c49] text-white shadow-xs"
                    : "bg-white text-[#3c4a42] border border-[#e1e3e4] hover:border-[#006c49] hover:text-[#006c49]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Events Grid (3 Columns Desktop, 2 Columns Tablet, 1 Column Mobile) */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredEvents.map((event) => (
              <motion.article
                key={event.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                className="bg-[#ffffff] rounded-[16px] overflow-hidden border border-[#e1e3e4] shadow-[0px_4px_20px_rgba(0,0,0,0.04)] hover:border-[#006c49] transition-all duration-300 flex flex-col group"
              >
                {/* Event Image with Badge */}
                <div className="aspect-[16/10] w-full overflow-hidden bg-[#f3f4f5] relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-[6px] bg-[#006c49] text-white text-[11px] font-bold uppercase tracking-[0.05em] shadow-xs">
                    {event.tag}
                  </div>
                </div>

                {/* Event Content */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    {/* Date / Frequency */}
                    <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#006c49] tracking-[0.05em] uppercase">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{event.date}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-[#191c1d] group-hover:text-[#006c49] transition-colors leading-snug">
                      {event.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-[#3c4a42] leading-[24px]">
                      {event.description}
                    </p>
                  </div>

                  {/* Channel Link & Learn More CTA */}
                  <div className="pt-3 border-t border-[#edeeef] flex items-center justify-between gap-3 text-xs">
                    <a
                      href={event.channelUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-semibold text-[#006c49] hover:underline"
                    >
                      <span>{event.channelName}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>

                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1 font-bold text-[#191c1d] group-hover:text-[#006c49] transition-colors uppercase tracking-[0.05em]"
                    >
                      <span>Participate</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
