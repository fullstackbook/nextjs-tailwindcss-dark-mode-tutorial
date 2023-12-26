import ThemeSwitch from "@/components/theme-switch";

export default function Home() {
  return (
    <div className="text-black bg-white dark:text-white dark:bg-black h-screen">
      <h1>Home</h1>
      <p>Hello, World!</p>
      <ThemeSwitch />
    </div>
  );
}
