import { HTMLAttributes } from 'react';
import { WithContentElementBaseModifier } from '../../../content-elements/types';

const CONTENT_ELEMENT_TEXT_TYPES = {
  _elementName: 'text',
  _types: [
    'title',
    'subtitle',
    'header',
    'subheader',
    'text-title',
    'section-title',
    'caption',
    'mark',
  ] as const,
  get() {
    return this._types;
  },
};

export type ContentElementTextType =
  typeof CONTENT_ELEMENT_TEXT_TYPES._types[number];

const CONTENT_ELEMENT_TEXT_TAGS = {
  _elementName: 'text',
  _tags: [
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'p',
    'span',
    'i',
    'b',
    'em',
  ] as const,
  get() {
    return this._tags;
  },
};

export type ContentElementTextTag =
  typeof CONTENT_ELEMENT_TEXT_TAGS._tags[number];

const CONTENT_ELEMENT_TEXT_MODIFIERS = {
  _elementName: 'text',
  _modifiers: [
    'center',
    'left',
    'right',
    'bolder',
    'thicker',
    'big',
    'sm',
  ] as const,
  get() {
    return this._modifiers;
  },
};

export type ContentElementTextModifier = typeof CONTENT_ELEMENT_TEXT_MODIFIERS._modifiers[number];

export const CONTENT_ELEMENT_TEXT = {
  _elementName: 'text',
  _elementSettings: {
    DEFAULT_TAG: 'p',
  },
  types: CONTENT_ELEMENT_TEXT_TYPES.get(),
  tags: CONTENT_ELEMENT_TEXT_TAGS.get(),
  modifiers: CONTENT_ELEMENT_TEXT_MODIFIERS.get(),
} as const;

export type ContentElementTextProps = HTMLAttributes<ContentElementTextTag> & {
  type: ContentElementTextType;
  tag: ContentElementTextTag;
  modifiers: WithContentElementBaseModifier<ContentElementTextModifier>[];
};
