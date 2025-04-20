import { EnhancedInsightCard } from "@/components/enhanced-insight-card"

export default function EnhancedInsightExample() {
  const sampleInsight = {
    title: "Implement Customer Segmentation for Targeted Email Campaigns",
    category: "Email Marketing",
    difficulty: "intermediate" as const,
    timeToImplement: "2-3 weeks",
    summary:
      "Increase conversion rates by segmenting your customer base and delivering personalized email campaigns tailored to specific user behaviors, preferences, and lifecycle stages.",
    problem:
      "Generic, one-size-fits-all email campaigns result in low engagement rates, poor conversion, and increased unsubscribe rates. Most SaaS companies are leaving money on the table by not properly segmenting their audience and personalizing their messaging.",
    solution:
      "Implement a comprehensive customer segmentation strategy that divides your user base into distinct groups based on behavior, engagement level, product usage patterns, and customer lifecycle stage. Then create targeted email campaigns with messaging specifically designed for each segment's needs and pain points.",
    implementation: {
      steps: [
        {
          title: "Audit your existing customer data",
          description:
            "Begin by evaluating what customer data you currently collect and identify gaps. You'll need data on user behavior, engagement metrics, product usage, and demographic information. Set up proper tracking if these data points aren't already being collected.",
        },
        {
          title: "Define your segmentation criteria",
          description:
            "Based on your business goals, determine the most valuable ways to segment your audience. Common segmentation models include: usage frequency (power users vs. occasional users), feature adoption (which product features they use most), account age (new vs. established), subscription tier, industry/vertical, company size, and engagement level.",
        },
        {
          title: "Create segment-specific user personas",
          description:
            "For each major segment, develop a detailed user persona that outlines their goals, challenges, and what messaging would resonate with them. This will guide your content creation process and ensure your campaigns speak directly to each segment's specific needs.",
        },
        {
          title: "Set up technical infrastructure",
          description:
            "Configure your email marketing platform and CRM to support your segmentation strategy. This includes creating custom fields, setting up automation rules, and establishing segment-based triggers. Most modern email platforms like Mailchimp, HubSpot, or Customer.io support advanced segmentation.",
        },
        {
          title: "Develop targeted content for each segment",
          description:
            "Create email templates, subject lines, and content specifically designed for each segment. Focus on addressing the unique pain points and goals of each group. Personalize elements like feature highlights, use cases, and calls-to-action based on segment characteristics.",
        },
        {
          title: "Implement A/B testing framework",
          description:
            "For each segment, set up A/B tests to optimize subject lines, content, send times, and CTAs. This allows you to refine your approach based on actual performance data rather than assumptions about what each segment will respond to.",
        },
        {
          title: "Create automation workflows",
          description:
            "Build automated email sequences triggered by specific user behaviors or lifecycle stages. For example, create distinct onboarding sequences for different user types, re-engagement campaigns for dormant users, or upgrade paths for users approaching usage limits.",
        },
        {
          title: "Establish monitoring and optimization process",
          description:
            "Set up a regular cadence to review campaign performance by segment. Look for patterns in which segments are most responsive and which types of content drive the best results. Use these insights to continuously refine your segmentation strategy and campaign approach.",
        },
      ],
    },
    metrics: [
      {
        name: "Segment-specific open rates",
        description:
          "Track how different segments respond to your emails by measuring open rates for each group separately.",
        target: "Improve by 15-25% compared to non-segmented campaigns",
      },
      {
        name: "Click-through rates by segment",
        description: "Measure how often users from each segment click on links within your emails.",
        target: "Improve by 20-30% compared to non-segmented campaigns",
      },
      {
        name: "Conversion rate by segment",
        description:
          "Track how many users from each segment complete desired actions after clicking through from emails.",
        target: "Improve by 10-20% compared to non-segmented campaigns",
      },
      {
        name: "Unsubscribe rate by segment",
        description: "Monitor how many users from each segment opt out of your emails.",
        target: "Reduce by 5-10% compared to non-segmented campaigns",
      },
      {
        name: "Revenue attributed to segmented campaigns",
        description: "Calculate the direct revenue impact of your segmented email marketing efforts.",
        target: "15-30% increase in email-attributed revenue",
      },
    ],
    resources: [
      {
        title: "Customer Segmentation Worksheet Template",
        url: "https://example.com/resources/segmentation-template",
        type: "template",
      },
      {
        title: "Email Segmentation Best Practices Guide",
        url: "https://example.com/resources/segmentation-guide",
        type: "article",
      },
      {
        title: "Segmentation Strategy Masterclass",
        url: "https://example.com/resources/segmentation-video",
        type: "video",
      },
      {
        title: "Segment.io Integration Guide",
        url: "https://example.com/resources/segment-integration",
        type: "tool",
      },
    ],
    caseStudies: [
      {
        company: "CloudTech SaaS",
        description: "Implemented behavioral segmentation based on feature usage patterns",
        result: "42% increase in upgrade conversions from free to paid plans",
      },
      {
        company: "MarketPro Platform",
        description: "Created industry-specific email sequences with tailored use cases",
        result: "27% improvement in trial-to-paid conversion rate",
      },
      {
        company: "DataSync App",
        description: "Developed re-engagement campaigns for dormant users based on previous usage patterns",
        result: "35% of dormant users became active again within 30 days",
      },
    ],
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Enhanced Marketing Insight Example</h1>
      <EnhancedInsightCard {...sampleInsight} />
    </div>
  )
}
