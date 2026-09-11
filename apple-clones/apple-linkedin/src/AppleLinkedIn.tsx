import React, { useState } from "react";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface Post {
  id: number;
  author: string;
  authorSub: string;
  timeAgo: string;
  content: string;
  image?: string;
  imageCaption?: string;
  likes: number;
  comments: number;
  reposts: number;
}

interface Job {
  id: number;
  title: string;
  location: string;
  type: string;
  posted: string;
}

/* ------------------------------------------------------------------ */
/*  Data — sourced from researcher findings                           */
/* ------------------------------------------------------------------ */

const COMPANY = {
  name: "Apple",
  tagline:
    "We're a diverse collective of thinkers and doers, continually reimagining what's possible.",
  industry: "Computers and Electronics Manufacturing",
  headquarters: "Cupertino, California",
  founded: 1976,
  type: "Public Company",
  specialties:
    "Innovative product development, world-class operations, retail, and commitment to the environment",
  website: "apple.com",
  employeeCount: "10,001+",
  employeesOnLinkedIn: "167,933",
  followers: "18.16M",
  openPositions: "36,756",
  about:
    "We're a diverse collective of thinkers and doers, continually reimagining what's possible to help us all do what we love in new ways. And the same innovation that goes into our products also applies to our practices — strengthening our commitment to leave the world better than we found it. This is where your work can make a difference in people's lives. Including your own.",
};

/* Posts reflect Apple's LinkedIn strategy: employer branding, D&I, careers, CSR */
const POSTS: Post[] = [
  {
    id: 1,
    author: "Apple",
    authorSub: "18,160,000 followers",
    timeAgo: "3d",
    content:
      "At Apple, we believe the most innovative work happens when people with different backgrounds and perspectives come together. Meet the team behind our latest accessibility features — engineers, designers, and researchers whose lived experiences shape technology for everyone.",
    image: "diversity",
    imageCaption: "Inclusion & Diversity at Apple",
    likes: 24800,
    comments: 612,
    reposts: 3200,
  },
  {
    id: 2,
    author: "Apple",
    authorSub: "18,160,000 followers",
    timeAgo: "1w",
    content:
      "Your work here will matter. Every day, people around the world rely on what we create together. If you're ready to do your life's best work, explore open roles at apple.com/careers.",
    likes: 18400,
    comments: 445,
    reposts: 2100,
  },
  {
    id: 3,
    author: "Apple",
    authorSub: "18,160,000 followers",
    timeAgo: "2w",
    content:
      "We're now carbon neutral across our entire corporate operations and are working to make every Apple product carbon neutral by 2030. Our commitment to the planet isn't separate from our mission — it's central to it.",
    image: "environment",
    imageCaption: "Apple 2030 — Our plan for carbon neutrality",
    likes: 31200,
    comments: 890,
    reposts: 4600,
  },
];

const FEATURED_JOBS: Job[] = [
  {
    id: 1,
    title: "Machine Learning Engineer",
    location: "Cupertino, CA",
    type: "Full-time",
    posted: "1d ago",
  },
  {
    id: 2,
    title: "Product Designer — Health",
    location: "Cupertino, CA",
    type: "Full-time",
    posted: "3d ago",
  },
  {
    id: 3,
    title: "Software Engineer — Cloud Services",
    location: "Austin, TX",
    type: "Full-time",
    posted: "5d ago",
  },
];

const SIMILAR_COMPANIES = [
  { name: "Google", followers: "34M", initial: "G", color: "bg-blue-50 text-blue-600" },
  { name: "Amazon", followers: "32M", initial: "a", color: "bg-orange-50 text-orange-600" },
  { name: "Microsoft", followers: "22M", initial: "M", color: "bg-green-50 text-green-600" },
  { name: "Meta", followers: "14M", initial: "M", color: "bg-indigo-50 text-indigo-600" },
];

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function formatCount(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
  return String(n);
}

/* ------------------------------------------------------------------ */
/*  Icons                                                              */
/* ------------------------------------------------------------------ */

function AppleLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 21.99 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 21.99C7.79 22.03 6.8 20.68 5.96 19.47C4.25 16.97 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.89C10.1 6.87 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
    </svg>
  );
}

function LinkedInLogo({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Sub-components                                                     */
/* ------------------------------------------------------------------ */

function BannerSection() {
  return (
    <div className="relative">
      {/* Banner — Apple Park inspired dark gradient with subtle warm tones */}
      <div className="h-48 sm:h-56 md:h-64 rounded-t-xl bg-[#1D1D1F] overflow-hidden relative">
        {/* Atmospheric gradient layers mimicking Apple Park at dusk */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1D1D1F] via-[#2D2D30] to-[#1D1D1F]" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-900/10 to-purple-900/10" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1D1D1F] to-transparent" />
        {/* Subtle architectural ring echoing Apple Park */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] rounded-full border border-white/[0.04]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] rounded-full border border-white/[0.03]" />
        {/* Corner text like Apple's pages */}
        <div className="absolute bottom-4 right-6 text-white/20 text-[11px] tracking-widest font-light">
          APPLE PARK &middot; CUPERTINO
        </div>
      </div>

      {/* Logo */}
      <div className="absolute -bottom-14 left-6 sm:left-8">
        <div className="w-[108px] h-[108px] bg-white rounded-xl shadow-lg border border-gray-200/60 flex items-center justify-center">
          <AppleLogo className="w-16 h-16 text-[#1D1D1F]" />
        </div>
      </div>
    </div>
  );
}

function CompanyHeader() {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <div className="pt-[72px] px-6 sm:px-8 pb-5">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div className="space-y-1.5">
          <h1
            className="text-[28px] sm:text-[32px] font-semibold text-[#1D1D1F]"
            style={{ letterSpacing: "-0.003em" }}
          >
            {COMPANY.name}
          </h1>
          <p className="text-[15px] text-[#6E6E73] leading-snug max-w-lg">
            {COMPANY.tagline}
          </p>
          <div className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[13px] text-[#6E6E73] pt-1">
            <span>{COMPANY.industry}</span>
            <span className="text-[#D2D2D7]">&middot;</span>
            <span>{COMPANY.headquarters}</span>
          </div>
          <div className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[13px] text-[#6E6E73]">
            <span className="font-medium text-[#0066CC]">
              {COMPANY.followers} followers
            </span>
            <span className="text-[#D2D2D7]">&middot;</span>
            <span>{COMPANY.employeesOnLinkedIn} employees</span>
          </div>
        </div>

        <div className="flex items-center gap-2.5 shrink-0 pt-1">
          <button
            onClick={() => setIsFollowing(!isFollowing)}
            className={`
              px-5 py-2 rounded-full text-[14px] font-semibold transition-all duration-200
              ${
                isFollowing
                  ? "bg-[#F5F5F7] text-[#1D1D1F] hover:bg-[#E8E8ED]"
                  : "bg-[#0066CC] text-white hover:bg-[#0055B3] shadow-sm"
              }
            `}
          >
            {isFollowing ? "Following" : "+ Follow"}
          </button>
          <button className="px-5 py-2 rounded-full text-[14px] font-semibold border border-[#D2D2D7] text-[#1D1D1F] hover:bg-[#F5F5F7] transition-all duration-200">
            Visit website
          </button>
        </div>
      </div>
    </div>
  );
}

function TabNav() {
  const [active, setActive] = useState("Overview");
  const tabs = ["Overview", "Jobs", "Life", "People"];

  return (
    <div className="border-t border-[#E8E8ED] px-6 sm:px-8">
      <nav className="flex gap-0.5 -mb-px overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`
              px-4 py-3 text-[14px] font-medium whitespace-nowrap transition-colors duration-150
              ${
                active === tab
                  ? "text-[#1D1D1F] border-b-2 border-[#1D1D1F]"
                  : "text-[#6E6E73] hover:text-[#1D1D1F] border-b-2 border-transparent"
              }
            `}
          >
            {tab}
          </button>
        ))}
      </nav>
    </div>
  );
}

function AboutSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="bg-white rounded-xl border border-[#E8E8ED] p-6 sm:p-8">
      <h2
        className="text-[18px] font-semibold text-[#1D1D1F] mb-4"
        style={{ letterSpacing: "-0.003em" }}
      >
        About
      </h2>
      <p className="text-[#1D1D1F] leading-[1.58] text-[15px]">
        {expanded ? COMPANY.about : `${COMPANY.about.slice(0, 200)}...`}
      </p>
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-3 text-[14px] font-medium text-[#0066CC] hover:text-[#0055B3] transition-colors"
      >
        {expanded ? "Show less" : "Show more"}
      </button>

      <div className="mt-6 pt-6 border-t border-[#F5F5F7] grid grid-cols-2 sm:grid-cols-3 gap-y-5 gap-x-8">
        <InfoItem label="Website" value={COMPANY.website} isLink />
        <InfoItem label="Industry" value={COMPANY.industry} />
        <InfoItem label="Headquarters" value={COMPANY.headquarters} />
        <InfoItem label="Founded" value={String(COMPANY.founded)} />
        <InfoItem label="Company size" value={COMPANY.employeeCount} />
        <InfoItem label="Type" value={COMPANY.type} />
      </div>
    </section>
  );
}

function InfoItem({
  label,
  value,
  isLink = false,
}: {
  label: string;
  value: string;
  isLink?: boolean;
}) {
  return (
    <div>
      <dt className="text-[11px] font-semibold text-[#6E6E73] uppercase tracking-wider mb-1">
        {label}
      </dt>
      <dd
        className={`text-[14px] ${
          isLink ? "text-[#0066CC]" : "text-[#1D1D1F]"
        }`}
      >
        {value}
      </dd>
    </div>
  );
}

function FeaturedJobs() {
  return (
    <section className="bg-white rounded-xl border border-[#E8E8ED] p-6 sm:p-8">
      <div className="flex items-center justify-between mb-5">
        <h2
          className="text-[18px] font-semibold text-[#1D1D1F]"
          style={{ letterSpacing: "-0.003em" }}
        >
          Open positions
        </h2>
        <span className="text-[13px] text-[#0066CC] font-medium">
          See all {COMPANY.openPositions} jobs &rsaquo;
        </span>
      </div>
      <div className="space-y-0 divide-y divide-[#F5F5F7]">
        {FEATURED_JOBS.map((job) => (
          <div
            key={job.id}
            className="py-4 first:pt-0 last:pb-0 flex items-start justify-between gap-4 group cursor-pointer"
          >
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 bg-[#F5F5F7] rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                <AppleLogo className="w-7 h-7 text-[#1D1D1F]" />
              </div>
              <div>
                <p className="text-[15px] font-semibold text-[#0066CC] group-hover:underline">
                  {job.title}
                </p>
                <p className="text-[13px] text-[#1D1D1F] mt-0.5">Apple</p>
                <p className="text-[13px] text-[#6E6E73] mt-0.5">
                  {job.location} ({job.type})
                </p>
              </div>
            </div>
            <span className="text-[12px] text-[#6E6E73] shrink-0 mt-1">
              {job.posted}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

function PostCard({ post }: { post: Post }) {
  const [liked, setLiked] = useState(false);

  return (
    <article className="bg-white rounded-xl border border-[#E8E8ED] overflow-hidden">
      {/* Post header */}
      <div className="p-5 sm:p-6 pb-0">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-[#F5F5F7] rounded-lg flex items-center justify-center">
            <AppleLogo className="w-7 h-7 text-[#1D1D1F]" />
          </div>
          <div>
            <p className="text-[14px] font-semibold text-[#1D1D1F]">
              {post.author}
            </p>
            <p className="text-[12px] text-[#6E6E73]">{post.authorSub}</p>
            <p className="text-[12px] text-[#6E6E73]">{post.timeAgo}</p>
          </div>
        </div>

        <p className="text-[15px] text-[#1D1D1F] leading-[1.58]">
          {post.content}
        </p>
      </div>

      {/* Image placeholder */}
      {post.image && (
        <div className="mt-4 bg-[#F5F5F7] h-64 sm:h-80 flex items-center justify-center relative overflow-hidden">
          {/* Gradient atmosphere for the image area */}
          {post.image === "diversity" && (
            <div className="absolute inset-0 bg-gradient-to-br from-[#1D1D1F] via-[#2D2D30] to-[#3D3D40]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-8">
                  <div className="flex justify-center gap-3 mb-5">
                    {["bg-blue-400", "bg-green-400", "bg-yellow-400", "bg-pink-400", "bg-purple-400"].map((c, i) => (
                      <div key={i} className={`w-10 h-10 ${c} rounded-full opacity-80`} />
                    ))}
                  </div>
                  <p className="text-white/90 text-[15px] font-medium">
                    Inclusion &amp; Diversity at Apple
                  </p>
                  <p className="text-white/50 text-[13px] mt-1">
                    Everyone belongs here.
                  </p>
                </div>
              </div>
            </div>
          )}
          {post.image === "environment" && (
            <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-green-800 to-emerald-900">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-8">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-400/30 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                  </div>
                  <p className="text-white/90 text-[15px] font-medium">
                    Apple 2030
                  </p>
                  <p className="text-white/50 text-[13px] mt-1">
                    Our plan to be carbon neutral by 2030.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Engagement stats */}
      <div className="px-5 sm:px-6 py-2.5 flex items-center justify-between text-[12px] text-[#6E6E73]">
        <span>{formatCount(post.likes + (liked ? 1 : 0))} reactions</span>
        <div className="flex gap-2.5">
          <span>{formatCount(post.comments)} comments</span>
          <span>&middot;</span>
          <span>{formatCount(post.reposts)} reposts</span>
        </div>
      </div>

      {/* Action bar */}
      <div className="px-3 sm:px-4 pb-2 pt-0.5 flex items-center justify-between border-t border-[#F5F5F7]">
        <ActionButton
          icon={
            <svg className="w-5 h-5" fill={liked ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0H22.5a2.25 2.25 0 0 1 0 4.5h-.002c-.026 0-.05.012-.064.033a.264.264 0 0 0-.023.107v.003c.005.058.023.112.023.17 0 .64-.253 1.22-.664 1.648a.266.266 0 0 0-.063.186c.004.063.02.123.02.186a2.25 2.25 0 0 1-.9 1.8.264.264 0 0 0-.098.2 2.24 2.24 0 0 1-.447 1.34.265.265 0 0 0-.042.293 2.244 2.244 0 0 1-1.985 3.263H14.22a4.5 4.5 0 0 1-1.265-.183l-2.21-.632a4.5 4.5 0 0 0-1.265-.183H8.876a1.875 1.875 0 0 1-1.86-1.617l-.652-5.217a1.875 1.875 0 0 1 1.242-2.006l.67-.223a3 3 0 0 0 1.63-1.398l.726-1.29a3.001 3.001 0 0 0 0-2.974Z" />
            </svg>
          }
          label="Like"
          active={liked}
          onClick={() => setLiked(!liked)}
        />
        <ActionButton
          icon={
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
            </svg>
          }
          label="Comment"
        />
        <ActionButton
          icon={
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
            </svg>
          }
          label="Repost"
        />
        <ActionButton
          icon={
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
            </svg>
          }
          label="Send"
        />
      </div>
    </article>
  );
}

function ActionButton({
  icon,
  label,
  active = false,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center gap-1.5 px-3 py-2.5 rounded-lg text-[13px] font-semibold transition-colors duration-150
        ${
          active
            ? "text-[#0066CC]"
            : "text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-[#F5F5F7]"
        }
      `}
    >
      {icon}
      <span className="hidden sm:inline">{label}</span>
    </button>
  );
}

function SidebarCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-xl border border-[#E8E8ED] p-5">
      <h3
        className="text-[15px] font-semibold text-[#1D1D1F] mb-4"
        style={{ letterSpacing: "-0.003em" }}
      >
        {title}
      </h3>
      {children}
    </div>
  );
}

function SimilarPages() {
  return (
    <SidebarCard title="Similar pages">
      <div className="space-y-3.5">
        {SIMILAR_COMPANIES.map((page) => (
          <div key={page.name} className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div
                className={`w-10 h-10 ${page.color} rounded-lg flex items-center justify-center text-[14px] font-bold`}
              >
                {page.initial}
              </div>
              <div>
                <p className="text-[14px] font-semibold text-[#1D1D1F]">
                  {page.name}
                </p>
                <p className="text-[12px] text-[#6E6E73]">
                  {page.followers} followers
                </p>
              </div>
            </div>
            <button className="text-[12px] font-semibold text-[#0066CC] hover:text-[#0055B3] px-3 py-1.5 rounded-full border border-[#0066CC]/30 hover:bg-blue-50 transition-colors">
              + Follow
            </button>
          </div>
        ))}
      </div>
    </SidebarCard>
  );
}

function LifeAtApple() {
  return (
    <SidebarCard title="Life at Apple">
      <div className="space-y-3">
        <div className="rounded-lg bg-[#F5F5F7] p-4">
          <p className="text-[13px] text-[#1D1D1F] font-medium leading-snug">
            "The best work of your life is here."
          </p>
          <p className="text-[12px] text-[#6E6E73] mt-2">
            Join a team where your ideas can become products used by millions.
          </p>
        </div>
        <div className="flex gap-2">
          {["Innovation", "Inclusion", "Impact"].map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-semibold text-[#6E6E73] bg-[#F5F5F7] px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </SidebarCard>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Component                                                     */
/* ------------------------------------------------------------------ */

export default function AppleLinkedIn() {
  return (
    <div
      className="min-h-screen bg-[#F5F5F7]"
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
      }}
    >
      {/* Top nav bar */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-[#E8E8ED]">
        <div className="max-w-[1128px] mx-auto px-4 sm:px-6 flex items-center justify-between h-[52px]">
          <div className="flex items-center gap-4">
            <LinkedInLogo className="w-[34px] h-[34px] text-[#0A66C2]" />
            <div className="hidden sm:flex items-center bg-[#EDF3F8] rounded-md px-3 py-[6px] gap-2 w-[280px]">
              <svg
                className="w-4 h-4 text-[#666]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
              <span className="text-[14px] text-[#666]">Search</span>
            </div>
          </div>
          <nav className="flex items-center gap-6 text-[#666]">
            {["Home", "Network", "Jobs", "Messaging", "Notifications"].map(
              (item) => (
                <span
                  key={item}
                  className="text-[12px] font-medium hover:text-[#1D1D1F] cursor-pointer transition-colors hidden md:block"
                >
                  {item}
                </span>
              )
            )}
            <div className="w-8 h-8 bg-[#E8E8ED] rounded-full" />
          </nav>
        </div>
      </header>

      {/* Page content */}
      <main className="max-w-[1128px] mx-auto px-4 sm:px-6 py-6">
        {/* Company card */}
        <div className="bg-white rounded-xl border border-[#E8E8ED] overflow-hidden mb-6">
          <BannerSection />
          <CompanyHeader />
          <TabNav />
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main feed */}
          <div className="lg:col-span-2 space-y-5">
            <AboutSection />
            <FeaturedJobs />

            {/* Posts */}
            <div>
              <h2
                className="text-[18px] font-semibold text-[#1D1D1F] mb-4 px-1"
                style={{ letterSpacing: "-0.003em" }}
              >
                Posts
              </h2>
              <div className="space-y-4">
                {POSTS.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-5">
            <LifeAtApple />
            <SimilarPages />

            <SidebarCard title="Locations">
              <div className="space-y-3">
                {[
                  {
                    name: "Apple Park",
                    address: "One Apple Park Way, Cupertino, CA 95014",
                  },
                  {
                    name: "Apple Infinite Loop",
                    address: "1 Infinite Loop, Cupertino, CA 95014",
                  },
                ].map((loc) => (
                  <div key={loc.name} className="flex items-start gap-2.5">
                    <svg
                      className="w-4 h-4 text-[#6E6E73] mt-0.5 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>
                    <div>
                      <p className="text-[14px] font-medium text-[#1D1D1F]">
                        {loc.name}
                      </p>
                      <p className="text-[12px] text-[#6E6E73]">
                        {loc.address}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </SidebarCard>

            <SidebarCard title="Company details">
              <dl className="space-y-3">
                {[
                  { label: "Website", value: COMPANY.website, isLink: true },
                  { label: "Industry", value: COMPANY.industry },
                  { label: "Company size", value: `${COMPANY.employeeCount} employees` },
                  { label: "Type", value: COMPANY.type },
                  { label: "Founded", value: String(COMPANY.founded) },
                  { label: "Specialties", value: COMPANY.specialties },
                ].map((item) => (
                  <div key={item.label}>
                    <dt className="text-[11px] font-semibold text-[#6E6E73] uppercase tracking-wider">
                      {item.label}
                    </dt>
                    <dd
                      className={`text-[14px] mt-0.5 ${
                        item.isLink ? "text-[#0066CC]" : "text-[#1D1D1F]"
                      }`}
                    >
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </SidebarCard>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#E8E8ED] bg-white mt-16">
        <div className="max-w-[1128px] mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <LinkedInLogo className="w-[20px] h-[20px] text-[#0A66C2]" />
            <span className="text-[12px] text-[#6E6E73]">
              LinkedIn Corporation &copy; 2025
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-[12px] text-[#6E6E73]">
            {[
              "About",
              "Accessibility",
              "Privacy & Terms",
              "Ad Choices",
              "Advertising",
              "More",
            ].map((link) => (
              <span
                key={link}
                className="hover:text-[#0066CC] cursor-pointer transition-colors"
              >
                {link}
              </span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
