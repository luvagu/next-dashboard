export default function DisplayError({
  fieldError,
  describedById,
}: {
  fieldError: string[] | undefined;
  describedById: string;
}) {
  return (
    fieldError && (
      <div
        id={describedById}
        aria-live="polite"
        aria-atomic="true"
        className="mt-2 flex flex-col gap-2"
      >
        {fieldError.map((error: string) => (
          <p className="text-sm text-red-500" key={error}>
            {error}
          </p>
        ))}
      </div>
    )
  );
}
