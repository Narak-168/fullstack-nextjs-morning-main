import BlogCard from '@/components/blog/BlogCard';
import React from 'react';

async function getBlog() {
  const baseUrl = process.env.BASE_URL_API;

  if (!baseUrl) {
    throw new Error('BASE_URL_API is not defined');
  }

  const res = await fetch(`${baseUrl}posts`);
  const data = await res.json();
  return data.posts;
}

// This is a Server Component (async supported)
export default async function Blog() {
  const blogs = await getBlog(); // <— Await here!

  return (
    <div className="w-[90%] mx-auto mt-5">
      <BlogCard blogs={blogs} />
    </div>
  );
}

