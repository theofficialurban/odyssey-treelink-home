import type { CustomLink } from "@/siteConfig";
import { getEnv } from "astro/env/runtime";
import { defineAction } from "astro:actions";
import {
  createClient,
  type Entry,
  type EntryCollection,
  type EntryField,
  type EntryFields,
  type EntryFieldType,
  type EntryFieldTypes,
  type EntryLink,
  type EntrySkeletonType,
  type FieldItem,
  type FieldsType,
} from "contentful";

export type LinksEntry = {
  contentTypeId: "odysseyLinks";
  fields: {
    id: EntryFieldTypes.Number;
    title: EntryFieldTypes.Text;
    url: EntryFieldTypes.Text;
    style: EntryFieldTypes.Text;
    glassColor: EntryFieldTypes.Text;
  };
};
export type LinksGroupEntry = {
  contentTypeId: "linkGroup";
  fields: {
    title: EntryFieldTypes.Text;
    links: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<LinksEntry>>;
    order: EntryFieldTypes.Number;
    headerClass: EntryFieldTypes.Text;
    ulClass: EntryFieldTypes.Text;
    headerStyle: EntryFieldTypes.Text;
  };
};

export const server = {
  content: defineAction<
    EntryCollection<LinksGroupEntry, "WITHOUT_UNRESOLVABLE_LINKS">
  >({
    async handler(input, context) {
      const spaceId = import.meta.env.CONTENTFUL_SPACE_ID;
      const contentApi = import.meta.env.CONTENTFUL_DELIVERY_API;
      const contentfulClient = createClient({
        space: spaceId,
        accessToken: contentApi,
      });
      const linkGroups =
        await contentfulClient.withoutUnresolvableLinks.getEntries<LinksGroupEntry>(
          {
            content_type: "linkGroup",
            order: ["fields.order"],
          },
        );

      return linkGroups;
    },
  }),
};
