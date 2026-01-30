// ============================================================
// POSTS LIST PAGE
// ============================================================

import { useState } from "react";
import { Link } from "react-router-dom";
import { useDocumentTitle, useDebounce } from "@/hooks";
import { usePosts, useDeletePost } from "@/hooks/queries";
import { Button, Input, Card, Badge, LoadingSpinner } from "@/components/ui";
import { ROUTES } from "@/config/constants";
import { formatRelativeTime, truncate } from "@/utils/format";

export default function PostsPage() {
  useDocumentTitle("Posts");

  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const debouncedSearch = useDebounce(search, 300);

  const { data, isLoading, isFetching } = usePosts({
    page,
    limit: 10,
    search: debouncedSearch,
  });

  const deletePostMutation = useDeletePost();

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      await deletePostMutation.mutateAsync(id);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Posts
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Manage and view all posts
          </p>
        </div>
        <Button leftIcon={<span>+</span>}>Create Post</Button>
      </div>

      {/* Search */}
      <Card padding="sm">
        <Input
          placeholder="Search posts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          leftIcon={
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          }
        />
      </Card>

      {/* Posts Grid */}
      {isLoading ? (
        <div className="flex justify-center py-12">
          <LoadingSpinner size="lg" text="Loading posts..." />
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data?.data.map((post) => (
              <Card key={post.id} hoverable className="flex flex-col">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant={post.published ? "success" : "secondary"}>
                      {post.published ? "Published" : "Draft"}
                    </Badge>
                    <span className="text-xs text-gray-500">
                      {formatRelativeTime(post.createdAt)}
                    </span>
                  </div>
                  <Link to={ROUTES.POST_DETAIL.replace(":id", post.id)}>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2 hover:text-primary-600 dark:hover:text-primary-400">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    {truncate(post.body, 100)}
                  </p>
                  {post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="default" size="sm">
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
                <div className="flex gap-2 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <Link
                    to={ROUTES.POST_DETAIL.replace(":id", post.id)}
                    className="flex-1"
                  >
                    <Button variant="outline" size="sm" fullWidth>
                      View
                    </Button>
                  </Link>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleDelete(post.id)}
                    disabled={deletePostMutation.isPending}
                  >
                    Delete
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          {data && data.pagination.totalPages > 1 && (
            <div className="flex items-center justify-center gap-4">
              <Button
                variant="outline"
                onClick={() => setPage((p) => p - 1)}
                disabled={!data.pagination.hasPrevPage || isFetching}
              >
                Previous
              </Button>
              <span className="text-sm text-gray-500">
                Page {page} of {data.pagination.totalPages}
              </span>
              <Button
                variant="outline"
                onClick={() => setPage((p) => p + 1)}
                disabled={!data.pagination.hasNextPage || isFetching}
              >
                Next
              </Button>
            </div>
          )}

          {/* Empty State */}
          {data?.data.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400">No posts found</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}
