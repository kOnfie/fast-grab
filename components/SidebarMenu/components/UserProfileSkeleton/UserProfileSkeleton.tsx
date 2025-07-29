export const UserProfileSkeleton = () => {
  return (
    <div className="mt-[46px] text-center animate-pulse" role="status" aria-label="Завантажуємо дані користувача">
      <div className="w-15 h-15 rounded-[50%] bg-gradient-to-r from-gray-600 to-gray-700 border-1 border-solid border-[#ffffff1a] grid place-content-center m-auto mb-[13px] overflow-hidden relative">
        <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

        <div className="w-7 h-7 bg-gray-500 rounded-full"></div>
      </div>

      <div className="h-[18px] w-32 bg-gradient-to-r from-gray-600 to-gray-700 rounded mb-2 mx-auto relative overflow-hidden">
        <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </div>

      <div className="h-3 w-40 bg-gradient-to-r from-gray-700 to-gray-800 rounded mx-auto opacity-60 relative overflow-hidden">
        <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </div>

      <span className="sr-only">Завантажується...</span>
    </div>
  );
};
