import type { ProductDisplayProps } from '../../types';

//===============================
export const ProductDisplay = (props: ProductDisplayProps) => {
  const { product, showDescription, showStockStatus, onAddToCart, children } = props;

  return (
    <div className="p-4 border rounded shadow">
      {/* Product Image */}
      {product.imageUrl && (
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-40 object-cover mb-2"
        />
      )}

      {/* Product Name and Price */}
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-700">${product.price.toFixed(2)}</p>

      {/* Optional: Description */}
      {showDescription && <p className="mt-2">{product.description}</p>}

      {/* Optional: Stock Status */}
      {showStockStatus && (
        <p className={`mt-1 ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
          {product.inStock ? 'In Stock' : 'Out of Stock'}
        </p>
      )}

      {/* Optional: Add to Cart Button */}
      {onAddToCart && (
        <button
          onClick={() => onAddToCart(product.id)}
          className="mt-2 px-4 py-1 bg-green-600 text-white rounded"
        >
          Add to Cart
        </button>
      )}

      {/* Optional: children */}
      {children}
    </div>
  );
};
