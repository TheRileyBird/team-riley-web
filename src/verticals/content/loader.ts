/**
 * Every market's content, keyed by id. Tests import this to check all three
 * without building; pages import ../active, which picks the one being built.
 */
import { content as finance } from '../finance/content';
import { content as health } from '../health/content';
import { content as law } from '../law/content';
import type { VerticalId } from '../index';
import type { VerticalContent } from './types';

export const content: Record<VerticalId, VerticalContent> = { health, law, finance };
