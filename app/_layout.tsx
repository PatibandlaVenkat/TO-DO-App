import { ThemeProvider } from "@/hooks/useTheme";
import { Stack } from "expo-router";
import { ConvexProvider, ConvexReactClient } from "convex/react";

// Polyfill for React Native: window.addEventListener/removeEventListener are not defined
// Convex's browser client listens to online/offline events; in RN, no-ops are sufficient
if (typeof window !== "undefined") {
  const w = window as unknown as { addEventListener?: Function; removeEventListener?: Function };
  if (typeof w.addEventListener !== "function") {
    w.addEventListener = () => {};
  }
  if (typeof w.removeEventListener !== "function") {
    w.removeEventListener = () => {};
  }
}

const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
  unsavedChangesWarning: false,
});

export default function RootLayout() {
  return (
    <ConvexProvider client={convex}>
      <ThemeProvider>
        <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)"  />
        </Stack>
      </ThemeProvider>
    </ConvexProvider>
  );
}
