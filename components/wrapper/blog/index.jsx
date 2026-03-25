import { getCategory, getAllBlogs } from '@/libs/apis/data/blog';
import dynamicImport from 'next/dynamic';
import { Suspense } from 'react';
import BlogPost from '@/components/blog/blogPost';

const ReachOut = dynamicImport(() => import('@/components/common/reachOut'), {
    loading: () => <div className="animate-pulse h-20 bg-gray-100 rounded"></div>
});

// Loader component for suspense fallback
const LoadingPlaceholder = () => (
    <div className="w-full h-40 bg-gray-100 animate-pulse rounded"></div>
);

const ITEMS_PER_PAGE = 6;

const BlogWrapper = async ({ preview }) => {

    const [categoryResponse, blogsResponse] = await Promise.all([
        getCategory(preview),
        getAllBlogs(1, ITEMS_PER_PAGE, null, null, preview),
    ]);

    return (
        <>
            {/* filter and blog listing */}
            <BlogPost
                filterItems={categoryResponse?.data}
                variant="blogPosts"
                preview={preview}
                initialPosts={blogsResponse?.data || []}
                initialTotalItems={blogsResponse?.meta?.pagination?.total || 0}
                itemsPerPage={ITEMS_PER_PAGE}
            />

            <Suspense fallback={<LoadingPlaceholder />}>
                {/* Contact */}
                <ReachOut preview={preview} />
            </Suspense>
        </>
    );
};

export default BlogWrapper;
