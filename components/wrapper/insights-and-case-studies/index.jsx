import React, { Suspense } from 'react'
import { getInsightCategory, getAllInsightBlogs } from '@/libs/apis/data/insights';
import dynamic from "next/dynamic";
import BlogPost from '@/components/blog/blogPost';

const ReachOut = dynamic(() => import('@/components/common/reachOut'), {
    loading: () => <div className="animate-pulse h-20 bg-gray-100 rounded"></div>
});

// Loader component for suspense fallback
const LoadingPlaceholder = () => (
    <div className="w-full h-40 bg-gray-100 animate-pulse rounded"></div>
);

const ITEMS_PER_PAGE = 6;

const InsightCaseWrapper = async ({ preview }) => {

    const [insightCategoryResponse, insightsResponse] = await Promise.all([
        getInsightCategory(preview),
        getAllInsightBlogs(1, ITEMS_PER_PAGE, null, null, preview),
    ]);

    return (
        <>
            {/* filter and blog listing */}
            <BlogPost
                filterItems={insightCategoryResponse?.data}
                variant="caseStudies"
                preview={preview}
                initialPosts={insightsResponse?.data || []}
                initialTotalItems={insightsResponse?.meta?.pagination?.total || 0}
                itemsPerPage={ITEMS_PER_PAGE}
            />

            {/* Contact */}
            <Suspense fallback={<LoadingPlaceholder />}>
                <ReachOut preview={preview} />
            </Suspense>
        </>
    )
}

export default InsightCaseWrapper
