/* eslint-disable no-use-before-define */
import { on } from './observer';

on('updateProjects', updateProjects);
on('assignCurrentProject', updateCurrentProject);

function updateProjects(projects) {
  localStorage.setItem('projects', JSON.stringify(projects));
}

function updateCurrentProject(index) {
  localStorage.setItem('currentProjectIndex', index);
}