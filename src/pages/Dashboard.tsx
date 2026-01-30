// ============================================================
// DASHBOARD PAGE
// ============================================================

import { useDocumentTitle } from "@/hooks";
import { useUsers, usePosts } from "@/hooks/queries";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  LoadingSpinner,
  Badge,
} from "@/components/ui";

// Stats Card Component
interface StatCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon: React.ReactNode;
  trend?: { value: number; isPositive: boolean };
}

function StatCard({ title, value, description, icon, trend }: StatCardProps) {
  return (
    <Card>
      <CardContent className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {title}
          </p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
            {value}
          </p>
          {description && (
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              {description}
            </p>
          )}
          {trend && (
            <div className="flex items-center gap-1 mt-2">
              <Badge
                variant={trend.isPositive ? "success" : "danger"}
                size="sm"
              >
                {trend.isPositive ? "+" : "-"}
                {Math.abs(trend.value)}%
              </Badge>
              <span className="text-xs text-gray-500">vs last month</span>
            </div>
          )}
        </div>
        <div className="text-primary-600 dark:text-primary-400">{icon}</div>
      </CardContent>
    </Card>
  );
}

export default function DashboardPage() {
  useDocumentTitle("Dashboard");

  const { data: usersData, isLoading: usersLoading } = useUsers({ limit: 5 });
  const { data: postsData, isLoading: postsLoading } = usePosts({ limit: 5 });

  const isLoading = usersLoading || postsLoading;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <LoadingSpinner size="lg" text="Loading dashboard..." />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Dashboard
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          Welcome back! Here's an overview of your application.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Users"
          value={usersData?.pagination.total ?? 0}
          description="Registered accounts"
          trend={{ value: 12, isPositive: true }}
          icon={
            <svg
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          }
        />
        <StatCard
          title="Total Posts"
          value={postsData?.pagination.total ?? 0}
          description="Published content"
          trend={{ value: 8, isPositive: true }}
          icon={
            <svg
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              />
            </svg>
          }
        />
        <StatCard
          title="Active Sessions"
          value={42}
          description="Current online users"
          icon={
            <svg
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          }
        />
        <StatCard
          title="Uptime"
          value="99.9%"
          description="Last 30 days"
          trend={{ value: 0.1, isPositive: true }}
          icon={
            <svg
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          }
        />
      </div>

      {/* Recent Data */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Users */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Users</CardTitle>
          </CardHeader>
          <CardContent>
            {usersData?.data.length ? (
              <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                {usersData.data.map((user) => (
                  <li
                    key={user.id}
                    className="py-3 flex items-center justify-between"
                  >
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {user.firstName} {user.lastName}
                      </p>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                    <Badge
                      variant={user.role === "admin" ? "primary" : "secondary"}
                    >
                      {user.role}
                    </Badge>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 text-center py-4">No users found</p>
            )}
          </CardContent>
        </Card>

        {/* Recent Posts */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Posts</CardTitle>
          </CardHeader>
          <CardContent>
            {postsData?.data.length ? (
              <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                {postsData.data.map((post) => (
                  <li key={post.id} className="py-3">
                    <p className="font-medium text-gray-900 dark:text-white truncate">
                      {post.title}
                    </p>
                    <p className="text-sm text-gray-500 line-clamp-1">
                      {post.body}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 text-center py-4">No posts found</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
