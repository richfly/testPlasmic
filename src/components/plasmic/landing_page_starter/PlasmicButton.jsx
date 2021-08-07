// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: fBsca94bet4EUSoXHGArJn
// Component: lukbyibyAwqNS
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_landing_page_starter.module.css"; // plasmic-import: fBsca94bet4EUSoXHGArJn/projectcss
import * as sty from "./PlasmicButton.module.css"; // plasmic-import: lukbyibyAwqNS/css
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: 7rjKMV5qs1RxJ/icon

export const PlasmicButton__VariantProps = new Array(
  "startIcon",
  "endIcon",
  "noLabel",
  "ouline",
  "linkLabel",
  "navLink",
  "darkGray",
  "dark",
  "bgDifference",
  "colors",
  "round",
  "large",
  "flat",
  "noGap",
  "extraSmallShadow"
);

export const PlasmicButton__ArgProps = new Array(
  "children",
  "slot",
  "children2",
  "link"
);

function PlasmicButton__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <p.Stack
      as={"a"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__bgDifference]: hasVariant(
          variants,
          "bgDifference",
          "bgDifference"
        ),

        [sty.root__colors_blue]: hasVariant(variants, "colors", "blue"),
        [sty.root__colors_green]: hasVariant(variants, "colors", "green"),
        [sty.root__colors_indigo]: hasVariant(variants, "colors", "indigo"),
        [sty.root__colors_red]: hasVariant(variants, "colors", "red"),
        [sty.root__colors_white]: hasVariant(variants, "colors", "white"),
        [sty.root__darkGray]: hasVariant(variants, "darkGray", "darkGray"),
        [sty.root__endIcon]: hasVariant(variants, "endIcon", "endIcon"),
        [sty.root__extraSmallShadow]: hasVariant(
          variants,
          "extraSmallShadow",
          "extraSmallShadow"
        ),

        [sty.root__flat]: hasVariant(variants, "flat", "flat"),
        [sty.root__large]: hasVariant(variants, "large", "large"),
        [sty.root__linkLabel]: hasVariant(variants, "linkLabel", "linkLabel"),
        [sty.root__navLink]: hasVariant(variants, "navLink", "navLink"),
        [sty.root__noGap]: hasVariant(variants, "noGap", "noGap"),
        [sty.root__noLabel]: hasVariant(variants, "noLabel", "noLabel"),
        [sty.root__ouline]: hasVariant(variants, "ouline", "ouline"),
        [sty.root__round]: hasVariant(variants, "round", "round"),
        [sty.root__startIcon]: hasVariant(variants, "startIcon", "startIcon")
      })}
      href={args.link}
    >
      {(
        hasVariant(variants, "noLabel", "noLabel")
          ? true
          : hasVariant(variants, "startIcon", "startIcon")
          ? true
          : false
      )
        ? p.renderPlasmicSlot({
            defaultContents: (
              <IconIcon
                className={classNames(defaultcss.all, sty.svg__wzzc0)}
                role={"img"}
              />
            ),

            value: args.children
          })
        : null}
      {(hasVariant(variants, "noLabel", "noLabel") ? false : true)
        ? p.renderPlasmicSlot({
            defaultContents: "Label",
            value: args.slot,
            className: classNames(sty.slotSlot, {
              [sty.slotSlot__bgDifference]: hasVariant(
                variants,
                "bgDifference",
                "bgDifference"
              ),

              [sty.slotSlot__colors_blue]: hasVariant(
                variants,
                "colors",
                "blue"
              ),

              [sty.slotSlot__colors_green]: hasVariant(
                variants,
                "colors",
                "green"
              ),

              [sty.slotSlot__colors_indigo]: hasVariant(
                variants,
                "colors",
                "indigo"
              ),

              [sty.slotSlot__colors_red]: hasVariant(variants, "colors", "red"),
              [sty.slotSlot__darkGray]: hasVariant(
                variants,
                "darkGray",
                "darkGray"
              ),

              [sty.slotSlot__dark]: hasVariant(variants, "dark", "dark"),
              [sty.slotSlot__endIcon]: hasVariant(
                variants,
                "endIcon",
                "endIcon"
              ),

              [sty.slotSlot__large]: hasVariant(variants, "large", "large"),
              [sty.slotSlot__linkLabel]: hasVariant(
                variants,
                "linkLabel",
                "linkLabel"
              ),

              [sty.slotSlot__navLink]: hasVariant(
                variants,
                "navLink",
                "navLink"
              ),

              [sty.slotSlot__noLabel]: hasVariant(
                variants,
                "noLabel",
                "noLabel"
              ),

              [sty.slotSlot__startIcon]: hasVariant(
                variants,
                "startIcon",
                "startIcon"
              )
            })
          })
        : null}
      {(
        hasVariant(variants, "noLabel", "noLabel")
          ? false
          : hasVariant(variants, "endIcon", "endIcon")
          ? true
          : hasVariant(variants, "startIcon", "startIcon")
          ? false
          : false
      )
        ? p.renderPlasmicSlot({
            defaultContents: (
              <IconIcon
                className={classNames(defaultcss.all, sty.svg__sdPmI)}
                role={"img"}
              />
            ),

            value: args.children2
          })
        : null}
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicButton__ArgProps,
      internalVariantPropNames: PlasmicButton__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicButton__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicButton";
  } else {
    func.displayName = `PlasmicButton.${nodeName}`;
  }
  return func;
}

export const PlasmicButton = Object.assign(
  // Top-level PlasmicButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicButton
    internalVariantProps: PlasmicButton__VariantProps,
    internalArgProps: PlasmicButton__ArgProps
  }
);

export default PlasmicButton;
/* prettier-ignore-end */
