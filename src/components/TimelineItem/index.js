import React from "react";
import {
  Section,
  SectionTitle,
  UnderlinedLink,
  UnorderedList,
  ListItem
} from "../../shared/styles/styled-components";

const TimelineItem = ({ date, content }) => {
  const jsDate = new Date(date)
  return (
    <Section id="TimelineItem">
      <SectionTitle>{jsDate.toLocaleDateString(undefined,{ year: 'numeric', month: 'long', day: 'numeric' })}</SectionTitle>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Section>
  );
};

export default TimelineItem;
