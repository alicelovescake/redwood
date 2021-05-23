import path from 'path'

const FIXTURE_PATH = path.resolve(
  __dirname,
  '../../../../__fixtures__/example-todo-main'
)

beforeAll(() => {
  process.env.__REDWOOD__CONFIG_PATH = FIXTURE_PATH
})
afterAll(() => {
  delete process.env.__REDWOOD__CONFIG_PATH
})

import { findCells, findDirectoryNamedModules, findPages } from '../files'
import { ensurePosixPath } from '../paths'

test('finds all the cells', () => {
  const paths = findCells()
  const p = paths.map((p) => p.replace(FIXTURE_PATH, '')).map(ensurePosixPath)

  expect(p).toMatchInlineSnapshot(`
    Array [
      "/web/src/components/NumTodosCell/NumTodosCell.js",
      "/web/src/components/TodoListCell/TodoListCell.tsx",
    ]
  `)
})

test('finds directory named modules', () => {
  const paths = findDirectoryNamedModules()
  const p = paths.map((p) => p.replace(FIXTURE_PATH, '')).map(ensurePosixPath)

  expect(p).toMatchInlineSnapshot(`
    Array [
      "/api/src/services/todos/todos.js",
      "/web/src/components/AddTodo/AddTodo.js",
      "/web/src/components/Check/Check.js",
      "/web/src/components/TodoItem/TodoItem.js",
      "/web/src/layouts/SetLayout/SetLayout.js",
    ]
  `)
})

test('finds all the page files', () => {
  const paths = findPages()
  const p = paths.map((p) => p.replace(FIXTURE_PATH, '')).map(ensurePosixPath)

  expect(p).toMatchInlineSnapshot(`
    Array [
      "/web/src/pages/BarPage/BarPage.tsx",
      "/web/src/pages/FatalErrorPage/FatalErrorPage.js",
      "/web/src/pages/FooPage/FooPage.tsx",
      "/web/src/pages/HomePage/HomePage.tsx",
      "/web/src/pages/NotFoundPage/NotFoundPage.js",
      "/web/src/pages/TypeScriptPage/TypeScriptPage.tsx",
      "/web/src/pages/admin/EditUserPage/EditUserPage.jsx",
    ]
  `)
})
