module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'Create a new component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: `What's your component name?`,
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/component/index.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/stories.tsx',
        templateFile: 'templates/component/stories.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/styles.ts',
        templateFile: 'templates/component/styles.ts.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/test.tsx',
        templateFile: 'templates/component/test.tsx.hbs',
      },
    ],
  });
  plop.setGenerator('util', {
    description: 'Create a new util file',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: `What's your util name?`,
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/utils/{{camelCase name}}/index.ts',
        templateFile: 'templates/util/index.ts.hbs',
      },
      {
        type: 'add',
        path: '../src/utils/{{camelCase name}}/test.ts',
        templateFile: 'templates/util/test.ts.hbs',
      },
    ],
  });
};
