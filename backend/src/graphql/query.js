import { userQueries } from './resources/user.schema';

const Query = `
type Query{
  ${userQueries}
}
`;
export default Query;
