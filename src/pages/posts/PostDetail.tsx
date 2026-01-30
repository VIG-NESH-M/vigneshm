// ============================================================
// POST DETAIL PAGE
// ============================================================

import { useParams, Link, useNavigate } from "react-router-dom";
import { useDocumentTitle } from "@/hooks";
import { usePost, useDeletePost, useTogglePostPublish } from "@/hooks/queries";
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Badge,
  LoadingSpinner,
} from "@/components/ui";
import { ROUTES } from "@/config/constants";
import { formatDate } from "@/utils/format";

export default function PostDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: post, isLoading, error } = usePost(id);
  const deletePostMutation = useDeletePost();
  const togglePublishMutation = useTogglePostPublish();

  useDocumentTitle(post?.title ?? "Post Details");

  const handleDelete = async () => {
    if (!id) return;
    if (window.confirm("Are you sure you want to delete this post?")) {
      await deletePostMutation.mutateAsync(id);
      navigate(ROUTES.POSTS);
    }
  };

  const handleTogglePublish = async () => {
    if (!id || !post) return;
    await togglePublishMutation.mutateAsync({ id, published: !post.published });
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <LoadingSpinner size="lg" text="Loading post..." />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          Post not found
        </h2>
        <p className="text-gray-500 mb-4">
          The post you're looking for doesn't exist.
        </p>
        <Link to={ROUTES.POSTS}>
          <Button>Back to Posts</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Back Link */}
      <Link
        to={ROUTES.POSTS}
        className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Back to Posts
      </Link>

      {/* Post Card */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between mb-4">
            <Badge variant={post.published ? "success" : "secondary"} size="lg">
              {post.published ? "Published" : "Draft"}
            </Badge>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {formatDate(post.createdAt, { dateStyle: "long" })}
            </span>
          </div>
          <CardTitle className="text-3xl">{post.title}</CardTitle>
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="default">
                  #{tag}
                </Badge>
              ))}
            </div>
          )}
        </CardHeader>
        <CardContent>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap leading-relaxed">
              {post.body}
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <Button
              variant={post.published ? "secondary" : "success"}
              onClick={handleTogglePublish}
              isLoading={togglePublishMutation.isPending}
            >
              {post.published ? "Unpublish" : "Publish"}
            </Button>
            <Button variant="outline">Edit Post</Button>
            <Button
              variant="danger"
              onClick={handleDelete}
              isLoading={deletePostMutation.isPending}
            >
              Delete Post
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
