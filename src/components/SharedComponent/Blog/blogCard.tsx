import React from "react";
import Image from "next/image";
import { Blog } from "@/types/blog";
import Link from "next/link";
import { getImagePrefix } from "@/utils/utils";

// Fungsi untuk format tanggal dalam bahasa Indonesia
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const BlogCard: React.FC<{ blog: Blog }> = ({ blog }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative">
        <Image
          src={`${getImagePrefix()}images/blog/blog-01.jpg`}
          alt={blog.title || "Blog post"}
          width={400}
          height={200}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-sm text-gray-500">
            {formatDate(blog.date)}
          </span>
          <span className="text-sm text-primary">Blog</span>
        </div>
        <h3 className="text-xl font-semibold mb-3 line-clamp-2">
          {blog.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">
          Artikel blog menarik tentang cryptocurrency dan teknologi blockchain
        </p>
        <Link
          href={`/blog/${blog.slug}`}
          className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
        >
          Baca Selengkapnya
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
