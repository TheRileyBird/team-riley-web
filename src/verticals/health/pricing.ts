import type { PriceOverride } from '../../data/services';

/**
 * Price changes for the health market. Empty = the shared price sheet in
 * src/data/services.ts, which is the default and the intent: one business model,
 * three markets. Add an entry only when this market genuinely charges differently.
 */
export const priceOverrides: PriceOverride[] = [];
