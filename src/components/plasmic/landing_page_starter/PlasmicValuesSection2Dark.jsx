// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: fBsca94bet4EUSoXHGArJn
// Component: llPcXwSuWZliV
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Button from "../../Button"; // plasmic-import: lukbyibyAwqNS/component
import ListItem from "../../ListItem"; // plasmic-import: oHMfA4SDXPnZt/component
import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: AmNFVTFTh6UY0/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_landing_page_starter.module.css"; // plasmic-import: fBsca94bet4EUSoXHGArJn/projectcss
import * as sty from "./PlasmicValuesSection2Dark.module.css"; // plasmic-import: llPcXwSuWZliV/css
import Icon17Icon from "./icons/PlasmicIcon__Icon17"; // plasmic-import: NvuSBTu9BcKvo/icon
import Icon16Icon from "./icons/PlasmicIcon__Icon16"; // plasmic-import: BlkW7qsUzdcy0/icon

export const PlasmicValuesSection2Dark__VariantProps = new Array();

export const PlasmicValuesSection2Dark__ArgProps = new Array("foreground");

function PlasmicValuesSection2Dark__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <p.Stack
      as={"section"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"foreground"}
        data-plasmic-override={overrides.foreground}
        hasGap={true}
        className={classNames(defaultcss.all, sty.foreground)}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <React.Fragment>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.freeBox__ydcSd)}
              >
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.freeBox__a1Git
                  )}
                >
                  {"Freedoms"}
                </div>

                <h2
                  className={classNames(
                    defaultcss.h2,
                    defaultcss.__wab_text,
                    sty.h2__oph9L
                  )}
                >
                  {"Open by design"}
                </h2>

                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.freeBox__rQg5I
                  )}
                >
                  {
                    "Vitae sed sem a justo mauris potenti a primis vivamus justo tempor viverra adipiscing convallis fusce odio condimentum mi parturient ultricies."
                  }
                </div>

                <Button
                  children2={
                    <Icon17Icon
                      className={classNames(defaultcss.all, sty.svg__dNuyq)}
                      role={"img"}
                    />
                  }
                  className={classNames("__wab_instance", sty.button__a6Td)}
                  endIcon={"endIcon"}
                  flat={"flat"}
                  linkLabel={"linkLabel"}
                  noGap={"noGap"}
                  slot={
                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.freeBox__uGiV
                      )}
                    >
                      {"Learn more"}
                    </div>
                  }
                />
              </p.Stack>

              <div className={classNames(defaultcss.all, sty.freeBox__opwzj)}>
                <ListItem
                  bottomBorder={"dark"}
                  className={classNames("__wab_instance", sty.listItem__w3FcL)}
                  slot={
                    <Icon16Icon
                      className={classNames(defaultcss.all, sty.svg__mkVuu)}
                      role={"img"}
                    />
                  }
                >
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.freeBox__b2JRa
                    )}
                  >
                    {"Built on capability"}
                  </div>
                </ListItem>

                <ListItem
                  bottomBorder={"dark"}
                  className={classNames("__wab_instance", sty.listItem__f3Jz)}
                  slot={
                    <Icon16Icon
                      className={classNames(defaultcss.all, sty.svg__u68J)}
                      role={"img"}
                    />
                  }
                >
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.freeBox___05Yj
                    )}
                  >
                    {"Highly energetic"}
                  </div>
                </ListItem>

                <ListItem
                  bottomBorder={"dark"}
                  className={classNames("__wab_instance", sty.listItem__jo9M)}
                  slot={
                    <Icon16Icon
                      className={classNames(defaultcss.all, sty.svg___2YLnv)}
                      role={"img"}
                    />
                  }
                >
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.freeBox__v23Ft
                    )}
                  >
                    {"100% transparency and accountability"}
                  </div>
                </ListItem>

                <ListItem
                  bottomBorder={"dark"}
                  className={classNames("__wab_instance", sty.listItem__ic2Cj)}
                  slot={
                    <Icon16Icon
                      className={classNames(defaultcss.all, sty.svg___3FmnM)}
                      role={"img"}
                    />
                  }
                >
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.freeBox__vU6Sy
                    )}
                  >
                    {"Refreshing clarity"}
                  </div>
                </ListItem>

                <ListItem
                  className={classNames("__wab_instance", sty.listItem__a6A4T)}
                  slot={
                    <Icon16Icon
                      className={classNames(defaultcss.all, sty.svg__b4FEt)}
                      role={"img"}
                    />
                  }
                >
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.freeBox___1WsH
                    )}
                  >
                    {"Modern results"}
                  </div>
                </ListItem>
              </div>
            </React.Fragment>
          ),

          value: args.foreground
        })}
      </p.Stack>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "foreground"],
  foreground: ["foreground"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicValuesSection2Dark__ArgProps,
      internalVariantPropNames: PlasmicValuesSection2Dark__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicValuesSection2Dark__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicValuesSection2Dark";
  } else {
    func.displayName = `PlasmicValuesSection2Dark.${nodeName}`;
  }
  return func;
}

export const PlasmicValuesSection2Dark = Object.assign(
  // Top-level PlasmicValuesSection2Dark renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    foreground: makeNodeComponent("foreground"),
    // Metadata about props expected for PlasmicValuesSection2Dark
    internalVariantProps: PlasmicValuesSection2Dark__VariantProps,
    internalArgProps: PlasmicValuesSection2Dark__ArgProps
  }
);

export default PlasmicValuesSection2Dark;
/* prettier-ignore-end */