import { getPaths } from '@redwoodjs/internal'

import c from 'src/lib/colors'

// the lines that need to be added to App.{js,tsx}
export const config = {
  imports: [],
  authProvider: {
    type: 'dbAuth',
  },
}

// required packages to install
export const webPackages = []
export const apiPackages = []
export const functionsPath = getPaths().api.functions.replace(
  getPaths().base,
  ''
)

// any notes to print out when the job is done
export const notes = [
  `${c.warning('Done! But you have a little more work to do:')}\n`,
  'You will need to add a couple of fields to your User table in order',
  'to store a hashed password and salt:',
  '',
  '  model User {',
  '    id             Int @id @default(autoincrement())',
  '    email          String  @unique',
  '    hashedPassword String   // <─┐',
  '    salt           String   // <─┴─ add these lines',
  '  }',
  '',
  'If you already have existing user records you will need to provide',
  'a default value or Prisma complains, so change those to:',
  '',
  '  hashedPassword String @default("")',
  '  salt           String @default("")',
  '',
  "You'll need to let Redwood know what field you're using for your",
  "users' `id` and `username` fields. In this case we're using `id` and",
  '`email`, so update those in the `authFields` config in',
  `\`${functionsPath}/auth.js\` (this is also the place to tell Redwood if`,
  'you used a different name for the `hashedPassword` or `salt` fields):',
  '',
  '  authFields: {',
  "    id: 'id',",
  "    username: 'email',",
  "    hashedPassword: 'hashedPassword',",
  "    salt: 'salt',",
  '  },',
  '',
  "Need simple Login and Signup pages? We've got a generator for those",
  'as well:',
  '',
  '  yarn rw g scaffold dbAuth',
]
