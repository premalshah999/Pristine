export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  if (Array.isArray(data)) {
    return (
      <>
        {data.map((item, index) => (
          <JsonLdScript key={index} data={item} />
        ))}
      </>
    );
  }

  return <JsonLdScript data={data} />;
}

function JsonLdScript({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
