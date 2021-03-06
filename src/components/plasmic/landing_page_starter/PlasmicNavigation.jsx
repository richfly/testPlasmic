// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: fBsca94bet4EUSoXHGArJn
// Component: pNv5KU4sb2jMa
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Logo from "../../Logo"; // plasmic-import: 24_Lb9y3biznf/component
import Button from "../../Button"; // plasmic-import: lukbyibyAwqNS/component
import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: AmNFVTFTh6UY0/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_landing_page_starter.module.css"; // plasmic-import: fBsca94bet4EUSoXHGArJn/projectcss
import * as sty from "./PlasmicNavigation.module.css"; // plasmic-import: pNv5KU4sb2jMa/css

export const PlasmicNavigation__VariantProps = new Array(
  "dark",
  "centered",
  "hideCta",
  "lightBg"
);

export const PlasmicNavigation__ArgProps = new Array("children", "slot");

function PlasmicNavigation__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__centered]: hasVariant(variants, "centered", "centered"),
        [sty.root__dark]: hasVariant(variants, "dark", "dark"),
        [sty.root__hideCta]: hasVariant(variants, "hideCta", "hideCta"),
        [sty.root__lightBg]: hasVariant(variants, "lightBg", "lightBg")
      })}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.freeBox___3WjPr, {
          [sty.freeBox__centered___3WjPrNcLE]: hasVariant(
            variants,
            "centered",
            "centered"
          ),

          [sty.freeBox__dark___3WjPRwbNw0]: hasVariant(variants, "dark", "dark")
        })}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <Logo className={classNames("__wab_instance", sty.logo__cabhb)} />
          ),

          value: args.children
        })}

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.freeBox__pteO6, {
            [sty.freeBox__centered__pteO6NcLE]: hasVariant(
              variants,
              "centered",
              "centered"
            )
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <React.Fragment>
                <Button
                  className={classNames("__wab_instance", sty.button___6ZleI)}
                  navLink={"navLink"}
                  slot={"Services"}
                />

                <Button
                  className={classNames("__wab_instance", sty.button___2ROeg)}
                  navLink={"navLink"}
                  slot={"Features"}
                />

                <Button
                  className={classNames("__wab_instance", sty.button__a7BAr)}
                  navLink={"navLink"}
                  slot={"Company"}
                />

                <Button
                  className={classNames("__wab_instance", sty.button__wCyUz)}
                  navLink={"navLink"}
                  slot={"Contact"}
                />

                <Button
                  className={classNames("__wab_instance", sty.button___1QSwy)}
                  navLink={"navLink"}
                  slot={"Log in"}
                />

                <Button
                  className={classNames("__wab_instance", sty.button___3Te9N)}
                  darkGray={"darkGray"}
                  slot={"Sign up"}
                />
              </React.Fragment>
            ),

            value: args.slot
          })}
        </p.Stack>

        {(hasVariant(variants, "centered", "centered") ? true : false) ? (
          <div
            className={classNames(defaultcss.all, sty.freeBox__cxT6R, {
              [sty.freeBox__centered__cxT6RNcLE]: hasVariant(
                variants,
                "centered",
                "centered"
              )
            })}
          >
            {(hasVariant(variants, "centered", "centered") ? false : true) ? (
              <button
                className={classNames(
                  defaultcss.button,
                  defaultcss.__wab_text,
                  sty.button___2AIy,
                  {
                    [sty.button__centered___2AIyNcLE]: hasVariant(
                      variants,
                      "centered",
                      "centered"
                    ),

                    [sty.button__dark___2AIyWbNw0]: hasVariant(
                      variants,
                      "dark",
                      "dark"
                    )
                  }
                )}
              >
                {"Sign up"}
              </button>
            ) : null}

            <Button
              className={classNames("__wab_instance", sty.button__i5NWs, {
                [sty.button__dark__i5NWswbNw0]: hasVariant(
                  variants,
                  "dark",
                  "dark"
                )
              })}
              dark={hasVariant(variants, "dark", "dark") ? "dark" : undefined}
              navLink={"navLink"}
              slot={"Log in"}
            />
          </div>
        ) : null}
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
      internalArgPropNames: PlasmicNavigation__ArgProps,
      internalVariantPropNames: PlasmicNavigation__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicNavigation__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavigation";
  } else {
    func.displayName = `PlasmicNavigation.${nodeName}`;
  }
  return func;
}

export const PlasmicNavigation = Object.assign(
  // Top-level PlasmicNavigation renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicNavigation
    internalVariantProps: PlasmicNavigation__VariantProps,
    internalArgProps: PlasmicNavigation__ArgProps
  }
);

export default PlasmicNavigation;
/* prettier-ignore-end */
