// ============================================================
// USER DETAIL PAGE
// ============================================================

import { useParams, Link, useNavigate } from "react-router-dom";
import { useDocumentTitle } from "@/hooks";
import { useUser, useDeleteUser } from "@/hooks/queries";
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Avatar,
  Badge,
  LoadingSpinner,
} from "@/components/ui";
import { ROUTES } from "@/config/constants";
import { formatDate } from "@/utils/format";

export default function UserDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: user, isLoading, error } = useUser(id);
  const deleteUserMutation = useDeleteUser();

  useDocumentTitle(
    user ? `${user.firstName} ${user.lastName}` : "User Details",
  );

  const handleDelete = async () => {
    if (!id) return;
    if (window.confirm("Are you sure you want to delete this user?")) {
      await deleteUserMutation.mutateAsync(id);
      navigate(ROUTES.USERS);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <LoadingSpinner size="lg" text="Loading user..." />
      </div>
    );
  }

  if (error || !user) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          User not found
        </h2>
        <p className="text-gray-500 mb-4">
          The user you're looking for doesn't exist.
        </p>
        <Link to={ROUTES.USERS}>
          <Button>Back to Users</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Back Link */}
      <Link
        to={ROUTES.USERS}
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
        Back to Users
      </Link>

      {/* User Profile Card */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="flex items-center gap-4">
            <Avatar
              src={user.avatar}
              name={`${user.firstName} ${user.lastName}`}
              size="xl"
            />
            <div>
              <CardTitle className="text-2xl">
                {user.firstName} {user.lastName}
              </CardTitle>
              <p className="text-gray-500 dark:text-gray-400">{user.email}</p>
            </div>
          </div>
          <Badge
            variant={user.role === "admin" ? "primary" : "secondary"}
            size="lg"
          >
            {user.role}
          </Badge>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                Email Address
              </h3>
              <p className="text-gray-900 dark:text-white">{user.email}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                Role
              </h3>
              <p className="text-gray-900 dark:text-white capitalize">
                {user.role}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                Created At
              </h3>
              <p className="text-gray-900 dark:text-white">
                {formatDate(user.createdAt, {
                  dateStyle: "long",
                  timeStyle: "short",
                })}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                Last Updated
              </h3>
              <p className="text-gray-900 dark:text-white">
                {formatDate(user.updatedAt, {
                  dateStyle: "long",
                  timeStyle: "short",
                })}
              </p>
            </div>
          </div>

          <div className="flex gap-3 mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <Button>Edit User</Button>
            <Button
              variant="danger"
              onClick={handleDelete}
              isLoading={deleteUserMutation.isPending}
            >
              Delete User
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
