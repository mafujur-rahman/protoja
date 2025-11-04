import React from 'react';
import BlogHero from './blog-hero';
import BlogContent from './blog-content';
import LatestPost from './latest-posts';
import UnlockDesign from '@/app/(pages)/about-us/components/unlock-design';

const BlogDetails = () => {
    return (
        <div>
            <BlogHero/>
            <BlogContent/>
            <LatestPost/>
            <UnlockDesign/>
        </div>
    );
};

export default BlogDetails;