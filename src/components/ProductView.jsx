import { useLoaderData } from "react-router";
const ProductView = () => {
  const product = useLoaderData();
  return (
    <>
      <h1>{product.title}</h1>
      <div className="m-10 flex justify-center">
        <ul role="list" className="w-full max-w-2xl divide-y divide-gray-100">
          <li className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <img
                alt={product.title}
                src={product.thumbnail}
                loading="lazy"
                width={48}
                height={48}
                className="size-12 flex-none rounded-full bg-gray-50 object-cover cursor-pointer"
              />

              <div className="min-w-0 flex-auto">
                <p className="text-sm/6 font-semibold text-gray-900">
                  {product.title}
                </p>
                <p className="mt-1 truncate text-xs/5 text-gray-500">
                  {product.description}
                </p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm/6 text-gray-900">
                {product.availabilityStatus}
              </p>

              <p className="mt-1 text-xs/5 text-gray-500">
                Price {product.price} $
              </p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ProductView;
