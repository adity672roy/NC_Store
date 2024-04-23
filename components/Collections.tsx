import { getCollections } from "@/lib/actions/actions";
import Image from "next/image";
import Link from "next/link";

const Collections = async () => {
  const collections = await getCollections();
  return (
    <div className="flex flex-col items-center gap-10 py-8 px-5">
      <p className="text-heading1-bold max-sm:text-heading3-bold">Collections</p>
      {!collections || collections.length === 0 ? (
        <p className="text-body-bold">No collection found</p>
      ) : (
        <div className="flex flex-wrap items-center justify-center gap-4">
          {collections &&
            collections.map((collection: CollectionType) => (
              <Link
                href={`/collections/${collection._id}`}
                key={collection._id}
              >
                <Image
                  src={collection.image}
                  alt={collection.title}
                  width={300}
                  height={250}
                  className="rounded-lg cursor-pointer"
                />
              </Link>
            ))}
        </div>
      )}
    </div>
  );
};

export default Collections;
