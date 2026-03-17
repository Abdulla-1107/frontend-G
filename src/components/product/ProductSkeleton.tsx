const ProductSkeleton = () => (
  <div className="animate-pulse">
    <div className="aspect-[3/4] rounded-2xl bg-muted" />
    <div className="mt-4 space-y-2 px-1">
      <div className="h-5 w-3/4 rounded bg-muted" />
      <div className="h-4 w-full rounded bg-muted" />
      <div className="h-5 w-1/3 rounded bg-muted" />
    </div>
  </div>
);

export default ProductSkeleton;
