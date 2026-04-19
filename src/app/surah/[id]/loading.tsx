export default function Loading() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-accent gap-4 md:gap-6">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 md:h-16 md:w-16 md:border-t-4 md:border-b-4 border-primary"></div>
      <p className="text-primary font-bold animate-pulse text-lg">আয়াতগুলো লোড হচ্ছে...</p>
    </div>
  );
}