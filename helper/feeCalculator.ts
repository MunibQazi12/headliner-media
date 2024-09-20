export function calculateFee(distance: number, quantity: number): number {
  // Define the minimum order thresholds
  const minimumOrders: [number, number, number][] = [
    [0, 50, 50],
    [51, 100, 200],
    [101, 200, 500],
    [201, 100000, 1000]
  ];

  // Define the fees for the ranges
  const fees: [number, number, number][] = [
    [51, 100, 100],
    [101, 150, 200],
    [151, 200, 250],
    [201, 250, 300],
    [251, 100000, 350]
  ];

  // Check for free shipping
  const isFreeShipping = minimumOrders.some(
    ([minDistance, maxDistance, minOrder]) => {
      return (
        distance >= minDistance &&
        distance <= maxDistance &&
        quantity >= minOrder
      );
    }
  );

  if (isFreeShipping) {
    return 0;
  }

  // Calculate the fee if not eligible for free shipping
  const feeRange = fees.find(([minDistance, maxDistance]) => {
    return distance >= minDistance && distance <= maxDistance;
  });

  if (feeRange) {
    return feeRange[2]; // Return the fee
  }

  // Return -1 if distance is out of range
  return 0;
}
