import {
  MyElementConfig,
  MyElementName,
  MyElementTemplateProps,
  MyElementModifiers,
} from "../types";
import { BASE_CLASSNAME } from "../constants";

export function getMyElementTemplatePropsByConfig<
  ElementName extends MyElementName,
  ElementConfig extends MyElementConfig<ElementName>
>(config: ElementConfig) {
  const myElementClassName = getMyElementClassName(config);
  const myElementTag = getMyElementTag(config);

  const { modifiers, myname, contentConditions, ...nativeProps } = config;

  const customProps =
    // TODO: CUSTOM TEMPLATE
    // @ts-expect-error
    myname === "custom" ? { modifiers, myname, contentConditions } : {};

  return {
    ...nativeProps,
    ...customProps,
    className: myElementClassName,
    tag: myElementTag,
  } as unknown as MyElementTemplateProps<ElementName>;
}

function getClassNameByModifier<ElementName extends MyElementName>(
  modifier: MyElementModifiers<ElementName>[number]
) {
  return `${BASE_CLASSNAME}--${modifier}`;
}

const TAG_BY_ELEMENT_NAME = {
  text: "p",
};

const TAG_BY_ELEMENT_MODIFIER = {
  header: "h1",
  title: "h3",
  subtitle: "h5",
};

function getMyElementTag<ElementName extends MyElementName>(
  config: MyElementConfig<ElementName>
) {
  const { myname, tag, modifiers = [] } = config;

  if (tag) {
    return tag;
  }

  let tagByModifier;

  for (let m of modifiers) {
    // TODO: FAQ HOW TO FIX?
    // @ts-ignore
    tagByModifier = TAG_BY_ELEMENT_MODIFIER[m];
    if (tagByModifier) {
      break;
    }
  }

  if (tagByModifier) {
    return tagByModifier;
  }

  return TAG_BY_ELEMENT_NAME[myname];
}

function getMyElementClassName<ElementName extends MyElementName>(
  config: MyElementConfig<ElementName>
) {
  const { modifiers } = config;
  const classNameByMyName = `${BASE_CLASSNAME}-${config.myname}`;

  const classNameByModifiers = (modifiers ? modifiers : []).map(
    getClassNameByModifier
  );

  return [BASE_CLASSNAME, classNameByMyName, ...classNameByModifiers].join(" ");
}