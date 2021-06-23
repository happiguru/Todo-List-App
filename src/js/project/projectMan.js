/* eslint-disable no-plusplus */
/* eslint-disable no-use-before-define */
/* eslint-disable import/no-mutable-exports */
import * as Observer from '../asset/observer';

let projects = [];
let currentProject;

Observer.on('assignCurrentProject', assignCurrentProject);
Observer.on('updateProject', update);

function assignCurrentProject(index) {
  currentProject = projects[index];
}

function add(project) {
  projects.push(project);
  Observer.omit('updateProjects', projects);
}

function remove(index) {
  projects.splice(index, 1);
  Observer.omit('updateProjects', projects);
}

function load(data) {
  projects = data;
  Observer.omit('updateProjects', projects);
}

function update() {
  Observer.omit('updateProjects', projects);
}

function randomProject() {
  const index = Math.floor(projects.length * Math.random());
  return projects[index];
}

function deleteCurrentProject() {
  for (let i = 0; i < projects.length; i++) {
    if (projects[i] === currentProject) {
      projects.splice(i, 1);
      currentProject = null;
      Observer.omit('updateProjects', projects);
      Observer.omit('updateProject');
      return;
    }
  }
}

export {
  add, remove, load, randomProject, deleteCurrentProject, currentProject,
};

module.exports = {
  add, remove, load, randomProject, deleteCurrentProject, currentProject,
};