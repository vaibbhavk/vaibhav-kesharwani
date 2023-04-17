// fields

const educationFields = `
  _id,
  name,
  college,
  location,
  date
`;

const experienceFields = `_id,
name,
company,
type,
location,
done,
date,
tech`;

const projectFields = `_id,
name,
desc,
logo,
url,
github,
tech`;

const skillFields = `_id,
title,
projects,
logo`;

// queries

export const allEducationsQuery = `*[_type == "education"] {
  ${educationFields}
}`;

export const allExperiencesQuery = `*[_type == "experience"] {
  ${experienceFields}
}`;

export const allProjectsQuery = `*[_type == "project"] {
  ${projectFields}
}`;

export const allSkillsQuery = `*[_type == "skill"] {
  ${skillFields}
}`;
