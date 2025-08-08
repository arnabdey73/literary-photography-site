// Analytics utility for tracking and retrieving data
// This can be connected to Google Analytics, Vercel Analytics, or custom tracking

export interface AnalyticsData {
  visitors: number;
  pageViews: number;
  topPages: Array<{ url: string; views: number }>;
  sources: Array<{ name: string; percentage: number }>;
  engagement: {
    avgSession: string;
    bounceRate: number;
    pagesPerSession: number;
  };
}

// Mock data for development - replace with real analytics API calls
export async function getAnalyticsData(): Promise<AnalyticsData> {
  // In production, this would call your analytics API
  // For example: Google Analytics Data API, Vercel Analytics API, etc.
  
  return {
    visitors: 2847,
    pageViews: 12456,
    topPages: [
      { url: '/blog/literary/finding-light', views: 1234 },
      { url: '/photography/urban-nights', views: 987 },
      { url: '/', views: 856 },
      { url: '/about', views: 543 },
    ],
    sources: [
      { name: 'Direct', percentage: 45.2 },
      { name: 'Social Media', percentage: 28.7 },
      { name: 'Search Engines', percentage: 18.3 },
      { name: 'Referral', percentage: 7.8 },
    ],
    engagement: {
      avgSession: '3m 42s',
      bounceRate: 34.2,
      pagesPerSession: 2.8,
    },
  };
}

// Function to track page views (call this on each page)
export function trackPageView(page: string) {
  // In production, this would send data to your analytics service
  if (typeof window !== 'undefined') {
    // Example for Google Analytics
    // gtag('config', 'GA_MEASUREMENT_ID', {
    //   page_path: page
    // });
    
    console.log(`Tracking page view: ${page}`);
  }
}

// Function to track events
export function trackEvent(eventName: string, parameters: Record<string, any>) {
  if (typeof window !== 'undefined') {
    // Example for Google Analytics
    // gtag('event', eventName, parameters);
    
    console.log(`Tracking event: ${eventName}`, parameters);
  }
}
