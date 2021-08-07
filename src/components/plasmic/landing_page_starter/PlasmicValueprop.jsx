// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: fBsca94bet4EUSoXHGArJn
// Component: b5qPoGVcjzfiH
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
import * as sty from "./PlasmicValueprop.module.css"; // plasmic-import: b5qPoGVcjzfiH/css
import Icon8Icon from "./icons/PlasmicIcon__Icon8"; // plasmic-import: iAPoFE9XYiGbl/icon

export const PlasmicValueprop__VariantProps = new Array(
  "dark",
  "flat",
  "vertical",
  "color",
  "card",
  "flatIcon",
  "justDescription"
);

export const PlasmicValueprop__ArgProps = new Array(
  "slot",
  "slot2",
  "slot22",
  "children"
);

function PlasmicValueprop__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__card]: hasVariant(variants, "card", "card"),
        [sty.root__card_vertical]:
          hasVariant(variants, "card", "card") &&
          hasVariant(variants, "vertical", "vertical"),
        [sty.root__flatIcon]: hasVariant(variants, "flatIcon", "flatIcon"),
        [sty.root__flat]: hasVariant(variants, "flat", "flat"),
        [sty.root__justDescription]: hasVariant(
          variants,
          "justDescription",
          "justDescription"
        ),

        [sty.root__vertical]: hasVariant(variants, "vertical", "vertical")
      })}
    >
      <div
        className={classNames(defaultcss.all, sty.freeBox__fkAh1, {
          [sty.freeBox__card__fkAh1HgA8U]: hasVariant(variants, "card", "card"),
          [sty.freeBox__card_vertical__fkAh1HgA8UBllOy]:
            hasVariant(variants, "card", "card") &&
            hasVariant(variants, "vertical", "vertical"),
          [sty.freeBox__color_lightQuarternary__fkAh1Ovt4N]: hasVariant(
            variants,
            "color",
            "lightQuarternary"
          ),

          [sty.freeBox__flatIcon__fkAh1Hc2Jm]: hasVariant(
            variants,
            "flatIcon",
            "flatIcon"
          ),

          [sty.freeBox__flat__fkAh1PKfP0]: hasVariant(variants, "flat", "flat"),
          [sty.freeBox__vertical__fkAh1BllOy]: hasVariant(
            variants,
            "vertical",
            "vertical"
          )
        })}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <img
              alt={""}
              className={classNames(defaultcss.img, sty.img___2VH42)}
              role={"img"}
              src={
                "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/144/twitter/281/red-apple_1f34e.png"
              }
            />
          ),

          value: args.slot2
        })}
      </div>

      {false ? (
        <div
          className={classNames(defaultcss.all, sty.freeBox__ie4Pq, {
            [sty.freeBox__card__ie4PqhgA8U]: hasVariant(
              variants,
              "card",
              "card"
            ),

            [sty.freeBox__card_vertical__ie4PqhgA8UBllOy]:
              hasVariant(variants, "card", "card") &&
              hasVariant(variants, "vertical", "vertical"),
            [sty.freeBox__color_lightQuarternary__ie4Pqovt4N]: hasVariant(
              variants,
              "color",
              "lightQuarternary"
            ),

            [sty.freeBox__flatIcon__ie4Pqhc2Jm]: hasVariant(
              variants,
              "flatIcon",
              "flatIcon"
            ),

            [sty.freeBox__flat__ie4PqpKfP0]: hasVariant(
              variants,
              "flat",
              "flat"
            ),

            [sty.freeBox__vertical__ie4PqBllOy]: hasVariant(
              variants,
              "vertical",
              "vertical"
            )
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <Icon8Icon
                className={classNames(defaultcss.all, sty.svg___9Fsyx)}
                role={"img"}
              />
            ),

            value: args.slot22
          })}
        </div>
      ) : null}

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.freeBox__tVw7R, {
          [sty.freeBox__flat__tVw7RpKfP0]: hasVariant(variants, "flat", "flat"),
          [sty.freeBox__justDescription__tVw7Rk9Nm0]: hasVariant(
            variants,
            "justDescription",
            "justDescription"
          )
        })}
      >
        {(
          hasVariant(variants, "justDescription", "justDescription")
            ? false
            : true
        )
          ? p.renderPlasmicSlot({
              defaultContents: "Label",
              value: args.children,
              className: classNames(sty.slotChildren, {
                [sty.slotChildren__dark]: hasVariant(variants, "dark", "dark"),
                [sty.slotChildren__justDescription]: hasVariant(
                  variants,
                  "justDescription",
                  "justDescription"
                )
              })
            })
          : null}
        {p.renderPlasmicSlot({
          defaultContents:
            "Porttitor feugiat a scelerisque nullam parturient vestibulum tempor a litora suscipit arcu potenti varius venenatis venenatis dapibus fames adipiscing in in taciti.",
          value: args.slot,
          className: classNames(sty.slotSlot, {
            [sty.slotSlot__card]: hasVariant(variants, "card", "card"),
            [sty.slotSlot__dark]: hasVariant(variants, "dark", "dark"),
            [sty.slotSlot__justDescription]: hasVariant(
              variants,
              "justDescription",
              "justDescription"
            )
          })
        })}
      </p.Stack>
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
      internalArgPropNames: PlasmicValueprop__ArgProps,
      internalVariantPropNames: PlasmicValueprop__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicValueprop__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicValueprop";
  } else {
    func.displayName = `PlasmicValueprop.${nodeName}`;
  }
  return func;
}

export const PlasmicValueprop = Object.assign(
  // Top-level PlasmicValueprop renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicValueprop
    internalVariantProps: PlasmicValueprop__VariantProps,
    internalArgProps: PlasmicValueprop__ArgProps
  }
);

export default PlasmicValueprop;
/* prettier-ignore-end */
