// ============================================================
// SETTINGS PAGE
// ============================================================

import { useDocumentTitle } from "@/hooks";
import { useAppSelector, useAppDispatch } from "@/hooks";
import { selectTheme } from "@/store/selectors";
import { setTheme } from "@/store";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  Button,
} from "@/components/ui";
import type { Theme } from "@/types";

const themeOptions: { value: Theme; label: string; description: string }[] = [
  {
    value: "light",
    label: "Light",
    description: "Light theme for daytime use",
  },
  { value: "dark", label: "Dark", description: "Dark theme for nighttime use" },
  {
    value: "system",
    label: "System",
    description: "Follows your system preference",
  },
];

export default function SettingsPage() {
  useDocumentTitle("Settings");

  const dispatch = useAppDispatch();
  const currentTheme = useAppSelector(selectTheme);

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Settings
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          Manage your application preferences
        </p>
      </div>

      {/* Appearance */}
      <Card>
        <CardHeader>
          <CardTitle>Appearance</CardTitle>
          <CardDescription>
            Customize how the application looks on your device
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {themeOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => dispatch(setTheme(option.value))}
                className={`p-4 rounded-lg border-2 text-left transition-all ${
                  currentTheme === option.value
                    ? "border-primary-600 bg-primary-50 dark:bg-primary-900/20"
                    : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className={`w-8 h-8 rounded-lg ${
                      option.value === "light"
                        ? "bg-white border border-gray-200"
                        : option.value === "dark"
                          ? "bg-gray-900 border border-gray-700"
                          : "bg-gradient-to-r from-white to-gray-900"
                    }`}
                  />
                  <span className="font-medium text-gray-900 dark:text-white">
                    {option.label}
                  </span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {option.description}
                </p>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Notifications */}
      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>
            Configure how you receive notifications
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            {
              id: "email",
              label: "Email Notifications",
              description: "Receive updates via email",
            },
            {
              id: "push",
              label: "Push Notifications",
              description: "Receive browser push notifications",
            },
            {
              id: "marketing",
              label: "Marketing Emails",
              description: "Receive promotional content",
            },
          ].map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700 last:border-0"
            >
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">
                  {item.label}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  defaultChecked={item.id !== "marketing"}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
              </label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Data & Privacy */}
      <Card>
        <CardHeader>
          <CardTitle>Data & Privacy</CardTitle>
          <CardDescription>
            Manage your data and privacy settings
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-2">
            <div>
              <h3 className="font-medium text-gray-900 dark:text-white">
                Export Data
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Download a copy of all your data
              </p>
            </div>
            <Button variant="outline">Export</Button>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-2 border-t border-gray-200 dark:border-gray-700">
            <div>
              <h3 className="font-medium text-gray-900 dark:text-white">
                Clear Cache
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Clear locally stored data and preferences
              </p>
            </div>
            <Button variant="outline">Clear</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
