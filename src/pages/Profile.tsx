// ============================================================
// PROFILE PAGE
// ============================================================

import { useDocumentTitle } from "@/hooks";
import { useAppSelector } from "@/hooks";
import { selectUser } from "@/store/selectors";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Avatar,
  Button,
  Input,
} from "@/components/ui";
import { formatDate } from "@/utils/format";

export default function ProfilePage() {
  useDocumentTitle("Profile");

  const user = useAppSelector(selectUser);

  if (!user) {
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Profile
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          Manage your account settings and preferences
        </p>
      </div>

      {/* Profile Overview */}
      <Card>
        <CardContent className="flex flex-col sm:flex-row items-center gap-6">
          <Avatar
            src={user.avatar}
            name={`${user.firstName} ${user.lastName}`}
            size="xl"
          />
          <div className="text-center sm:text-left flex-1">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              {user.firstName} {user.lastName}
            </h2>
            <p className="text-gray-500 dark:text-gray-400">{user.email}</p>
            <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">
              Member since {formatDate(user.createdAt)}
            </p>
          </div>
          <Button variant="outline">Change Photo</Button>
        </CardContent>
      </Card>

      {/* Personal Information */}
      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="First Name"
                defaultValue={user.firstName}
                placeholder="Enter your first name"
              />
              <Input
                label="Last Name"
                defaultValue={user.lastName}
                placeholder="Enter your last name"
              />
            </div>
            <Input
              label="Email Address"
              type="email"
              defaultValue={user.email}
              placeholder="Enter your email"
            />
            <div className="flex justify-end">
              <Button>Save Changes</Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Change Password */}
      <Card>
        <CardHeader>
          <CardTitle>Change Password</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <Input
              label="Current Password"
              type="password"
              placeholder="Enter your current password"
            />
            <Input
              label="New Password"
              type="password"
              placeholder="Enter your new password"
            />
            <Input
              label="Confirm New Password"
              type="password"
              placeholder="Confirm your new password"
            />
            <div className="flex justify-end">
              <Button>Update Password</Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Danger Zone */}
      <Card className="border-red-200 dark:border-red-900">
        <CardHeader>
          <CardTitle className="text-red-600 dark:text-red-400">
            Danger Zone
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-medium text-gray-900 dark:text-white">
                Delete Account
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Permanently delete your account and all associated data. This
                action cannot be undone.
              </p>
            </div>
            <Button variant="danger">Delete Account</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
